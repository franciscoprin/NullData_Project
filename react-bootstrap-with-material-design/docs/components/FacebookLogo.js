import React from "react";
import styled from 'styled-components';

const SVG = styled.svg`
    .fil0 {fill:#FEFEFE}
    .fil1 {fill:#00AFEF}
`;


class FacebookLogo extends React.Component {
  
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
            viewBox="0 0 292.59 292.59" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
        >
            <defs>
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n   \n    .fil0 {fill:#00AFEF}\n   \n  " }} />
            </defs>
            <g id="Capa_x0020_1">
                <path className="fil0" d="M201.44 260.26l0 -92.77 38.59 0 6.02 -44.02 -44.62 0 0 -24.1c0.29,-6.05 -0.68,-20.28 12.36,-24 2.91,-0.83 6.37,-1.18 11.66,-1.32 5.3,-0.14 12.42,-0.07 16.37,-0.07 3.95,0 4.71,-0.07 5.09,-0.1 0.38,-0.03 0.38,-0.03 0.45,-6.68 0.07,-6.64 0.21,-19.93 0.28,-26.58 0.07,-6.64 0.07,-6.64 -2.77,-6.88 -2.84,-0.24 -8.52,-0.73 -15.27,-1.07 -6.74,-0.34 -14.57,-0.55 -21.46,0.03 -6.88,0.59 -12.84,1.97 -17.65,3.56 -4.81,1.59 -8.48,3.39 -12.35,5.99 -3.87,2.6 -7.96,5.99 -11.42,10.7 -3.46,4.7 -6.3,10.73 -8.06,17.37 -1.76,6.64 -2.46,13.91 -2.82,21.66 -0.5,10.53 -0.45,20.74 -0.45,31.49l-37.05 0 0 44.02 37.05 0 0 92.77 46.03 0z" />
                <path className="fil0" d="M40.56 0l211.47 0c22.31,0 40.56,18.25 40.56,40.56l0 211.47c0,22.31 -18.25,40.56 -40.56,40.56l-45.25 0 0 -15.66 45.25 0c13.67,0 24.9,-11.23 24.9,-24.9l0 -211.47c0,-13.67 -11.23,-24.9 -24.9,-24.9l-211.47 0c-13.67,0 -24.9,11.23 -24.9,24.9l0 211.47c0,13.67 11.23,24.9 24.9,24.9l109.19 0 0 15.66 -109.19 0c-22.31,0 -40.56,-18.25 -40.56,-40.56l0 -211.47c0,-22.31 18.25,-40.56 40.56,-40.56z" />
            </g>
      </svg>
      );
    }
}

export default FacebookLogo;