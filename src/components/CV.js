import React from 'react';


function CV(){
    return(
        <div className ="cv">
            <image id="profilePicture" src="" alt="Picture of Niklas Pudschun"/>
            <table>
                <tbody>
                    <tr>
                        <td>Birthday:</td>
                        <td>04.06.1992</td>
                    </tr>
                    <tr>
                        <td>Adress:</td>
                        <td>Meierstraße 16, Lübeck</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>0451/48924973</td>
                    </tr>
                    <tr>
                        <td>Mobilephone:</td>
                        <td>01525/1640106</td>
                    </tr>
                    <tr>
                        <td>E-Mail:</td>
                        <td>pudschun.j.n@gmx.de</td>
                    </tr>
                    <tr>
                        <td>LinkedIn:</td>
                        <td><a href="https://www.linkedin.com/in/jan-niklas-pudschun-1bb828228/">Jan Niklas Pudschun</a></td>
                    </tr>
                    <tr>
                        <td>GitHub:</td>
                        <td> <a href="https://github.com/JNpudschun">Jan Niklas Pudschun</a></td>
                    </tr>
                </tbody>
            </table>
            <h3>Education:</h3><br/>
            <ul>
                <li>B.Sc. Informatik at University Lübeck</li>
                <li>WBS Bootcamp for Web and Fullstack Development</li>
                <li>Highschool at Gymnasium Reutershagen Rostock</li>
            </ul>
            <h3>Experience:</h3><br/>
            <ul>
                <li>Retailsalesman at Junge Die Bäckerei</li>
                <li>Projektengineer with Solcon GmbH</li>
            </ul>    
        </div>
    );
}
export default CV;