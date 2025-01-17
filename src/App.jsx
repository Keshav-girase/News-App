// File: src/App.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import for React Router v6
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeadlinePosts from "./components/HeadlinePosts";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [countryCd, setCountryCd] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setTopic('');
        let countryCode = 'US'; // Set default country to 'US' (United States)
    
        try {
          const res = await axios.get("https://ipinfo.io/json");
          if (res.data && res.data.countryCode) {
            countryCode = res.data.countryCode;
          }
        } catch (err) {
          console.log("Error fetching country code, using default:", err.message);
        }
    
        setCountryCd(countryCode);
        console.log(countryCd);
    
        if (countryCode !== "") {
          const url =
            "http://api.mediastack.com/v1/news?" +
            `access_key=${import.meta.env.VITE_API_ACCESS_KEY}&` +
            `countries=${countryCode}&languages=en`;
    
          const res2 = await axios.get(url);
          setArticles(res2.data.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run this only once on mount

  useEffect(() => {
    async function fetchArticles() {
      if (countryCd !== '') {
        try {
          const url =
            "http://api.mediastack.com/v1/news?" +
            `access_key=${import.meta.env.VITE_API_ACCESS_KEY}&` +
            `countries=${countryCd}&languages=en`;
          const res2 = await axios.get(url);
          setArticles(res2.data.data);
        } catch (err) {
          console.log(err.message);
        } finally {
          setLoading(false);
        }
      }
    }
    
    // Only fetch articles if countryCd is set
    if (countryCd) {
      fetchArticles();
    }
  }, [countryCd]); // Only run this effect when countryCd changes

  const onTopicSelection = async (newTopic) => {
    try {
      setLoading(true);
      setTopic(newTopic);
      const url =
        "http://api.mediastack.com/v1/news?" +
        `access_key=${import.meta.env.VITE_API_ACCESS_KEY}&` +
        `countries=${countryCd}&languages=en&` +
        `keywords=${newTopic}`;
      const res2 = await axios.get(url);

      setArticles(res2.data.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header topic={topic} onTopicSelection={onTopicSelection} />
        <Navbar onTopicSelection={onTopicSelection} />
        <hr />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HeadlinePosts articles={articles} loading={loading} topic={topic} />} />
          </Routes>
        </div>
        <hr />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
