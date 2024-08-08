import React, { useRef } from "react";
import "./Experiences.css";
import next_icon from "../../assets/next.png";
import back_icon from "../../assets/back.png";
import user_1 from "../../assets/Pic1.png";
import user_2 from "../../assets/Pic2.png";
import user_3 from "../../assets/Pic3.png";
import user_4 from "../../assets/Pic4.png";
import user_5 from "../../assets/Pic5.png";
import user_6 from "../../assets/Pic6.png";
import user_7 from "../../assets/Pic7.png";
import user_8 from "../../assets/Pic8.png";

const Experiences = () => {

  const slider = useRef();
  let tx = 0; 

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = ()=>{
  if(tx < -0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className="Experiences">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
              <div>
                  <h3>During Undergraduate Project Presentation</h3>
                   </div>
                   </div>
                  
                <img src={user_1} alt="" />
                <img src={user_2} alt="" />
                <p>
                {" "}
                Description of the project goes here. This can 
                include objectives, methodologies, and results.
              </p>
              </div>
                 </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>During My Undergrad Student Work Experience</h3>
             </div>
              </div>
              <img src={user_5} alt="" />
              <img src={user_4} alt="" />
              <p>
                {" "}
                Choosing to pursue my degree at Gradedu was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commmitment to academic
                excellence have truly exceeded my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                  <div>
                  <h3>During my Undergrad Teaching Assistant</h3>
                </div>
              </div>
              <img src={user_3} alt="" />
                <img src={user_6} alt="" />
              <p>
                {" "}
                Choosing to pursue my degree at Gradedu was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commmitment to academic
                excellence have truly exceeded my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                  <div>
                  <h3>Field Trip - Transmission Company of Nigeria(TCN)</h3>
                  </div>
              </div>
              <img src={user_7} alt="" />
                <img src={user_8} alt="" />
              <p>
                {" "}
                Choosing to pursue my degree at Gradedu was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commmitment to academic
                excellence have truly exceeded my expectation
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
