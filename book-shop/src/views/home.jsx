import React, { Component } from 'react';

class HomePage extends Component {
  render () {

    return (
      <main>
        <div classNameName="welcome-wrapper">
          <div className="welcome">
            <h1>Welcome to our book store, tanya !</h1>
            <p><a href="/store">Go To Store</a><a href="/orders">View your orders</a></p>
          </div>
          <h2>Top Rated</h2>
          <div className="row">
            <div className="card-deck space-top">
              <div className="card col-4"><img className="card-img-top card-image" src="https://images-na.ssl-images-amazon.com/images/I/419M8dJUa-L._SY346_.jpg"
                  alt="What the Wind Knows " />
                <div className="card-body">
                  <h5 className="card-title">What the Wind Knows </h5>
                  <p className="card-text">Anne Gallagher grew up enchanted by her grandfather’s stories of Ireland.
                    Heartbroken at his death, she travels to his childhood home to spread his ashes.</p>
                </div>
                <div className="card-footer"><small className="text-muted"></small><a type="button" className="btn btn-primary float-right btn-sm"
                    href="/details/5c75009b6fa7f81b2459134e">Details</a><button type="button" className="btn btn-warning float-right btn-sm">Order</button></div>
              </div>
              <div className="card col-4"><img className="card-img-top card-image" src="https://images-na.ssl-images-amazon.com/images/I/51fonMmNpnL.jpg"
                  alt="Harry Potter" />
                <div className="card-body">
                  <h5 className="card-title">Harry Potter</h5>
                  <p className="card-text">Harry Potter and the Philosopher's Stone is a fantasy novel written by British
                    author J. K. Rowling.</p>
                </div>
                <div className="card-footer"><small className="text-muted"></small><a type="button" className="btn btn-primary float-right btn-sm"
                    href="/details/5c750355eba4543e800f7ce4">Details</a><button type="button" className="btn btn-warning float-right btn-sm">Order</button></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default HomePage;
