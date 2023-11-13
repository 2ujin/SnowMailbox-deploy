import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import back from "./assets/back.svg";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'PyeongChangPeace-Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'GmarketSans';
        font-weight: 700;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.ttf') format("truetype");
        font-display: swap;
    } 
    @font-face {
        font-family: 'EF_jejudoldam';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        height: initial;
    }
    body * {
        z-index: 1;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: white;
        font-family: 'PyeongChangPeace-Bold';
    }
    
    input {
        width: 100%;
        border-radius: 14px;
        background: rgba(25, 48, 19, 0.71);
        border: none;
        height: 50px;
        padding: 0 20px;
        margin-bottom: 10px;
        font-size: 16px;
        box-sizing: border-box;
        color: white;
        font-family: 'GmarketSans';
    }

    a {
        text-decoration: none;
    }
    
    input:focus {
        color: white;
        outline: none;
    }
    
    textarea:focus {
        outline: none;
    }
    
    select:focus {
        outline: none;
    }
    
    button {
        color: white;
        background-color: #4b81e7;
        padding: 10px;
        border-radius: 20px;
        border: none;
        width: 100%;
    }

    /* Web */
    @media screen and (min-width: 769px) {
        body {
        .wrapper {
            margin: 0 auto;
            height: 100%;
            max-width: 480px;
            /* padding: 55px 30px; */
            -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.45);
            -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.45);
            box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.45);
            background: url(${back}) center/cover no-repeat;
        }
    
        }

        .Wrapperwidth{
            width: 480px;
        }
        .header{
            width: 480px;
        }
    }
    
    // App
    @media screen and (max-width: 768px) {
        body {
        overflow: hidden;
        margin: 0;
        padding: 0;
        padding: 55px 30px;
        .wrapper {
            height: 100vh;
            width: 100%;
            margin: 0 auto;
            background: url(${back}) center/cover no-repeat;
        }
        }
        .Wrapperwidth{
            width: 100%;
        }
        .top{
            width: 380px;
        }
    }
    
    .wrap {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
    }
    
    .padding {
        padding: 20px;
    }
  
`;

export default GlobalStyle;
