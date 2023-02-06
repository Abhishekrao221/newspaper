import React, { Component } from 'react'

export class Newsitems extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props
    return (
      <div className="card" style={{ width: "18rem"}}>
        
        <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/05/Court.png?impolicy=website&width=770&height=431" : imageUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}..</p>
          <a href={newsUrl}><button>Read more</button></a>
          
        </div>
      </div>

                
            
      )
  }
}


export default Newsitems
