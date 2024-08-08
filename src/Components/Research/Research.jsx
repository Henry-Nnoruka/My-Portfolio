import React, { useRef } from "react";
import "./Research.css";
import next_icon from "../../assets/next.png";
import back_icon from "../../assets/back.png";


const Research = () => {

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
    <div className="Research">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
              <div>
                  <h3>Design and analysis of a buck-boost DC-DC
                  converter fed by a PV array</h3>
                   </div>
                   </div>
                   <p>
                {" "}
                The focus of this project is on the design and analysis of a buck-boost direct current
                         to direct current (DC-DC) converter powered by a photovoltaic (PV) array, aiming to optimize power conversion in
                          response to the rising significance of renewable energy. With the conventional alternating current (AC) power supply's
                           environmental drawbacks, the shift towards DC power conversion becomes crucial for efficiency. The chosen buck-boost 
                           converter stands out for its ability to both step-up and step-down voltage, streamlining the process. The project involves
                            meticulous steps: defining converter specs, component selection, circuit design, MATLAB simulation, and OrCAD Cadence validation. 
                            Results show superior performance and efficiency compared to other converters, especially in maintaining output voltage. 
                            The converter operates efficiently in both buck mode (utilizing a duty cycle of 0.4) and boost modes mode (utilizing a duty 
                            cycle of 0.7), exhibiting a steady output with minimal ripple due to a continuous conduction mode. This research significantly 
                            contributes to enhancing power conversion effectiveness, particularly when integrated with photovoltaic arrays, promoting cleaner 
                            and more efficient energy solutions.
              </p>
              </div>
                </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Impact of integrating renewable source into power system grid</h3>
             </div>
              </div>
                <p>
                {" "}
                The focus of this project is on the design and analysis of a buck-boost direct current
                        to direct current (DC-DC) converter powered by a photovoltaic (PV) array, aiming to optimize power conversion in
                         response to the rising significance of renewable energy. With the conventional alternating current (AC) power supply's
                          environmental drawbacks, the shift towards DC power conversion becomes crucial for efficiency. The chosen buck-boost 
                          converter stands out for its ability to both step-up and step-down voltage, streamlining the process. The project involves
                           meticulous steps: defining converter specs, component selection, circuit design, MATLAB simulation, and OrCAD Cadence validation. 
                           Results show superior performance and efficiency compared to other converters, especially in maintaining output voltage. 
                           The converter operates efficiently in both buck mode (utilizing a duty cycle of 0.4) and boost modes mode (utilizing a duty 
                           cycle of 0.7), exhibiting a steady output with minimal ripple due to a continuous conduction mode. This research significantly 
                           contributes to enhancing power conversion effectiveness, particularly when integrated with photovoltaic arrays, promoting cleaner 
                           and more efficient energy solutions.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                  <div>
                  <h3>Design, simulation, and analysis of a single-phase voltage source 
                    inverter using sinusoidal pulse width modulation</h3>
                </div>
              </div>
                <p>
                {" "}
                The focus of this project is on the design and analysis of a buck-boost direct current
                        to direct current (DC-DC) converter powered by a photovoltaic (PV) array, aiming to optimize power conversion in
                         response to the rising significance of renewable energy. With the conventional alternating current (AC) power supply's
                          environmental drawbacks, the shift towards DC power conversion becomes crucial for efficiency. The chosen buck-boost 
                          converter stands out for its ability to both step-up and step-down voltage, streamlining the process. The project involves
                           meticulous steps: defining converter specs, component selection, circuit design, MATLAB simulation, and OrCAD Cadence validation. 
                           Results show superior performance and efficiency compared to other converters, especially in maintaining output voltage. 
                           The converter operates efficiently in both buck mode (utilizing a duty cycle of 0.4) and boost modes mode (utilizing a duty 
                           cycle of 0.7), exhibiting a steady output with minimal ripple due to a continuous conduction mode. This research significantly 
                           contributes to enhancing power conversion effectiveness, particularly when integrated with photovoltaic arrays, promoting cleaner 
                           and more efficient energy solutions.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                  <div>
                  <h3>Design, simulation, and analysis of a single-phase voltage source
                     inverter using sinusoidal pulse width modulation</h3>
                  </div>
              </div>
               <p>
                {" "}
                he focus of this project is on the design and analysis of a buck-boost direct current
                        to direct current (DC-DC) converter powered by a photovoltaic (PV) array, aiming to optimize power conversion in
                         response to the rising significance of renewable energy. With the conventional alternating current (AC) power supply's
                          environmental drawbacks, the shift towards DC power conversion becomes crucial for efficiency. The chosen buck-boost 
                          converter stands out for its ability to both step-up and step-down voltage, streamlining the process. The project involves
                           meticulous steps: defining converter specs, component selection, circuit design, MATLAB simulation, and OrCAD Cadence validation. 
                           Results show superior performance and efficiency compared to other converters, especially in maintaining output voltage. 
                           The converter operates efficiently in both buck mode (utilizing a duty cycle of 0.4) and boost modes mode (utilizing a duty 
                           cycle of 0.7), exhibiting a steady output with minimal ripple due to a continuous conduction mode. This research significantly 
                           contributes to enhancing power conversion effectiveness, particularly when integrated with photovoltaic arrays, promoting cleaner 
                           and more efficient energy solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Research;
