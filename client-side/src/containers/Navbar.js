import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Logo from '../images/logo1.png';
import DefaultProfileImg from '../images/profile-image.png';

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <nav className='navbar navbar-expand'>
        <div className='container-fluid'>
          <div className='navbar-header display-inline'>
            {this.props.currentUser.isAuthenticated ? (
              <div className='navbar-brand'>
                <img
                  style={{
                    marginLeft: '20px',
                    width: '50px',
                    height: '50px'
                  }}
                  className='img-thumbnail'
                  src={
                    this.props.currentUser.user.profileImageUrl ||
                    DefaultProfileImg
                  }
                  alt={this.props.currentUser.user.username}
                />

                <h5 style={{ display: 'inline', margin: '3px' }}>
                  Sign in as: {this.props.currentUser.user.username}
                </h5>
              </div>
            ) : (
              <Link to='/' className='navbar-brand'>
                <img src={Logo} alt='Home' />
              </Link>
            )}
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link
                  to={`/users/${this.props.currentUser.user.id}/messages/new`}
                >
                  New Messages
                </Link>
              </li>
              <li>
                <Link to='/' onClick={this.logout}>
                  Log out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/signup'>Sign up</Link>
              </li>
              <li>
                <Link to='/signin'>Sign in</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    username: state.username
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
