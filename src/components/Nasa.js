import React, { Component } from "react";

export class Nasa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nasa: []
    };
  }

  componentDidMount() {
    const url =
      "https://api.nasa.gov/planetary/apod?api_key=0epXY74B86sAs5HhKnOEdz2W8bzk86mvFYuuZhtM";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          nasa: data
        });
      });
  }

  render() {
    const nasa = this.state.nasa;
    const data = { ...nasa };
    return (
      <div>
	<h1>Welcome to nasa</h1>
        <h1>{data.title}</h1>
        <small>{data.date}</small>
        <img src={data.url} alt="img" />
        <p>{data.explanation}</p>
      </div>
    );
  }
}

export default Nasa;
