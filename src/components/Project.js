import React, { useState, useEffect } from 'react';


function Project({num}){
    const [imgSrc, setImgSrc]=useState("https://via.placeholder.com/150x150.png")
    const [title, setTitle] = useState("Project")
    const [descr, setDescr] = useState("LOREM IPSUM...")
    
    function setInfo(num){
        switch(num){
            case 1:
                setImgSrc("Imagepath");
                setTitle("Projecttitle")
                setDescr("LOREM IPSUM")
                break;
            case 2:
                setImgSrc("Imagepath");
                setTitle("Projecttitle")
                setDescr("LOREM IPSUM")
                break;
            case 3:
                setImgSrc("Imagepath");
                setTitle("Projecttitle")
                setDescr("LOREM IPSUM")
                break;
            case 4:
                setImgSrc("Imagepath");
                setTitle("Projecttitle")
                setDescr("LOREM IPSUM")
                break;
            default:
                setImgSrc("Imagepath");
                setTitle("Projecttitle")
                setDescr("LOREM IPSUM")
                break;
        }
    }
    useEffect(
        setInfo(num)    
    ,[])
    return(
        <div className ="project">
            <img src={imgSrc} alt={num}/>
            <h2>{title}</h2>
            <p>{descr}</p>
        </div>
    );
}
export default Project;