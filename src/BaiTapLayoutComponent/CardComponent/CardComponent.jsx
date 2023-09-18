import React, { Component } from "react";

export default class CardComponent extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="cyberContainer mb-3">
            <div className="row justify-content-around">
              <div className="card">
                <img
                  src="https://picsum.photos/200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur enim quis cumque!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://picsum.photos/200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur enim quis cumque!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://picsum.photos/200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur enim quis cumque!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://picsum.photos/200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur enim quis cumque!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
