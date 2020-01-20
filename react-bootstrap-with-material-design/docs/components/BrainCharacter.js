import React, { Component } from "react";
import styled from 'styled-components';
import * as d3 from "d3";
var randomColor = require('randomcolor');

const SVG = styled.svg`
    @font-face { 
        font-family:Impact;
        font-variant:normal;
        font-style:normal;
        font-weight:normal;
    }
    .fil1 {fill:#FEFEFE}
    .fil3 {fill:#A9ABAE}
    
    .fil2 {fill:#EC268F}
    .fil4 {fill:black}
    .fil0 {fill:black}
    .fil5 {fill:black}
    .fnt0 {
        font-weight:normal;
        font-size:474.32px;
        font-family:Impact;
        fill:#EC268F;
    }
`;

class BrainCharacter extends Component {
    constructor(){
        super();
        this.glassRef = React.createRef();
        this.letters = React.createRef();
    }

    matrixEffectInGlasses= ()=> {
        console.log("hello there");
        var delay = function(d, i) { return (i) * 5; };
        var delay2 = function(d, i) { return (i) * 0.2; };
        var color = randomColor();
        d3.select(this.glassesEffect)
            .selectAll("*")
            .transition()
            // .duration(100)x
            .delay(delay)
            .attr("fill",color)
            .transition()
            .delay(delay2)
            .attr("fill","#FEFEFE");

        this.glassesEffect
            .exit()
            .remove();
    }

    letterTransition = ({letter="w"}) => {
        // console.log("letter: ", letter)
        var delay = function(d, i) { return (i) * 220; };
        var delay2 = function(d, i) { return (i) * 0.005; };
        d3.select(this.letters.current)
            .selectAll("*")
            .transition()
            .delay(delay)
            .text(letter)
            .transition()
            .delay(delay2)
            .text("");
    }

