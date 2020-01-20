import React from "react";
import styled from 'styled-components';

const SVG = styled.svg`
    .fil0 {fill:#FFF212}
    .fil1 {fill:#EC268F}
`;


class InstagramLogo extends React.Component {
  
    render() {
      return (

        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            xmlSpace="preserve" 
            width="50px"
            version="1.1" 
            style={{
                shapeRendering: 'geometricPrecision', 
                textRendering: 'geometricPrecision', 
                imageRendering: 'optimizeQuality', 
                fillRule: 'evenodd', 
                clipRule: 'evenodd'
            }} 
            viewBox="0 0 280.22 279.57" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        <defs>
          <style 
          type="text/css" 
          dangerouslySetInnerHTML={{__html: "\n   \n    .fil0 {fill:#FFF212}\n    .fil1 {fill:#EC268F}\n   \n  " }} />
        </defs>
        <g id="Capa_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_2054643573136">
            <path className="fil0" d="M140.11 67.79c39.77,0 72.02,32.23 72.02,72 0,39.77 -32.24,72 -72.02,72 -39.77,0 -72.01,-32.23 -72.01,-72 0,-39.77 32.24,-72 72.01,-72zm0 24.06c26.49,0 47.96,21.46 47.96,47.94 0,26.48 -21.47,47.94 -47.96,47.94 -26.48,0 -47.95,-21.46 -47.95,-47.94 0,-26.48 21.47,-47.94 47.95,-47.94z" />
            <path className="fil1" d="M79.32 0l121.58 0c43.63,0 79.32,35.7 79.32,79.32l0 120.93c0,43.62 -35.69,79.32 -79.32,79.32l-121.58 0c-43.62,0 -79.32,-35.7 -79.32,-79.32l0 -120.93c0,-43.62 35.7,-79.32 79.32,-79.32zm-3.29 18.94l128.16 0c31.41,0 57.11,25.7 57.11,57.11l0 127.48c0,31.41 -25.7,57.11 -57.11,57.11l-128.16 0c-31.41,0 -57.11,-25.7 -57.11,-57.11l0 -127.48c0,-31.41 25.7,-57.11 57.11,-57.11z" />
            <path className="fil1" d="M213.41 51.89c8.8,0 15.93,7.12 15.93,15.9 0,8.78 -7.13,15.9 -15.93,15.9 -8.8,0 -15.93,-7.12 -15.93,-15.9 0,-8.78 7.13,-15.9 15.93,-15.9z" />
          </g>
        </g>
      </svg>
      );
    }
}

export default InstagramLogo;




