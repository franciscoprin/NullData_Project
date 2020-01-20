import styled from 'styled-components';
import {MDBCol} from "mdbreact";

const keyExcluded = [
    "children",
    "forwardedComponent",
    "forwardedRef",
    "theme",
    "",
]

class Sizer{
    constructor(str="",val={}){
        this.max = "INF";
        this.min = 0;
        // span -> width in percentage.
        val["width"] = this.getWidthString(val["span"]);
        delete val["span"];
        this.val = val;
        console.log("I AM IN THE CONSTRUCTOR");

        switch (str){
            case "xs":this.xs(val); break;
            case "sm":this.sm(val); break;
            case "md":this.md(val); break;
            case "lg":this.lg(val); break;
            case "all":break;
            default: this.custom(str,val); break;
        }
    }

    getWidthString = (span) =>{
        if(!span) return;
        let width = span/12*100;
        return `${width}%`;
    }

    xs = () => {this.max=767}
    sm = () => {this.min=768;this.max=991;}
    md = () => {this.min=992;this.max=1199;}
    lg = () => {this.min=1200;}
    all = () => {this.min="ALL";}
    custom = (str,val) => {
        [this.min, this.max] = str.split("-");
        this.val = val;
    }

    getString(){
        let bootValue = `${JSON.stringify(this.val).replace(/\"/g,"").replace(/\,/g,";")}\n`
        if(this.max==="INF"){
            bootValue = `@media (min-width: ${this.min}px) ${bootValue}`;
        }
        else if(this.min && this.max){
            bootValue = `@media (min-width: ${this.min}px) and (max-width: ${this.max}px) ${bootValue}`;
        }
        return bootValue;
    }
}

const Col = styled.div`
    ${props => {
        
            let bt = "";
            for(let key in  props){
                if(keyExcluded.includes(key)){continue} // TODO: get dict cleaner props
                console.log("this is the key: ", key);
                bt += new Sizer(key,props[key]).getString();
            }
            return bt;
        }
    }
`;

export default Col;