import React, { Component } from 'react';

export default class News extends Component {
   
  render() {
      let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div>

        <div className="card" style={{width:"20rem"}}>
    <img src = {imageUrl} className="card-img-top" alt="..." style={{width:318, height:230}}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      <a href = {newsUrl} target = "_blank" rel="noreferrer" className="btn btn-primary"> Read more </a>

    </div>
  </div>
  </div>
    )
  }
}
