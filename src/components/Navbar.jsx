/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';

export default function Navbar({ onTopicSelection }) {

    const onClick = (event) => {
        event.preventDefault();
        onTopicSelection(event.target.value);
    }

    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <button type="button" className="btn btn-white" value="World" onClick={onClick}>World</button>
                <button type="button" className="btn btn-white" value="Health" onClick={onClick}>Health</button>
                <button type="button" className="btn btn-white" value="Covid" onClick={onClick}>Covid</button>
                <button type="button" className="btn btn-white" value="Business" onClick={onClick}>Business</button>
                <button type="button" className="btn btn-white" value="Technology" onClick={onClick}>Technology</button>
                <button type="button" className="btn btn-white" value="Politics" onClick={onClick}>Politics</button>
                <button type="button" className="btn btn-white" value="Science" onClick={onClick}>Science</button>
                <button type="button" className="btn btn-white" value="Design" onClick={onClick}>Design</button>
                <button type="button" className="btn btn-white" value="Culture" onClick={onClick}>Culture</button>
                <button type="button" className="btn btn-white" value="Opinion" onClick={onClick}>Opinion</button>
                <button type="button" className="btn btn-white" value="Travel" onClick={onClick}>Travel</button>
                <button type="button" className="btn btn-white" value="Style" onClick={onClick}>Style</button>
            </nav>
        </div>
    )
}
