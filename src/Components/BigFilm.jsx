
import React from "react";

import "./Styles.css";

const BigFilm = props =>{
    
    return(
        <div className = "bigCharacter">
            <button className = "bigButton" onClick= {()=>props.smallPicturehandler()}>☓</button>
            <img className = "bigImage" src ={props.data.image}></img>
            <div className = "bigText">
                <p>Title: {props.data.title} </p>
                <p>Episode: {props.data.episode_id} </p>
                <p>Director: {props.data.director} </p>
                <p>Release: {props.data.release_date} </p>
                <p>Beginning: {props.data.opening_crawl} </p>
            </div>
            <div className = "BigStars">
                <p onClick = {()=>props.starHandler(1,props.data.episode_id)}>{props.rate[0]}</p>
                <p onClick = {()=>props.starHandler(2,props.data.episode_id)}>{props.rate[1]}</p>
                <p onClick = {()=>props.starHandler(3,props.data.episode_id)}>{props.rate[2]}</p>
                <p onClick = {()=>props.starHandler(4,props.data.episode_id)}>{props.rate[3]}</p>
                <p onClick = {()=>props.starHandler(5,props.data.episode_id)}>{props.rate[4]}</p>
                <p>({props.votes[0]})</p>
            </div>
            <div className="actors">
                {props.data.characters.map(element=>{
                    return(<div className="character">
                            <img className="charaterimg" src ={element.image}/>
                            <div className="charactertxt">
                                <p>Name:{element.name}</p>
                                <p>Actor:{element.actor}</p>
                            </div>
                        </div>)
                })}
            </div>
        </div>   
    )
    
};

export { BigFilm as default };