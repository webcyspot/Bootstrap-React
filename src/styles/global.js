import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import backgroundImage from '../assets/img/background.svg';

export default createGlobalStyle`
* {


  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .mapouter{position:relative;text-align:right;height:300px;width:600px;}
  .gmap_canvas {overflow:hidden;background:none!important;height:300px;width:600px;}
  .self{
    background: rgba(240, 135, 50, 0.1);
    position: relative;
    padding-bottom: 0;
  }

`;
