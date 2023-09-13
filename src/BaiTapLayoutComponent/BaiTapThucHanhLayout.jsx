import React, { Component } from 'react'
import "./style.css"

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <header className="bg-dark">
          <div className="cyberContainer">
            <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#!">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </nav>
          </div>
        </header> 
        <section class="py-4">
          <div className="cyberContainer">
            <div className="cyberCarousel bg-light rounded-3 text-left">
              <div className="m-4 m-lg-5">
                <h1 className="cyberCarousel__title">A warm welcome!</h1>
                <p className="cyberCarousel__intro">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, impedit enim. Sed incidunt vel eum labore nesciunt quae, eaque voluptatum nulla, soluta maxime voluptatibus necessitatibus culpa animi inventore!
                </p>
                <a className="btn btn-primary btn-lg" href="#!">
                  Call to action!
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="cyberContainer mb-3">
            <div className="row justify-content-around">
            
                <div className="card">
                    <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur enim quis cumque!</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            
            
              <div className="card">
                    <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur enim quis cumque!</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
              </div>
            
           
                <div className="card">
                    <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur enim quis cumque!</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            
            
                <div className="card">
                    <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur enim quis cumque!</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            
          </div>
          </div>
        </section>
        <footer className="bg-dark py-4">          
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2023
            </p>
        </footer>
      </div>
    )
  }
}
