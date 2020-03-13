
import React from "react";

import "./Styles.css";
import Film from "./Film"
import BigFilm from "./BigFilm"

const Films = props =>{
        return(
            
            <div className = "Films">

                <div className = "aloneones">
                    {props.data.results.map((element,index) => {
                        return(  <Film starHandler = {props.starHandler} 
                            bigPictureHandler = {props.bigPictureHandler} 
                            key = {element.name} 
                            data = {element} 
                            rate={props.rate[index]} 
                            votes = {props.votes[index]}>

                            </Film>);
                    })
                    }
                </div>
                {props.data.info.bigPicture===0 ? null : 
                        <BigFilm bigPictureHandler = {props.bigPictureHandler}
                        starHandler = {props.starHandler} 
                        smallPicturehandler = {props.smallPicturehandler}         
                        data = {props.data.results[props.data.info.bigPicture-1]}
                        rate={props.rate[props.data.info.bigPicture-1]} 
                        votes = {props.votes[props.data.info.bigPicture-1]}>   
                        </BigFilm>
                }            
            
                
            </div>

        )    
};

export { Films as default };