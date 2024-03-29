import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = (props) => (<header data-test="headerComponent">
  <div className="wrap">
    <div className="logo">
      <img data-test="logoImg" src={Logo} alt="Logo"></img>
    </div>
    Test
  </div>
</header>);

export default Header;
