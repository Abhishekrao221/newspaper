import NewsItems from './NewsItems'
import React, { useEffect, useState } from 'react'

function News() {

  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=e01cd92d257d421e9677e8ae829977c4");
    const data = await response.json();
    return setUser(data);
  }
//api fetching
  useEffect(() => {
    fetchData();
  }, [])

  console.log(user.articles)
  return (
    <div>
      <div className='cointanier mx-4 my-4'>
        <h1>News भारत - TOP HEADLINES</h1>
        <div className='row my-5 mx-5' >
          {user.articles && user.articles.length > 0 && user.articles.map((items, index) => (<div key={index} className='col-md-4'>
            <NewsItems title={items.title} description={items.description} imageUrl={items.urlToImage} newsUrl={items.url} />
          </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark">&larr;Previous</button>
          <button type="button" className="btn btn-dark">Next&rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default News
