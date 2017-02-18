import React from 'react';

class App extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
          </ul>
          <ul className="side-nav" id="mobile">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;
