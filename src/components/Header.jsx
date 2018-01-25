import React from "react";

class Header extends React.Component {
  render() {
    return (
      <form>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">
              <strong>Welcome To Chirper</strong>
            </h1>
          </div>
        </div>
      </form>
    );
  }
}

export default Header;
