import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

class Product extends Component {
  state = {
    name: "burger",
    count: 0,
    imgurl: "logo192.png",
    names:[]//["ahmed","Osama","Ali"]
  };

  renderNames(){
    if (this.state.names.length === 0){
        return <h2>no names</h2>
    }
    else {return(
        <ul>

        <li>
            {this.state.names.map(name => (<li>{name}</li>))}
        </li>
      </ul>)
    }
  }
  clickHandler(){
    console.log("clicked");
  }

  render() {
    // Determine the button class based on the count
    const classes = this.state.count === 0 ? "btn btn-warning" : "btn btn-primary";

    return (
      <div>
        <span>{this.renderNames()}</span>
        <img src={this.state.imgurl} alt="" style={{ width: '50px', height: '50px' }} />
        <span className={classes}>{this.state.name}</span>
    
        <span className="badge badge-secondary">{this.state.count}</span>
        <button className="btn btn-primary" onClick={this.clickHandler}> click me</button>
      
      </div>
    );
  }
}

export default Product;
