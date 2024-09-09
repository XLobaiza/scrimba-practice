import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return(
        <header className="header">
            <img src="src/assets/profileIMG.png"/>
            <div className="header-copy">
                <h1>Laura Smith</h1>
                <p>Frontend Developer</p>
                <a>laurasmith.website</a>
            </div>
            <div className="actions">
                <button className="main-btn">
                <FontAwesomeIcon icon={faEnvelope} className="icon-main" />Email
                </button>
                <button className="secondary-btn">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </button>
            </div>
        </header>
    )
}