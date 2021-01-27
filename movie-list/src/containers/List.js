import React, { Component } from "react";
import Card from "../components/Card/Card";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await fetch("../../assets/data.json");
    const moviesJSON = await movies.json();
    console.log(moviesJSON);

    if (moviesJSON) {
      this.setState({
        data: moviesJSON,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return data.map((movie) => <Card key={movie.id} movie={movie} />);
  }
}
