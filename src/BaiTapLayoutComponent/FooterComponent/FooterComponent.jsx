import React, { Component } from "react";

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark py-4">
          <p className="m-0 text-center text-white">
            Copyright © Your Website 2023
          </p>
        </footer>
      </div>
    );
  }
}
