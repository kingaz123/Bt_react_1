import React, { Component } from "react";

export default class CarouselComponent extends Component {
  render() {
    return (
      <div>
        <section class="py-4">
          <div className="cyberContainer">
            <div className="cyberCarousel bg-light rounded-3 text-left">
              <div className="m-4 m-lg-5">
                <h1 className="cyberCarousel__title">A warm welcome!</h1>
                <p className="cyberCarousel__intro">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
                  impedit enim. Sed incidunt vel eum labore nesciunt quae, eaque
                  voluptatum nulla, soluta maxime voluptatibus necessitatibus
                  culpa animi inventore!
                </p>
                <a className="btn btn-primary btn-lg" href="#!">
                  Call to action!
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
