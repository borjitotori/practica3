
import React from "react";

import "./Styles.css";
let stars= 1;
const Film = props =>{
    return(
        <div sty className = "Film">
            <img onClick = {()=>props.bigPictureHandler(props.data.episode_id)} className = "image" src ={props.data.image}></img>
            <p>{props.data.name} </p>
            <p>{props.data.title}</p>
            <p>Episode: {props.data.episode_id}</p>
            <div className = "Stars">
                <p onClick = {()=>props.starHandler(1,props.data.episode_id)}>{props.rate[0]}</p>
                <p onClick = {()=>props.starHandler(2,props.data.episode_id)}>{props.rate[1]}</p>
                <p onClick = {()=>props.starHandler(3,props.data.episode_id)}>{props.rate[2]}</p>
                <p onClick = {()=>props.starHandler(4,props.data.episode_id)}>{props.rate[3]}</p>
                <p onClick = {()=>props.starHandler(5,props.data.episode_id)}>{props.rate[4]}</p>
                <p>({props.votes[0]})</p>
            </div>
        </div>   
    )
    
};

export { Film as default };