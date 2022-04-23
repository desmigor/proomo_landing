import React from 'react'
import './article.css'

function Article(props) {
    const imgUrl = props.imgUrl;
    const date = props.date;
    const text = props.text;

    return (
        <div className="proomo__blog-container_article">
            <div className="proomo__blog-container_article-image">
                <img src={imgUrl} alt="blog_image" />
            </div>
            <div className="proomo__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article