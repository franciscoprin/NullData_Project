import React, { Component } from "react";
import styled from 'styled-components';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { Player } from 'video-react';

class ContentSlider extends Component {
    getDisplayer = (source) => {
      // Get image displayer
      if(source.link.match(/\.(jpeg|jpg|gif|png)$/) != null){
          return(
            <img
              height="auto"
              className="d-block w-100"
              src={source.link}
              alt={source.alt}
            />
          );
      }
      // Get video displayer
      else if (source.link.match(/\.(mp4)$/) != null){

        // <Player
        //       playsInline
        //       // poster="/assets/poster.png"
        //       src={source.link}
        //     />
        
          return(
            <video src={source.link} poster="movie.jpg" controls>
              This is fallback content to display for user agents that do not support the video tag.
            </video>    
          );
      }
  }


  render(){
    const {content} = this.props;
    return(
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={content.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          {content.map((image, i) =>{
            console.log("this is the image number: ", i);
              return(<MDBCarouselItem itemId={i+1}>
                <MDBView>
                  {this.getDisplayer(image)}
                  <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">{image.title}</h3>
                    <p>{image.descritpion}</p>
                  </MDBCarouselCaption>
              </MDBCarouselItem>);
              }
          )}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    );
  }
}
export default ContentSlider;


