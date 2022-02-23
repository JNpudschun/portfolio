import React, { useEffect, useState } from 'react';


function SkillCard({skill}){
    const [imgSrc,setImgSrc] =useState("https://via.placeholder.com/150x150.png");
    const [desText,setdesText] =useState("LOREM IPSUM");
    function setInfo(skill){
        switch(skill){
            case "Java":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            case "JavaScript":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            case "React":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            case "HTML/CSS":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            case "Spring":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            case "Node":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            case "Python":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            case "SQL":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            case "Git":
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
            default:
                setImgSrc("https://via.placeholder.com/150x150.png");
                setdesText("LOREM IPSUM")
                break;
        }
    }
    useEffect(
        setInfo(skill)    
    ,[])
    return(
        <div>
            <img src={imgSrc} alt={skill}/>
            <p>{desText}</p>
        </div>
    );
}
export default SkillCard;