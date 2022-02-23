import React from 'react';
import SkillCard from "./SkillRow"

function SkillRow(){
   
    return(
        <div className ="skillRow">
            <div className="toprow">
                    <SkillCard skill={"Java"}/>
                    <SkillCard skill={"Javascript"}/>
                    <SkillCard skill={"React"}/>
                    <SkillCard skill={"HTML/CSS"}/>
                    <SkillCard skill={"Spring"}/>
                </div>
                <div className="bottomRow">
                    <SkillCard skill={"Node"}/>            
                    <SkillCard skill={"Python"}/>
                    <SkillCard skill={"SQL"}/>
                    <SkillCard skill={"Git"}/>
                </div>
        </div>
    );
}
export default SkillRow;