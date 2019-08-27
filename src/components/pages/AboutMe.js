import React from 'react';
import meImg from '../../img/myself.jpg';

const AboutMe = () => {
    return (
                <div className="about-me">
                    <div className="profile-pic-border">
                        <img className="me-img" src={meImg} alt="Me"></img>
                    </div>
                    <h3 className="about-me-title">ABOUT ME</h3>
                    <p className="about-me-text"> Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellat voluptatem. Eligendi excepturi placeat laboriosam, quidem vel in velit harum maiores ut, vitae consectetur quod odio modi doloremque libero officia Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellat voluptatem. Eligendi excepturi placeat laboriosam, quidem vel in velit harum maiores ut, vitae consectetur quod odio modi doloremque libero officia ?</p>
                </div>
    );
}

export default AboutMe;