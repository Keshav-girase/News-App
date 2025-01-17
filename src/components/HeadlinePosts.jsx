import React from 'react';
import '../App.css';
import Loading from './Loading';

export default function HeadlinePosts({ articles, loading, topic }) {

    const convertDate = (dateStr) => {
        let finalDate = new Date(dateStr);
        return finalDate.toLocaleDateString() + " " + finalDate.toLocaleTimeString();
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12 card mb-3">
                    <img className="card-img-top h-75 w-100 pt-2" src={articles[0].image || `https://source.unsplash.com/100x50/?${articles[0].source},news,${topic}`} alt={articles[0].source} />
                    <div className="card-body">
                        <a href={articles[0].url}><h5 className="card-title">{articles[0].title}</h5></a>
                        <p className="card-text d-none d-lg-block">{articles[0].description}</p>
                        <p className="card-text"><small className="text-muted">{convertDate(articles[0].published_at)} <b>Source: </b> {articles[0].source}</small></p>
                    </div>
                </div>
                {articles[1] && (
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="col-12 card mb-3">
                            <img className="card-img-top w-100 pt-2" src={articles[1].image || `https://source.unsplash.com/100x50/?${topic},${articles[1].source},news`} alt={articles[1].source} />
                            <div className="card-body">
                                <a href={articles[1].url}><h5 className="card-title">{articles[1].title}</h5></a>
                                <p className="card-text"><small className="text-muted">{convertDate(articles[1].published_at)} <b>Source: </b> {articles[1].source}</small></p>
                            </div>
                        </div>
                    </div>
                )}
                {articles[2] && (
                    <div className="col-12 card mb-3">
                        <img className="card-img-top w-100" src={articles[2].image || `https://source.unsplash.com/100x50/?${topic},${articles[2].source},news`} alt={articles[2].source} style={{ width: '100%' }} />
                        <div className="card-body">
                            <a href={articles[2].url}><h5 className="card-title">{articles[2].title}</h5></a>
                            <p className="card-text"><small className="text-muted">{convertDate(articles[2].published_at)} <b>Source: </b>{articles[2].source}</small></p>
                        </div>
                    </div>
                )}
            </div>
            <div className="row">
                {articles.slice(3, articles.length).map((article, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={article.url || index}>
                        <div className="card w-100 h-100 p-2">
                            <img className="card-img-top w-100 pt-2" src={article.image || `https://source.unsplash.com/100x50/?${topic},${article.source},news`} alt={article.title || 'News Image'} />
                            <div className="card-body">
                                <a href={article.url}><h5 className="card-title">{article.title}</h5></a>
                                <p className="card-text"><small className="text-muted">{convertDate(article.published_at)} <b>Source: </b> {article.source}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
