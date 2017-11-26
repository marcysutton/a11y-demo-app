import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import { PropsRoute } from './utils.js';

// Views
import Home from './home.js';
import SignupForm from './signup-form.js';

import Menu from './menu.js';

// if (process.env.NODE_ENV !== 'production') {
//   document.addEventListener('focusin', function() {
//     console.log(document.activeElement);
//   });
// }

const Favorites = () => (
  <div>
    <h2>Favorites</h2>
  </div>
)

// Modal.setAppElement('#root');

let modalStyles = {
  overlay : {
    backgroundColor: 'rgba(68,68,68,.95)',
    zIndex : 1
  }
}
class App extends Component {
  isMenuOpen(state) {
    if (state.isOpen) {
      let item = ReactDOM.findDOMNode(this.refs.firstItem);
      setTimeout(function() {
        item.focus();
      }, 100);
    }
    return state.isOpen;
  }
  pageFocus(ref) {
    if (this[ref]) {
      this.setState({menuOpen: false})
      this[ref].focus();
    }
  }

  constructor (props) {
    super(props)
    this.state = { modalOpen: false, menuOpen: false }
  }
  onUpdate(modalOpen) {
    this.setState({modalOpen});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="menu-wrap">
            <Menu
              isOpen={this.state.menuOpen}
              onStateChange={ this.isMenuOpen.bind(this) }>
              <ul>
                <li><Link 
                  to="/"
                  onClick={this.pageFocus.bind(this, 'main')}
                  ref="firstItem">
                    <i className="fa fa-fw fa-home" />
                    <span>Home</span>
                </Link></li>
                <li><Link to="/favorites">
                    <i className="fa fa-fw fa-star" />
                    <span>Favorites</span>
                </Link></li>
                <li><Link to="/alerts">
                    <i className="fa fa-fw fa-bell" />
                    <span>Alerts</span>
                </Link></li>
                <li><Link to="/messages">
                    <i className="fa fa-fw fa-envelope" />
                    <span>Messages</span>
                </Link></li>
                <li><Link to="/comments">
                    <i className="fa fa-fw fa-comment" />
                    <span>Comments</span>
                </Link></li>
              </ul>
            </Menu>
          </div>
          <div className="primary">
            <header className="App-header">
              <h1 className="App-title">a11y demo app</h1>
            </header>
            <main
              tabIndex="-1"
              ref={(node) => this.main = node}>
              <PropsRoute exact path="/" component={Home} onUpdate={this.onUpdate.bind(this)}/>
              <Route path="/favorites" component={Favorites}/>
            </main>
          </div>
          <Modal
            isOpen={this.state.modalOpen}
            contentLabel="Modal"
            className="modal"
            style={modalStyles}
          >
            <button 
              className="close-btn"
              onClick={this.onUpdate.bind(this, false)}>
              X
            </button>
            {SignupForm}
          </Modal>
        </div>
      </Router>
    );
  }
}

export default App;
