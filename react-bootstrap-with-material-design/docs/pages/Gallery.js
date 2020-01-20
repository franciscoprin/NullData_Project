import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { Component } from "react";
import ContentSlider from '../components/ImagesSlider';

const project6 = [
    {
        link:"./docs/assets/project6/project6_1.jpg",
        alt:"First slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project6/project6_2.jpg",
        alt:"Second slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project6/project6_3.mp4",
        alt:"Third slide",
        ImageTitle:"",
        ImageDescription:"",
    },
];

const project5 = [
    {
        link:"./docs/assets/project5/project5_1.jpg",
        alt:"First slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project5/project5_2.jpg",
        alt:"Second slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project5/project5_3.jpg",
        alt:"Third slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project5/project5_4.jpg",
        alt:"Fourth slide",
        ImageTitle:"",
        ImageDescription:"",
    },
];

const project4 = [
    {
        link:"./docs/assets/project4/project4_1.jpg",
        alt:"First slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project4/project4_2.jpg",
        alt:"Second slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project4/project4_3.jpg",
        alt:"Third slide",
        ImageTitle:"",
        ImageDescription:"",
    },
];

const project3 = [
    {
        link:"./docs/assets/project3/project3_1.jpg",
        alt:"First slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project3/project3_2.jpg",
        alt:"Second slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project3/project3_3.jpg",
        alt:"Third slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project3/project3_4.jpg",
        alt:"Fourth slide",
        ImageTitle:"",
        ImageDescription:"",
    },
];

const project2 = [
    {
        link:"./docs/assets/project2/project2_1.jpg",
        alt:"First slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project2/project2_2.jpg",
        alt:"Second slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project2/project2_3.jpg",
        alt:"Third slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project2/project2_4.jpg",
        alt:"Fourth slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project2/project2_5.jpg",
        alt:"Second slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project2/project2_6.jpg",
        alt:"Third slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project2/project2_7.jpg",
        alt:"Fourth slide",
        ImageTitle:"",
        ImageDescription:"",
    },
];

const project1 = [
    {
        link:"./docs/assets/project1/project1_1.jpg",
        alt:"First slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project1/project1_2.jpg",
        alt:"Second slide",
        ImageTitle:"",
        ImageDescription:"",
    },
    {
        link:"./docs/assets/project1/project1_3.jpg",
        alt:"Third slide",
        ImageTitle:"",
        ImageDescription:"",
    },
];

const timeLineContent = [
    {
        title:"Neon Sign",
        subTitle:"some sub title",
        description:"some Description",
        images:project6,
    },
    {
        title:"Decals",
        subTitle:"some sub title",
        description:"some Description",
        images:project5,
    },
    {
        title:"Digitalization",
        subTitle:"some sub title",
        description:"some Description",
        images:project4,
    },
    {
        title:"Tostitos Locos",
        subTitle:"some sub title",
        description:"some Description",
        images:project3,
    },
    {
        title:"Wall Decoration",
        subTitle:"some sub title",
        description:"some Description",
        images:project2,
    },
    {
        title:"Digitalization",
        subTitle:"some sub title",
        description:"some Description",
        images:project1,
    },
];


class Gallery extends Component {
    render() {
        return(
            <VerticalTimeline>
                {timeLineContent.map((timeLine, i) =>
                    <VerticalTimelineElement
                        index={i}
                        className="vertical-timeline-element--work"
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        
                    >
                        <ContentSlider content={timeLine.images}/>
                        <h3 className="vertical-timeline-element-title">{timeLine.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{timeLine.subTitle}</h4>
                        <p>
                            {timeLine.description}
                        </p>
                    </VerticalTimelineElement>
                )}
            </VerticalTimeline>
        );
    }
}

export default Gallery;