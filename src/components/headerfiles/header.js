
import React, {Component} from 'react';

class Header extends Component {
  render(){
  return (
    <header>
         <nav>
             <a href = "/patient"><img src = "/static/logo2.png" alt = "logo" width = "200"></img></a>
        {/* <div class="logo">
            <h4> <a href="index.html">MPHealth</a></h4>
        </div> */}
        <ul class="navlinks">
           
            
            <li><a href="#">Help</a></li>
            <li><a href="/doctor">Log in/Sign up</a></li>
            
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    </header>
  );
}
}

export default Header;
