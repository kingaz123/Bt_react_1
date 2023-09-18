import React, { Component } from "react";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import CardComponent from "../CardComponent/CardComponent";

export default class BodyComponent extends Component {
  render() {
    return (
      <div>
        <CarouselComponent />
        <CardComponent />
      </div>
    );
  }
}
