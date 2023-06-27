import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ }) => {
  return (
    <nav className="navbar navbar-expand-sm custom-grey">
      <Link className="navbar-brand text-dark ml-3" href="/">Eqaim Blog</Link>
    </nav>
  );
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {  })(Navbar);
