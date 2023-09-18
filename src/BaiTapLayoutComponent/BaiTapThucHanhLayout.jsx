import React, { Component } from "react";
import "./style.css";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import BodyComponent from "./BodyComponent/BodyComponent";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    );
  }
}
