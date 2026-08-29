import React, { useEffect, useRef } from "react";
import pdf from "../pdf/JayantaHalder.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
import salary from "./data/salary.json";
//import salaryy from "./data/salaryy.json";
import jobchange from "./data/jobchange.json";



const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Jayanta Halder",
        "I'm Java full stack developer",
        "Web Developer (Spring Boot, Hibernate ,JPA, Microservices",
        "VPS, JSP, Thymeleaf,React,",
        "RestApi,Mysql,git,github,",
        "eclipse,putty)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
            <div>
              
              {/* <h1 style={{ color: 'red' }}>Please do not call / contact me if job location does not match with my Preferred Location: Kolkata or Out-side of India or remote</h1> */}

                        <h1>If you are using mobile phene then Please use desktop mode to get better UI<br></br> </h1>

                        <h1>Work Sample You may visit by clicking on the link(If you are unable at visit these link then contact me and let me know , i would turn on the server) :<br></br> </h1>
              <h1><a href="https://healthcarepoint.joyjagatbondu.com">https://healthcarepoint.joyjagatbondu.com</a></h1>
              <h1><a href="https://jobportal.joyjagatbondu.com">https://jobportal.joyjagatbondu.com</a></h1>
              <h1><a href="https://salon.joyjagatbondu.com">https://salon.joyjagatbondu.com</a></h1>


              

        </div>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
         <h1 ref={typedRef}></h1>
               <a
            href={pdf}
            download="JayantaHalder.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
          <h2>Contact : 8910425824</h2>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="100">
            <img src={`./assets/${hero.imgSrc}`} />
          </div>
        
        </div>

      </div>


      <div className="container ex" id="salary">
        <h1>Salary details : My Current CTC would not be any problem . If i got the opportunity , as per the company policy i am ok.</h1>
        {salary.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >

                <div className="right">
                  <h1>Current CTC : 
                    <span style={{ color: "yellow" }}>{data.currentSalary}</span>
                    </h1>
                    <h1>Expected CTC : 
                    <span style={{ color: "yellow" }}>{data.expectedSalary}</span>
                    </h1>
                                        <h1>Current Location : 
                    <span style={{ color: "yellow" }}>{data.Currentlocation}</span>
                    </h1>
                                        <h1>Preferred Location : 
                    <span style={{ color: "yellow" }}>{data.PreferredLocation}</span>
                    </h1>
                                        <h1>Re-location : 
                    <span style={{ color: "yellow" }}>{data.Relocation}</span>
                    </h1>
                </div>
                
              </div>
            </>
          );
        })}
      </div>

      <div className="container ex" id="jobchange">
        <h1>Reason for Job change : </h1>
        {jobchange.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >

                <div className="right">
                  <h1>Previous Job  : 
                    <span style={{ color: "yellow" }}>{data.lastjob}</span>
                    </h1>
                    <h1>First Job : 
                    <span style={{ color: "yellow" }}>{data.firstjob}</span>
                    </h1>
                                       
                </div>
                
              </div>
            </>
          );
        })}
      </div>


    </>
  );
};

export default Home;