    render(){
        // You should acces the father and then change the childrens.
        return(
            <SVG
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1" 
                shapeRendering="geometricPrecision" 
                textRendering="geometricPrecision" 
                imageRendering="optimizeQuality"
                viewBox="0 0 4233.79 7324.81"
                ref={this.glassRef}
                style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd"
                }}
            >
                <g id="Layer_x0020_1">
                    <path class="fil0" d="M552.06 5634.56c-22.41,-14.22 -43.24,-31.44 -62.28,-48.14 -44.31,-38.82 -86.12,-82.52 -117.63,-132.57 -31.79,-50.54 -54.59,-110.31 -65.46,-169.04 -7.07,-38.29 -6.42,-69.62 -8.67,-107.32 -1.24,-20.36 -7.69,-43.19 -12.25,-62.98 -13.2,-57.15 -24.49,-113.97 -30.94,-172.36 -8.93,-81.02 -8.11,-161.63 6.25,-242.04 9.96,-55.72 26.18,-110.39 48.62,-162.36 2.42,-5.6 5.26,-10.89 8.44,-15.88 1.78,-5.83 4.08,-11.63 6.93,-17.34 13.12,-26.46 27.9,-52.09 44.31,-76.63 53.57,-80.13 126.97,-153.66 201.41,-214.33 47.22,-38.48 96.65,-73 149.86,-102.62 192.66,-107.32 463.75,-164.36 680.33,-196.23 44.31,-6.53 85.9,13.52 108.39,52.25 87.05,149.92 444.6,196.51 595.06,198.31 152.98,-1.8 510.54,-48.39 597.59,-198.31 22.5,-38.74 64.08,-58.78 108.39,-52.25 216.59,31.87 487.7,88.91 680.33,196.23 53.21,29.65 102.65,64.13 149.86,102.62 74.44,60.67 147.83,134.21 201.41,214.33 16.41,24.55 31.19,50.17 44.31,76.63 2.84,5.72 5.15,11.52 6.93,17.37 3.18,4.96 6,10.22 8.42,15.8 22.5,52 38.68,106.67 48.65,162.42 14.36,80.41 15.17,161.01 6.25,242.04 -6.44,58.39 -17.74,115.2 -30.94,172.36 -4.56,19.79 -11.01,42.62 -12.24,62.98 -2.25,37.7 -1.61,69.03 -8.67,107.32 -10.87,58.73 -33.67,118.5 -65.46,169.04 -31.5,50.06 -73.31,93.75 -117.63,132.57 -19.03,16.7 -39.87,33.93 -62.28,48.14 3.18,19.12 4.59,39.3 5.91,59.43 5.94,90.29 9.63,180.83 14.67,271.18 3.09,55.15 14.39,115.34 -24.19,161.74 -42.46,51.04 -129.45,51.63 -190.97,58.56 -83.36,9.41 -166.89,18.1 -250.48,26.04 17.54,67.51 30.57,140.26 42.29,208.25 8.78,50.76 16.02,101.41 23.14,152.34 13.18,1.72 27.33,6.06 43.07,13.85 55.46,27.45 58.93,62.28 83.11,97.53 2.67,1.18 5.85,2.11 8.61,3.12 5.01,1.8 9.83,3.86 14.47,6.08 24.15,-15.77 50.42,-28.44 78.24,-38.6 60.73,-22.16 132.69,-34.35 196.85,-23.79 77.2,12.7 139.81,57.38 179,124.89 29.67,51.13 49.24,122.95 50,181.81 1.04,82.69 -39.89,125.15 -109.09,161.83 -73.68,39.02 -154.42,71.06 -233.2,98 -119.26,40.8 -247.19,75.11 -371.23,98.17 -95.33,17.71 -207.86,32.63 -305.04,29.33 -73.51,-2.5 -145.7,-22.04 -171.57,-100.23 -12.59,-38.06 -9.88,-82.18 7.69,-118.27 0.42,-0.87 0.84,-1.72 1.27,-2.56 -5.24,-16.44 -8.11,-34.18 -9.32,-52.67 -1.83,-27.68 -1.83,-56.33 1.21,-83.93 0.73,-6.73 2.17,-14.42 3.04,-21.59 -12.22,-25.43 -21.9,-41.08 -23.2,-75.23 -1.18,-31.44 8.64,-63.23 26.35,-89.61 -6.36,-29.68 -9.43,-64.44 -13.34,-90.01 -11.85,-77.45 -26.15,-155.72 -42.96,-232.24 -13.43,-61.01 -38.17,-141.19 -41.81,-202 -0.06,-0.79 -0.08,-1.58 -0.14,-2.37 -173.17,9.69 -346.51,15.85 -520.08,15.85l-52.14 -0.06c-169.26,-0.37 -338.26,-6.11 -507.1,-15.26 2.39,43.33 -1.24,94.29 -1.07,132.04 0.34,72.04 3.91,145.7 9.49,217.52 1.94,25.2 6.7,58.36 7.38,87.75 23.45,21.57 40.46,50.26 46.62,81.2 6.64,33.42 0.87,50.82 -5.01,78.3 2.56,6.84 5.77,14.02 8.08,20.47 9.35,26.1 16.02,53.91 20.69,81.19 3.15,18.27 4.54,36.18 3.27,53.41 0.65,0.76 1.3,1.52 1.94,2.31 25.42,31.03 38.35,73.28 34.97,113.18 -6.93,81.98 -72.47,117.85 -143.3,137.48 -93.67,25.93 -206.73,37.67 -303.47,42.74 -126.02,6.59 -258.39,3.09 -383.9,-8.7 -82.89,-7.77 -168.89,-20.04 -249.67,-40.8 -75.82,-19.45 -125.7,-51.21 -143.95,-131.84 -12.98,-57.41 -10.73,-131.79 6.17,-188.4 22.33,-74.86 72.75,-132.89 144.88,-163.32 59.94,-25.26 132.74,-30.21 196.99,-22.83 29.42,3.38 57.88,9.52 85.02,19.2 4.02,-3.3 8.28,-6.42 12.78,-9.37 1.58,-1.02 3.3,-2.06 3.52,-1.38 19.15,-44.93 15.51,-78.91 61.96,-117.76 13.52,-11.32 26.3,-18.87 38.71,-23.62 -4.98,-51.15 -9.77,-102.09 -13.12,-153.49 -4.9,-75.62 -9.6,-157.21 -6.98,-232.83 0.17,-4.84 0.45,-9.63 0.85,-14.3 -86.32,-8.14 -172.56,-17.09 -258.65,-26.8 -61.46,-6.93 -148.4,-7.54 -190.85,-58.44 -38.71,-46.43 -27.39,-106.65 -24.3,-161.85 5.04,-90.35 8.73,-180.89 14.67,-271.18 1.32,-20.13 2.73,-40.31 5.91,-59.43z"/>
                    <path class="fil1" d="M2918.19 7217.15c57.88,1.99 162.58,-5.46 281.81,-27.61 119.19,-22.14 252.89,-58.89 356.11,-94.2 103.18,-35.31 175.92,-69.18 217.67,-91.28 41.74,-22.14 52.5,-32.52 52.07,-65.67 -0.42,-33.07 -12.02,-88.87 -35.52,-129.35 -23.46,-40.43 -58.77,-65.54 -103.65,-72.91 -44.93,-7.41 -99.37,2.92 -142.64,18.72 -43.31,15.83 -75.45,37.13 -99.45,65.2 -23.96,28.03 -39.8,62.83 -46.07,101.49 -6.27,38.61 -3.05,81.04 -5.76,104.79 -2.71,23.8 -11.43,28.96 -39.38,38.74 -27.98,9.78 -75.24,24.18 -136.67,37.05 -61.48,12.87 -137.14,24.13 -198.1,29.72 -61.01,5.59 -107.37,5.46 -133.88,6.99 -26.5,1.52 -33.15,4.74 -37.64,13.93 -4.45,9.19 -6.69,24.34 -2.29,37.68 4.4,13.3 15.45,24.77 73.37,26.72z"/>
                    <path class="fil1" d="M1526.84 7155.63c-55.8,15.45 -159.41,32.65 -280.45,39 -121.09,6.35 -259.67,1.82 -368.26,-8.39 -108.6,-10.2 -187.22,-26.12 -232.99,-37.89 -45.77,-11.72 -58.68,-19.35 -66.01,-51.61 -7.28,-32.3 -9.06,-89.29 4.32,-134.09 13.38,-44.84 41.83,-77.48 83.75,-95.14 41.96,-17.7 97.3,-20.36 143.11,-15.11 45.81,5.25 82.01,18.46 111.9,40.14 29.85,21.63 53.39,51.82 68.5,87.9 15.16,36.07 21.89,78.07 30.1,100.56 8.22,22.48 17.87,25.49 47.33,28.45 29.51,2.96 78.8,5.97 141.54,4.07 62.75,-1.86 138.96,-8.56 199.59,-17.4 60.59,-8.81 105.64,-19.77 131.76,-24.47 26.12,-4.7 33.36,-3.18 39.84,4.74 6.48,7.88 12.23,22.15 11.05,36.12 -1.19,13.97 -9.23,27.69 -65.07,43.14z"/>
                    <path class="fil2" d="M3332.68 7003.88c7.88,-27.94 11.05,-82.01 21.64,-120.58 10.58,-38.53 28.62,-61.56 35.01,-74.73 6.39,-13.21 1.15,-16.6 -11.35,-21.13 -12.53,-4.53 -32.26,-10.16 -50,-32.98 -17.7,-22.78 -33.36,-62.79 -52.76,-72.36 -19.35,-9.61 -42.42,11.18 -67.87,22.99 -25.44,11.81 -53.3,14.65 -76.63,23.2 -23.28,8.51 -42.08,22.78 -46.66,39.25 -4.61,16.47 5,35.14 18,50.26 13,15.11 29.34,26.67 36.79,37.05 7.41,10.41 5.93,19.65 -3.05,21.46 -8.93,1.82 -25.41,-3.72 -39.8,-12.57 -14.44,-8.85 -26.8,-21 -42.04,-19.6 -15.24,1.4 -33.41,16.3 -53.05,24.26 -19.65,7.92 -40.85,8.89 -60.29,2.92 -19.43,-5.93 -37.09,-18.84 -50.46,-29.98 -13.38,-11.13 -22.48,-20.57 -34.13,-16.13 -11.69,4.41 -25.87,22.74 -25.19,40.6 0.68,17.91 16.26,35.35 21.59,53.65 5.29,18.33 0.34,37.43 -1.99,58.89 -2.37,21.46 -2.12,45.3 -0.8,65.2 1.31,19.86 3.68,35.82 16.81,43.31 13.13,7.5 36.96,6.61 78.07,3.3 41.07,-3.26 99.41,-8.89 151.87,-16.26 52.41,-7.37 98.9,-16.51 131.8,-23.24 32.86,-6.73 52.12,-11.01 68.08,-14.06 15.92,-3.05 28.54,-4.83 36.41,-32.73z"/>
                    <path class="fil2" d="M1073.94 7045.12c-14.19,-25.32 -29.89,-77.19 -49.2,-112.2 -19.31,-34.97 -42.17,-53.14 -51.48,-64.48 -9.31,-11.35 -5,-15.88 6.1,-23.2 11.09,-7.28 29,-17.4 40.9,-43.69 11.9,-26.34 17.78,-68.89 34.38,-82.73 16.56,-13.85 43.86,0.97 71.34,6.52 27.52,5.5 55.26,1.78 79.94,4.61 24.64,2.84 46.28,12.32 54.57,27.27 8.3,14.94 3.3,35.35 -5.76,53.09 -9.1,17.74 -22.31,32.77 -27.1,44.62 -4.83,11.81 -1.23,20.45 7.92,20.15 9.15,-0.34 23.88,-9.61 35.82,-21.55 11.94,-11.98 21.13,-26.68 36.28,-28.88 15.16,-2.2 36.24,8.05 57.24,11.18 20.96,3.13 41.79,-0.89 59.28,-11.22 17.53,-10.33 31.67,-26.97 42.08,-40.94 10.42,-13.97 17.06,-25.28 29.43,-23.71 12.36,1.61 30.48,16.09 33.96,33.62 3.52,17.57 -7.54,38.19 -8.43,57.2 -0.89,19.05 8.38,36.45 15.71,56.82 7.28,20.32 12.62,43.57 15.96,63.17 3.39,19.65 4.83,35.69 -6.18,46.06 -11.01,10.37 -34.42,15.03 -75.15,21.46 -40.69,6.44 -98.73,14.61 -151.44,19.65 -52.71,5.08 -100.05,7.07 -133.58,8.26 -33.53,1.15 -53.26,1.44 -69.48,2.2 -16.22,0.8 -28.92,2.03 -43.1,-23.29z"/>
                    <path class="fil0" d="M2758.95 6249.61c2.03,34.46 21.38,102.97 39.5,185.36 18.12,82.39 35.02,178.67 44.24,239.05 9.23,60.42 10.8,84.93 15.88,97.3 5.08,12.32 13.72,12.45 23.24,16.6 9.53,4.15 19.98,12.24 31.42,21.72 11.39,9.48 23.79,20.28 42.97,22.22 19.14,1.99 45.09,-4.82 59.11,-11.89 14.01,-7.03 16.13,-14.27 15.33,-24.22 -0.85,-9.95 -4.57,-22.57 1.65,-38.7 6.22,-16.13 22.44,-35.69 49.83,-50.47 27.39,-14.73 65.96,-24.69 84.04,-35.94 18.04,-11.26 15.62,-23.88 10.63,-60.08 -5.04,-36.16 -12.62,-95.86 -25.87,-172.53 -13.25,-76.72 -32.18,-170.37 -45.26,-217.58 -13.13,-47.25 -20.37,-48.01 -49.58,-43.86 -29.21,4.11 -80.32,13.17 -128.75,20.28 -48.48,7.16 -94.25,12.32 -124.73,15.12 -30.48,2.79 -45.72,3.17 -43.65,37.64z"/>
                    <path class="fil0" d="M1462.61 6235.81c5.33,24.85 1.15,77.74 1.48,150.9 0.34,73.12 5.25,166.48 9.78,225.28 4.57,58.77 8.76,82.98 6.69,96.2 -2.03,13.17 -10.37,15.33 -18.67,21.55 -8.3,6.26 -16.56,16.59 -25.49,28.45 -8.89,11.9 -18.42,25.28 -36.58,31.71 -18.17,6.39 -44.96,5.8 -60.25,2.24 -15.28,-3.6 -19.01,-10.12 -20.54,-19.98 -1.52,-9.87 -0.85,-23.03 -10.67,-37.26 -9.82,-14.19 -30.19,-29.47 -60.25,-37.39 -30.1,-7.96 -69.9,-8.59 -90.14,-15.37 -20.2,-6.73 -20.75,-19.56 -24.35,-55.89 -3.6,-36.33 -10.16,-96.15 -15.2,-173.8 -5.04,-77.69 -8.51,-173.17 -6.81,-222.15 1.69,-48.98 8.59,-51.44 36.83,-48.22 28.28,3.26 77.9,12.15 127.99,18.97 50.04,6.81 100.56,11.52 133.24,12.28 32.69,0.76 47.59,-2.41 52.92,22.48z"/>
                    <path class="fil3" d="M2079.74 6162.23l25.53 -0.02 0.87 0 25.54 0.02 0 -0.11c255.21,-1.23 512.67,-12.96 810.93,-35.19 212.8,-15.86 407,-36.43 510.17,-48.05 103.16,-11.61 115.28,-14.29 120.5,-20.55 5.21,-6.26 3.55,-16.08 -0.42,-87.15 -3.97,-71.05 -10.23,-203.32 -14.62,-270.13 -4.39,-66.81 -6.89,-68.15 -15.87,-70.61 -8.98,-2.46 -24.44,-6.02 -38.64,-13.18 -14.2,-7.15 -27.15,-17.88 -35.3,-29.94 -8.15,-12.07 -11.48,-25.47 -16.91,-30.38 -5.43,-4.91 -12.94,-1.34 -27.57,-4.25 -14.62,-2.91 -36.34,-12.28 -57.43,-26.81 -21.09,-14.52 -41.56,-34.19 -55.34,-53.85 -13.79,-19.66 -20.89,-39.33 -23.39,-51.39 -2.51,-12.07 -0.42,-16.54 -0.83,-19.89 -0.42,-3.35 -3.35,-5.58 -8.99,-8.71 -5.64,-3.13 -13.99,-7.16 -27.36,-25.48 -11.78,-16.15 -27.46,-43.39 -38.15,-64.33 -362.39,59.22 -722.58,87.74 -1080.79,88.72l0 -0.05 -25.97 0.07 -25.97 -0.07 0 0.05c-358.21,-0.98 -718.4,-29.5 -1080.8,-88.72 -10.7,20.94 -26.37,48.18 -38.15,64.33 -13.37,18.32 -21.72,22.35 -27.36,25.48 -5.63,3.13 -8.56,5.36 -8.98,8.71 -0.41,3.36 1.67,7.83 -0.83,19.89 -2.5,12.06 -9.6,31.72 -23.39,51.39 -13.78,19.66 -34.24,39.33 -55.34,53.85 -21.09,14.53 -42.81,23.9 -57.43,26.81 -14.62,2.91 -22.13,-0.66 -27.56,4.25 -5.43,4.91 -8.77,18.31 -16.91,30.38 -8.14,12.07 -21.09,22.8 -35.29,29.94 -14.2,7.16 -29.65,10.72 -38.64,13.18 -8.98,2.46 -11.48,3.8 -15.87,70.61 -4.39,66.81 -10.65,199.08 -14.62,270.13 -3.96,71.06 -5.63,80.89 -0.42,87.15 5.22,6.26 17.34,8.94 120.5,20.55 103.17,11.63 297.37,32.19 510.17,48.05 298.25,22.24 555.7,33.95 810.93,35.19l0 0.11z"/>
                    <path class="fil4" d="M3790.22 4552.16c-10.83,-21.87 -23.23,-43.5 -37.35,-64.63 -49.91,-74.63 -121.33,-143 -180.01,-190.83 -58.68,-47.81 -104.44,-75.43 -134.28,-92.05 -141.95,-79.07 -369.76,-143.49 -643.76,-183.84 -82.69,142.39 -358.72,247.86 -689.09,251.75 -330.37,-3.89 -606.41,-109.36 -689.09,-251.75 -274.01,40.35 -501.82,104.77 -643.76,183.84 -29.83,16.62 -75.6,44.24 -134.28,92.05 -58.67,47.83 -130.1,116.2 -180.01,190.83 -14.13,21.12 -26.52,42.76 -37.35,64.63 11.86,2.43 24.91,5.42 39.2,9 62.38,15.62 148.49,42.74 195.21,58.46 7.74,2.6 14.39,4.89 20.13,6.93 10.67,-26.74 24.89,-50 36.74,-66.85 12.74,-18.09 22.76,-28.83 29.65,-35.08 6.89,-6.26 10.65,-8.05 7.52,40.21 -3.13,48.28 -13.15,146.58 -17.12,196.41 -3.96,49.83 -1.88,51.16 11.69,52.06 13.57,0.9 38.64,1.34 69.33,8.49 30.7,7.15 67.03,21.01 97.94,38.67 30.91,17.65 56.39,39.09 76.85,60.1 20.46,21 35.92,41.56 41.97,62.34 6.06,20.78 2.72,41.78 -4.59,63.9 -7.31,22.13 -18.59,45.36 -30.29,61.67 -11.69,16.31 -23.8,25.7 -37.8,29.72 -13.99,4.03 -29.85,2.69 -43.02,-0.22 -13.16,-2.9 -23.59,-7.37 -27.77,-6.7 -4.18,0.67 -2.09,6.48 7.1,15.64 9.19,9.17 25.48,21.67 44.06,35.74 18.59,14.08 39.46,29.72 53.25,41.56 9.82,8.43 16.03,14.94 19.54,21.3 362.07,57.58 727.09,85.09 1094.89,84.46 367.8,0.64 732.81,-26.87 1094.88,-84.46 3.52,-6.35 9.72,-12.86 19.54,-21.3 13.79,-11.84 34.67,-27.48 53.25,-41.56 18.59,-14.07 34.87,-26.57 44.06,-35.74 9.19,-9.17 11.28,-14.97 7.1,-15.64 -4.18,-0.67 -14.61,3.8 -27.77,6.7 -13.16,2.92 -29.03,4.25 -43.02,0.22 -14,-4.02 -26.11,-13.4 -37.8,-29.72 -11.7,-16.31 -22.98,-39.54 -30.29,-61.67 -7.31,-22.12 -10.65,-43.13 -4.59,-63.9 6.06,-20.78 21.51,-41.34 41.98,-62.34 20.46,-21.01 45.94,-42.45 76.85,-60.1 30.91,-17.66 67.24,-31.52 97.93,-38.67 30.7,-7.15 55.76,-7.59 69.33,-8.49 13.57,-0.89 15.66,-2.23 11.69,-52.06 -3.96,-49.83 -13.99,-148.14 -17.12,-196.41 -3.13,-48.26 0.63,-46.47 7.52,-40.21 6.89,6.25 16.91,16.98 29.65,35.08 11.86,16.85 26.07,40.11 36.75,66.85 5.74,-2.05 12.39,-4.33 20.13,-6.93 46.72,-15.73 132.83,-42.84 195.21,-58.46 14.3,-3.58 27.35,-6.57 39.2,-9z"/>
                    <path class="fil1" d="M3496.63 4885.48c-18.8,-2.9 -48.45,-6.47 -77.47,-0.89 -29.03,5.59 -57.43,20.33 -86.04,39.77 -28.61,19.44 -57.43,43.58 -73.5,59.21 -16.08,15.64 -19.42,22.8 -14.82,34.19 4.59,11.4 17.11,27.04 34.45,32.86 17.33,5.81 39.46,1.78 58.05,-3.81 18.59,-5.58 33.63,-12.74 51.17,-11.62 17.54,1.13 37.59,10.5 46.15,20.56 8.56,10.06 5.63,20.78 -3.13,40.67 -8.77,19.88 -23.39,48.93 -47.41,73.95 -24.02,25.03 -57.43,46.04 -78.73,61 -21.3,14.97 -30.48,23.9 -31.11,35.74 -0.63,11.85 7.31,26.59 14.2,39.55 6.89,12.96 12.73,24.14 21.51,29.28 8.77,5.14 20.46,4.24 37.38,-2.91 16.92,-7.15 39.05,-20.55 64.11,-37.54 25.06,-16.98 53.04,-37.54 74.97,-53.63 21.93,-16.09 37.8,-27.7 46.36,-27.48 8.56,0.22 9.81,12.28 -2.3,31.28 -12.11,18.99 -37.59,44.91 -66.2,70.39 -28.61,25.47 -60.35,50.49 -82.9,66.13 -22.56,15.64 -35.92,21.91 -36.75,32.85 -0.83,10.95 10.85,26.59 23.39,40.89 12.53,14.3 25.9,27.26 39.47,32.84 13.57,5.59 27.35,3.79 58.06,-15.43 30.7,-19.21 78.31,-55.85 109.21,-82.66 30.91,-26.82 45.11,-43.8 53.46,-48.27 8.35,-4.46 10.86,3.58 8.77,15.42 -2.09,11.85 -8.77,27.48 -24.64,47.38 -15.87,19.89 -40.93,44.02 -61.81,61.89 -20.88,17.88 -37.58,29.5 -41.55,41.34 -3.97,11.83 4.8,23.9 16.29,34.63 11.49,10.73 25.69,20.11 46.15,15.19 20.46,-4.91 47.2,-24.13 79.57,-52.51 32.37,-28.38 70.37,-65.91 97.52,-109.03 27.14,-43.13 43.44,-91.83 50.75,-131.38 7.3,-39.55 5.63,-69.94 7.1,-94.3 1.46,-24.35 6.05,-42.68 14.82,-80.67 8.77,-37.98 21.72,-95.62 28.82,-159.98 7.1,-64.35 8.35,-135.41 -5.22,-211.37 -8.09,-45.28 -21.45,-92.31 -41.5,-138.74 -20.09,4.35 -43.76,9.79 -70.83,17.34 -61.77,17.22 -141.28,45.35 -187.19,57.41 6.47,23.43 10.4,49 11.97,76.72 2.09,36.87 0,77.54 -5.01,105.02 -5.01,27.48 -12.95,41.79 -20.89,47.81 -7.93,6.04 -15.87,3.8 -34.67,0.89z"/>
                    <path class="fil1" d="M714.8 4885.48c18.8,-2.9 48.45,-6.47 77.47,-0.89 29.03,5.59 57.43,20.33 86.04,39.77 28.61,19.44 57.43,43.58 73.5,59.21 16.09,15.64 19.42,22.8 14.82,34.19 -4.59,11.4 -17.11,27.04 -34.45,32.86 -17.33,5.81 -39.46,1.78 -58.05,-3.81 -18.59,-5.58 -33.63,-12.74 -51.17,-11.62 -17.54,1.13 -37.59,10.5 -46.15,20.56 -8.56,10.06 -5.63,20.78 3.13,40.67 8.78,19.88 23.39,48.93 47.41,73.95 24.02,25.03 57.43,46.04 78.73,61 21.3,14.97 30.49,23.9 31.11,35.74 0.63,11.85 -7.31,26.59 -14.2,39.55 -6.89,12.96 -12.74,24.14 -21.51,29.28 -8.77,5.14 -20.46,4.24 -37.37,-2.91 -16.92,-7.15 -39.05,-20.55 -64.11,-37.54 -25.06,-16.98 -53.04,-37.54 -74.97,-53.63 -21.93,-16.09 -37.8,-27.7 -46.36,-27.48 -8.56,0.22 -9.81,12.28 2.3,31.28 12.11,18.99 37.59,44.91 66.2,70.39 28.61,25.47 60.35,50.49 82.91,66.13 22.55,15.64 35.92,21.91 36.75,32.85 0.83,10.95 -10.86,26.59 -23.39,40.89 -12.53,14.3 -25.89,27.26 -39.47,32.84 -13.57,5.59 -27.35,3.79 -58.06,-15.43 -30.7,-19.21 -78.3,-55.85 -109.21,-82.66 -30.91,-26.82 -45.11,-43.8 -53.46,-48.27 -8.35,-4.46 -10.85,3.58 -8.77,15.42 2.09,11.85 8.77,27.48 24.64,47.38 15.87,19.89 40.93,44.02 61.81,61.89 20.89,17.88 37.59,29.5 41.55,41.34 3.97,11.83 -4.8,23.9 -16.29,34.63 -11.48,10.73 -25.69,20.11 -46.15,15.19 -20.46,-4.91 -47.19,-24.13 -79.57,-52.51 -32.36,-28.38 -70.37,-65.91 -97.52,-109.03 -27.15,-43.13 -43.44,-91.83 -50.75,-131.38 -7.3,-39.55 -5.64,-69.94 -7.1,-94.3 -1.46,-24.35 -6.05,-42.68 -14.82,-80.67 -8.77,-37.98 -21.72,-95.62 -28.82,-159.98 -7.1,-64.35 -8.35,-135.41 5.22,-211.37 8.09,-45.28 21.45,-92.31 41.5,-138.74 20.09,4.35 43.76,9.79 70.83,17.34 61.77,17.22 141.28,45.35 187.19,57.41 -6.47,23.43 -10.4,49 -11.97,76.72 -2.09,36.87 0,77.54 5.01,105.02 5.01,27.48 12.95,41.79 20.88,47.81 7.94,6.04 15.87,3.8 34.67,0.89z"/>
                    <path class="fil4" d="M62 1690.57c16.03,104.87 18.01,143.36 72.02,244.09 18.46,34.43 43.08,66.04 55.14,106.94 17.14,58.11 4.03,74.69 4.09,132.81 0.11,100.47 20.6,172.62 56.12,258.04 6.02,14.5 19.6,39.69 27.94,53.36 74.36,121.93 157.21,206.15 296.05,286.26 35.96,20.74 76.28,39.02 117.81,55.26 44.89,17.56 84.63,27.13 128.57,43.31 119.34,43.93 135.31,62.63 207.6,130.42 16.74,15.69 23.12,26.42 41.7,41.87 73.76,61.33 181.51,116.94 285.16,142.76 78.02,19.43 65.32,16.86 148.37,30.05 331.44,56.32 517.72,-68.56 532.64,-361.32l18.59 -2628.17c-28.32,-74.13 -102.39,-125.03 -153.72,-151.57 -61.48,-31.81 -164.39,-60.88 -235.49,-67.94 -62.8,-6.24 -98.53,-10.67 -162.48,-1.5 -53.83,7.72 -93.49,11.87 -144.69,30.43 -60.11,21.8 -95.08,41 -146.17,71.85 -11.81,7.13 -12.27,9.8 -23.15,17.31 -22.47,15.51 -50.68,34.72 -70.97,54.18 -8.85,8.49 -7.42,9.85 -19.32,20.54 -27.22,24.46 -57.83,61.16 -84.44,82.9 -70.35,57.47 -87.76,57.21 -165.73,91.98l-58.14 28.3c-9.97,4.9 -16.82,9.66 -25.73,15.43 -94.79,61.31 -64.87,39.58 -144.68,109.3 -41.7,36.43 -99.94,119.83 -121.41,165 -48.41,101.87 -35.56,82.94 -61.57,174.59 -14.23,50.12 -12.46,127.97 -48.95,188.51 -75.45,125.16 -173.03,118.17 -283.74,369.06 -25.63,58.09 -52,196.77 -41.42,265.97z"/>
                    <path class="fil5" d="M4171.81 1690.57c-16.04,104.87 -18.02,143.36 -72.02,244.09 -18.46,34.43 -43.07,66.04 -55.13,106.94 -17.14,58.11 -4.03,74.69 -4.1,132.81 -0.11,100.47 -20.59,172.62 -56.11,258.04 -6.02,14.5 -19.6,39.69 -27.94,53.36 -74.36,121.93 -157.21,206.15 -296.06,286.26 -35.95,20.74 -76.28,39.02 -117.8,55.26 -44.89,17.56 -84.63,27.13 -128.57,43.31 -119.34,43.93 -135.31,62.63 -207.6,130.42 -16.74,15.69 -23.12,26.42 -41.7,41.87 -73.77,61.33 -181.51,116.94 -285.16,142.76 -78.02,19.43 -65.32,16.86 -148.37,30.05 -331.44,56.32 -517.73,-68.56 -532.65,-361.32l-18.59 -2628.17c28.31,-74.13 102.39,-125.03 153.72,-151.57 61.48,-31.81 164.39,-60.88 235.49,-67.94 62.8,-6.24 98.53,-10.67 162.48,-1.5 53.83,7.72 93.49,11.87 144.69,30.43 60.11,21.8 95.08,41 146.17,71.85 11.81,7.13 12.27,9.8 23.15,17.31 22.47,15.51 50.67,34.72 70.97,54.18 8.85,8.49 7.42,9.85 19.32,20.54 27.22,24.46 57.83,61.16 84.44,82.9 70.35,57.47 87.76,57.21 165.73,91.98l58.14 28.3c9.96,4.9 16.81,9.66 25.73,15.43 94.79,61.31 64.87,39.58 144.68,109.3 41.7,36.43 99.94,119.83 121.41,165 48.41,101.87 35.56,82.94 61.57,174.59 14.23,50.12 12.46,127.97 48.95,188.51 75.46,125.16 173.03,118.17 283.74,369.06 25.63,58.09 52,196.77 41.42,265.97z"/>
                    <path class="fil2" d="M2687.49 199.81c-49.39,-13.03 -136.66,0.02 -180.07,14.83 -100.54,34.27 -168.44,102.44 -182.32,191.14 -4.97,31.78 -2.08,134.03 6.99,161.52 20.17,61.12 87.8,39.56 130.8,14.83 22.53,-12.96 39.84,-23.76 59.86,-36.73 51.04,-33.07 125.15,-105.64 197.01,-72.39 81.56,37.74 64.1,114.02 15.9,171.54 -17.47,20.85 -27.9,29.57 -47.91,46.63 -35.4,30.17 -72.43,49.94 -122.24,68.27 -124.63,45.86 -225.97,28.96 -241.17,138.96 -3.94,28.53 3.83,54.87 0.21,86.3 -7.81,67.86 -20.09,173.04 11.59,231.96 58.96,109.69 215.05,26.19 320.58,40.59 119.94,16.37 222.2,45.87 298.03,95.81 66.72,43.94 102.51,80.24 159.16,127.34 54.45,45.28 150.53,73.3 225.79,39.79 59.76,-26.61 93.11,-61.56 122.26,-111.39 34.12,-58.31 59.21,-98.03 148.94,-69.57 111.36,35.31 40.47,130.95 59.88,185.58 28.05,78.98 179.77,127.07 113.6,212.69 -21.37,27.65 -76.31,62.33 -136.26,41.64 -72.55,-25.04 -119.52,-129.59 -285.12,-64.15 -51.46,20.34 -86.98,38.38 -131.32,60.72 -27.52,13.85 -109.73,54.45 -150.39,36.37 -37.02,-16.46 -62.83,-65.67 -83.69,-103.2 -22.48,-40.44 -39.38,-77.35 -69.87,-111.44 -29.93,-33.46 -39.47,-40.31 -73.9,-68.41 -71.87,-58.64 -256.5,-106.5 -358.22,-84.69 -52.55,11.28 -92.57,32.47 -122.5,67.82 -61.66,72.83 -47,192.88 -47,297.69 0,38.35 -5.26,137.48 4.21,167.28 18.72,58.89 67.39,46.95 133.19,37.5 64.18,-9.22 114.75,-19.71 142.89,-51.67 39.72,-45.12 21.52,-83.57 16.12,-136.54 -5.02,-49.4 -7.81,-104.86 59.81,-122.35 27.86,-7.21 61.93,-11.58 89.67,-1.54 74.62,27.01 65.41,119.72 92.08,176.01 61.92,130.69 288.43,156.71 415.93,79.56 44.2,-26.74 73.65,-62.78 107.96,-83.45 55.28,-33.29 98.81,-31.06 148.68,2.89 133.69,91 -169.94,171.73 -30.92,363.52 31.4,43.31 0.03,84.66 -57.49,100.78 -64.33,18.04 -97.35,-3.04 -142.01,-39.03 -114.2,-92.02 -287.22,-101.17 -430.13,-152.5 -111.19,-39.94 -120.54,-40.48 -224.26,9.17 -101.63,48.65 -156.16,27.42 -240.01,54.03 -124.47,39.52 -92.2,168.82 -88.6,255.68l2.89 169.14c-0.05,112.78 -7.43,212.15 54.74,294.61 101.88,135.13 378.34,103.48 533.21,29.22 26.1,-12.51 39.19,-22.32 59.14,-34.09 78.31,-46.22 249.33,-258.76 112.8,-334.36 -76.73,-42.48 -209.72,-18.3 -235.06,61.24 -19.8,62.19 -44.76,178.52 -130.15,190.35 -27.92,3.87 -60.52,-5.69 -78.13,-15.61 -50.06,-28.22 -37.72,-76.15 -14.87,-120.07 49.72,-95.59 -26.16,-113.4 -100.82,-152.26 -64.62,-33.64 -134.5,-92.7 -81.34,-160.2 14.39,-18.27 27.88,-30.57 56.04,-39.96 69.02,-23.02 133.79,44.5 223.63,63.18 91.7,19.07 190.36,-55.16 334.56,-49.15 50.91,2.12 112.16,20.24 146.78,46.87 20.94,16.11 34.69,24.91 52.16,43.04 19.52,20.23 25.19,27.76 40.15,53.2 19.91,33.88 45.36,87.68 70.3,111 46.59,43.55 99.82,20.11 144.06,-4.46 51.88,-28.83 94.43,-62.91 136.43,-99.61 104.15,-91.01 163.63,-205.19 163.76,-333.61 0.09,-96.41 -38.65,-121.96 1.39,-225.98 19.11,-49.62 76.78,-92.91 102.96,-170.67 35.64,-105.91 33.04,-188.38 -1.37,-295.98 -37.69,-117.86 -116.93,-187.94 -216.06,-249.44 -22.14,-13.74 -39.62,-22.43 -56.27,-36.48 -31.51,-26.57 -59.15,-63.36 -65.35,-115.17 -9.73,-81.33 63.8,-224.55 -110.23,-399.58 -17.58,-17.68 -31.16,-31.77 -47.37,-47.21 -132.07,-125.84 -139.09,-16.59 -182.95,76.93 -9.74,20.76 -18.03,37.56 -29.32,58.56 -78.05,145.18 8.25,145.12 69.72,233.88 26.56,38.36 45.93,80.21 48.03,133.83 2.19,56.12 -25.44,91.19 -88.33,97.93 -73.26,7.87 -85.94,-34.86 -111.97,-76.34 -57.56,-91.75 -147.17,-125.51 -270.43,-97.06 -78.54,18.13 -78.16,30.02 -171.2,16.81 -58.42,-8.3 -98.99,-32.12 -107.85,-80.41 -9.97,-54.35 33.35,-80.39 85.8,-92.5 96.13,-22.19 140.86,-30.65 215.65,-80.42 14.76,-9.82 38.43,-25.51 52.69,-39.41 33.62,-32.76 57.03,-54.97 84.48,-99.43 54.15,-87.67 67.72,-188.61 20.6,-278.35 -40.89,-77.83 -109.02,-135.17 -194.31,-177.9 -81.12,-40.64 -103.63,-30.09 -154.27,-43.46z"/>
                    <path class="fil2" d="M1546.31 199.81c49.39,-13.03 136.66,0.02 180.07,14.83 100.54,34.27 168.44,102.44 182.31,191.14 4.98,31.78 2.08,134.03 -6.99,161.52 -20.18,61.12 -87.8,39.56 -130.8,14.83 -22.53,-12.96 -39.84,-23.76 -59.85,-36.73 -51.04,-33.07 -125.15,-105.64 -197.01,-72.39 -81.56,37.74 -64.1,114.02 -15.89,171.54 17.47,20.85 27.9,29.57 47.91,46.63 35.4,30.17 72.43,49.94 122.24,68.27 124.63,45.86 225.98,28.96 241.17,138.96 3.94,28.53 -3.83,54.87 -0.21,86.3 7.81,67.86 20.09,173.04 -11.59,231.96 -58.96,109.69 -215.06,26.19 -320.58,40.59 -119.94,16.37 -222.2,45.87 -298.04,95.81 -66.72,43.94 -102.51,80.24 -159.15,127.34 -54.45,45.28 -150.53,73.3 -225.79,39.79 -59.76,-26.61 -93.11,-61.56 -122.26,-111.39 -34.12,-58.31 -59.21,-98.03 -148.94,-69.57 -111.36,35.31 -40.47,130.95 -59.88,185.58 -28.05,78.98 -179.76,127.07 -113.6,212.69 21.37,27.65 76.31,62.33 136.26,41.64 72.55,-25.04 119.52,-129.59 285.12,-64.15 51.46,20.34 86.98,38.38 131.32,60.72 27.52,13.85 109.73,54.45 150.39,36.37 37.01,-16.46 62.83,-65.67 83.69,-103.2 22.48,-40.44 39.39,-77.35 69.87,-111.44 29.94,-33.46 39.47,-40.31 73.91,-68.41 71.87,-58.64 256.5,-106.5 358.22,-84.69 52.55,11.28 92.57,32.47 122.5,67.82 61.66,72.83 47,192.88 47,297.69 0,38.35 5.26,137.48 -4.22,167.28 -18.72,58.89 -67.38,46.95 -133.19,37.5 -64.18,-9.22 -114.74,-19.71 -142.88,-51.67 -39.72,-45.12 -21.52,-83.57 -16.12,-136.54 5.02,-49.4 7.81,-104.86 -59.81,-122.35 -27.86,-7.21 -61.93,-11.58 -89.67,-1.54 -74.62,27.01 -65.4,119.72 -92.07,176.01 -61.93,130.69 -288.43,156.71 -415.93,79.56 -44.2,-26.74 -73.65,-62.78 -107.97,-83.45 -55.27,-33.29 -98.8,-31.06 -148.67,2.89 -133.69,91 169.94,171.73 30.92,363.52 -31.4,43.31 -0.03,84.66 57.49,100.78 64.33,18.04 97.35,-3.04 142.01,-39.03 114.2,-92.02 287.21,-101.17 430.13,-152.5 111.19,-39.94 120.54,-40.48 224.26,9.17 101.63,48.65 156.16,27.42 240.01,54.03 124.47,39.52 92.2,168.82 88.6,255.68l-2.89 169.14c0.05,112.78 7.43,212.15 -54.74,294.61 -101.88,135.13 -378.34,103.48 -533.21,29.22 -26.1,-12.51 -39.19,-22.32 -59.14,-34.09 -78.31,-46.22 -249.33,-258.76 -112.8,-334.36 76.73,-42.48 209.72,-18.3 235.06,61.24 19.8,62.19 44.76,178.52 130.15,190.35 27.92,3.87 60.52,-5.69 78.13,-15.61 50.06,-28.22 37.72,-76.15 14.87,-120.07 -49.73,-95.59 26.15,-113.4 100.82,-152.26 64.62,-33.64 134.5,-92.7 81.35,-160.2 -14.39,-18.27 -27.88,-30.57 -56.04,-39.96 -69.02,-23.02 -133.79,44.5 -223.63,63.18 -91.7,19.07 -190.36,-55.16 -334.56,-49.15 -50.91,2.12 -112.16,20.24 -146.78,46.87 -20.94,16.11 -34.69,24.91 -52.17,43.04 -19.51,20.23 -25.19,27.76 -40.15,53.2 -19.91,33.88 -45.36,87.68 -70.3,111 -46.58,43.55 -99.82,20.11 -144.06,-4.46 -51.88,-28.83 -94.43,-62.91 -136.43,-99.61 -104.15,-91.01 -163.63,-205.19 -163.75,-333.61 -0.09,-96.41 38.65,-121.96 -1.39,-225.98 -19.11,-49.62 -76.78,-92.91 -102.95,-170.67 -35.64,-105.91 -33.04,-188.38 1.37,-295.98 37.7,-117.86 116.94,-187.94 216.06,-249.44 22.14,-13.74 39.63,-22.43 56.27,-36.48 31.51,-26.57 59.15,-63.36 65.35,-115.17 9.73,-81.33 -63.8,-224.55 110.23,-399.58 17.58,-17.68 31.16,-31.77 47.37,-47.21 132.08,-125.84 139.1,-16.59 182.95,76.93 9.74,20.76 18.04,37.56 29.33,58.56 78.05,145.18 -8.25,145.12 -69.72,233.88 -26.56,38.36 -45.93,80.21 -48.03,133.83 -2.19,56.12 25.44,91.19 88.33,97.93 73.27,7.87 85.94,-34.86 111.97,-76.34 57.57,-91.75 147.18,-125.51 270.43,-97.06 78.54,18.13 78.16,30.02 171.2,16.81 58.42,-8.3 98.99,-32.12 107.85,-80.41 9.97,-54.35 -33.35,-80.39 -85.8,-92.5 -96.13,-22.19 -140.86,-30.65 -215.65,-80.42 -14.77,-9.82 -38.43,-25.51 -52.69,-39.41 -33.62,-32.76 -57.03,-54.97 -84.48,-99.43 -54.14,-87.67 -67.72,-188.61 -20.59,-278.35 40.89,-77.83 109.02,-135.17 194.31,-177.9 81.12,-40.64 103.63,-30.09 154.28,-43.46z"/>
                    <path class="fil1" d="M1792.92 2886.23c-11.56,-105.46 -59.32,-158.84 -121.16,-198.76 -105.41,-68.04 -346.46,-75.06 -479.65,-76.13 -87.72,-0.71 -183.73,1.28 -278.23,12.69 -123.31,14.89 -335.11,28.8 -437.36,111.61 -76.26,61.77 -105.09,169.63 -94.43,266.82 23.83,217.34 32.3,203.48 92.26,393.51 11.07,35.1 28.51,72.83 43.49,106.69 19.59,44.28 64.62,110.96 99.46,139.62 82.12,67.56 135.28,93.32 251.23,107 69.47,8.2 111.08,-1.37 164.24,0.52 24.42,0.87 62.54,-2.09 87.74,-5.26 31.76,-3.98 53.03,-3.02 86.19,-7.02l85.28 -13.85c24.07,-5.02 51.52,-12.4 74.89,-19.46 105.64,-31.94 209.12,-95.88 277,-187.54 8.58,-11.59 11.83,-14.31 21.33,-24.67l50.56 -82.14c9.57,-19.5 18.5,-38.74 26.06,-60.12 8.35,-23.63 14.31,-42.35 21.42,-67.01 30.91,-107.33 43.52,-270.41 29.69,-396.48z"/>
                    <path class="fil1" d="M2440.89 2886.23c11.56,-105.46 59.32,-158.84 121.16,-198.76 105.41,-68.04 346.46,-75.06 479.65,-76.13 87.72,-0.71 183.73,1.28 278.23,12.69 123.31,14.89 335.11,28.8 437.36,111.61 76.27,61.77 105.09,169.63 94.43,266.82 -23.83,217.34 -32.3,203.48 -92.26,393.51 -11.07,35.1 -28.51,72.83 -43.49,106.69 -19.59,44.28 -64.62,110.96 -99.46,139.62 -82.12,67.56 -135.28,93.32 -251.23,107 -69.47,8.2 -111.08,-1.37 -164.24,0.52 -24.42,0.87 -62.54,-2.09 -87.74,-5.26 -31.76,-3.98 -53.03,-3.02 -86.19,-7.02l-85.28 -13.85c-24.07,-5.02 -51.52,-12.4 -74.89,-19.46 -105.64,-31.94 -209.12,-95.88 -277,-187.54 -8.58,-11.59 -11.83,-14.31 -21.33,-24.67l-50.56 -82.14c-9.57,-19.5 -18.5,-38.74 -26.06,-60.12 -8.35,-23.63 -14.31,-42.35 -21.42,-67.01 -30.91,-107.33 -43.52,-270.41 -29.69,-396.48z"/>
                    <rect class="fil4" x="1951.93" y="186.49" width="329.93" height="2537.93"/>
                    <g 
                        id="_1921939611008"
                        ref={this.letters}
                    >
                        <text x="442.14" y="3053.23"  class="fnt0"></text>
                        <text x="773.09" y="3052.26"  class="fnt0"></text>
                        <text x="1090.83" y="3052.26"  class="fnt0"></text>
                        <text x="1421.89" y="3053.23"  class="fnt0"></text>
                        <text x="2484.9" y="3053.23"  class="fnt0"></text>
                        <text x="2815.85" y="3052.26"  class="fnt0"></text>
                        <text x="3133.59" y="3052.26"  class="fnt0"></text>
                        <text x="3464.65" y="3053.23"  class="fnt0"></text>
                        <text x="442.14" y="3428.06"  class="fnt0"></text>
                        <text x="773.09" y="3427.09"  class="fnt0"></text>
                        <text x="1090.83" y="3427.09"  class="fnt0"></text>
                        <text x="1421.89" y="3428.06"  class="fnt0"></text>
                        <text x="2484.9" y="3428.06"  class="fnt0"></text>
                        <text x="2815.85" y="3427.09"  class="fnt0"></text>
                        <text x="3133.59" y="3427.09"  class="fnt0"></text>
                        <text x="3464.65" y="3428.06"  class="fnt0"></text>
                        <text x="773.14" y="3802.02"  class="fnt0"></text>
                        <text x="1090.87" y="3802.02"  class="fnt0"></text>
                        <text x="2815.9" y="3802.02"  class="fnt0"></text>
                        <text x="3133.63" y="3802.02"  class="fnt0"></text>
                    </g>
                    <path class="fil4" d="M2778.31 2570.53c62.72,-8.48 218.55,-7.13 287.75,-8.64l198.1 2.11c89,6.39 127.87,1.8 233.48,13.95 15.91,1.85 31.8,3.72 47.72,5.47 21.27,2.35 29.93,6.26 47.17,8.78 16.2,2.35 35,2.74 50.79,5.91l236.69 43.23c72.23,10.06 198.68,39.46 272.8,60.78 12.12,3.51 81.92,20.02 80.96,28.18 -6.77,59.02 -45.08,209.5 -70.52,238.69 -35,40.13 -116.54,-11.31 -236.5,360.74 -46.52,144.26 -105.5,287.58 -216.17,386.36 -53.36,47.62 -111.52,80.94 -183.31,100.24 -138.06,37.16 -350.11,48.49 -500.97,31.13 -155.71,-17.91 -284.3,-64.21 -383.48,-128.92 -97.62,-63.73 -177.96,-148.08 -232.35,-251.75 -26.72,-50.96 -53.79,-102.76 -73.71,-158.13 -26.21,-72.92 -34.57,-101.2 -55.09,-175.82 -28.52,-103.72 -22.49,-193.13 -90.76,-254.34 -38.74,-32.38 -114.76,-33.03 -148,0 -68.29,61.21 -62.27,150.62 -90.78,254.34 -20.52,74.63 -28.85,102.9 -55.09,175.82 -19.9,55.38 -46.97,107.18 -73.69,158.13 -54.39,103.67 -134.73,188.02 -232.38,251.75 -99.16,64.71 -227.74,111.02 -383.45,128.92 -150.86,17.35 -362.91,6.02 -501,-31.13 -71.8,-19.3 -129.96,-52.61 -183.29,-100.24 -110.7,-98.78 -169.65,-242.1 -216.17,-386.36 -119.99,-372.05 -201.53,-320.61 -236.5,-360.74 -25.44,-29.19 -63.75,-179.67 -70.55,-238.69 -0.93,-8.16 68.84,-24.67 80.99,-28.18 74.12,-21.31 200.57,-50.72 272.8,-60.78l236.69 -43.23c15.8,-3.17 34.57,-3.55 50.79,-5.91 17.24,-2.52 25.88,-6.43 47.17,-8.78 15.91,-1.75 31.8,-3.63 47.69,-5.47 105.64,-12.15 144.5,-7.56 233.5,-13.95l198.07 -2.11c69.22,1.51 225.06,0.17 287.78,8.64 401.6,54.22 921.22,54.22 1322.82,0zm-985.41 346.41c-11.55,-100.52 -59.31,-151.41 -121.15,-189.46 -105.42,-64.86 -346.46,-71.56 -479.66,-72.56 -87.73,-0.67 -183.72,1.22 -278.22,12.1 -123.3,14.19 -335.11,27.44 -437.36,106.38 -76.28,58.88 -105.11,161.69 -94.45,254.34 23.86,207.15 32.31,193.94 92.27,375.07 11.07,33.46 28.52,69.44 43.49,101.7 19.59,42.2 64.62,105.76 99.44,133.1 82.14,64.38 135.28,88.93 251.24,101.99 69.46,7.8 111.09,-1.32 164.23,0.5 24.43,0.81 62.55,-2.02 87.76,-5.02 31.76,-3.82 53.02,-2.88 86.19,-6.7l85.26 -13.2c24.07,-4.8 51.54,-11.83 74.89,-18.56 105.64,-30.46 209.12,-91.4 277,-178.78 8.59,-11.04 11.83,-13.63 21.34,-23.52l50.55 -78.3c9.57,-18.57 18.5,-36.91 26.07,-57.3 8.35,-22.54 14.31,-40.37 21.41,-63.87 30.92,-102.3 43.52,-257.75 29.69,-377.93zm647.97 0c11.57,-100.52 59.33,-151.41 121.17,-189.46 105.42,-64.86 346.46,-71.56 479.66,-72.56 87.71,-0.67 183.72,1.22 278.22,12.1 123.3,14.19 335.11,27.44 437.36,106.38 76.26,58.88 105.09,161.69 94.43,254.34 -23.83,207.15 -32.31,193.94 -92.24,375.07 -11.09,33.46 -28.52,69.44 -43.49,101.7 -19.59,42.2 -64.62,105.76 -99.47,133.1 -82.11,64.38 -135.28,88.93 -251.22,101.99 -69.46,7.8 -111.09,-1.32 -164.26,0.5 -24.41,0.81 -62.53,-2.02 -87.73,-5.02 -31.76,-3.82 -53.05,-2.88 -86.2,-6.7l-85.28 -13.2c-24.05,-4.8 -51.51,-11.83 -74.87,-18.56 -105.66,-30.46 -209.14,-91.4 -277.02,-178.78 -8.57,-11.04 -11.83,-13.63 -21.31,-23.52l-50.57 -78.3c-9.55,-18.57 -18.48,-36.91 -26.04,-57.3 -8.35,-22.54 -14.33,-40.37 -21.43,-63.87 -30.92,-102.3 -43.52,-257.75 -29.69,-377.93z"/>
                </g>
            </SVG>
        );
        }
}

BrainCharacter.defaultProps = {
    height: 'auto',
    width: 'auto',
    className1:'fil6',
};

export default BrainCharacter;