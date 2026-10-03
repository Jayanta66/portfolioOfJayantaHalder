import React from "react";
import freelance from "./data/freeleance.json";

const Freelance = () => {
  return (
    <>
      <div className="container ex" id="freelance">
        <h1>Currently Upgrading Myself as Java Developer :</h1>
        <h3>Currently looking for a job and alongside Upgrading Myself as Java Developer</h3>
        {freelance.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                                    <h1>
                    <span style={{ color: "yellow" }}>{data.organisation}</span>
                    </h1>
                  <h2>{data.role}</h2>
                  <h2> <span style={{ color: "yellowgreen" }}>
                      {data.startDate} - {data.endDate}{" "}
                    </span></h2>
                  <h4>
                   {" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Freelance;
