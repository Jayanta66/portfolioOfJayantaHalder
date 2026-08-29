import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-10" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          <br></br>

          {project.map((data) => (
            <>
                      <br></br>
          <br></br>

              <div
                key={data.id}
                class="my-7 col-sm-7 col-md-7 col-lg-7 mx-10"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img 
                      src={data.imageSrc1}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px"
                        
                      }}
                    />
                  </div>
                  
                  <div className="img d-flex justify-content-center align-content-center p-3" >
                    <img 
                      src={data.imageSrc2}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc3}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc4}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>


                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc5}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>


                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc6}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>


                  
                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc7}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>



                  
                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc8}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>



                  
                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc9}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>




                  
                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc10}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>



                  
                                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc11}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "1200px",
                        height: "800px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>


                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                     <a href={data.demo} className="btn btn-danger">
                      YouTube Demo
                    </a>
                    <a href="Ecommerceprojectreact" className="btn btn-primary mx-3">
                      Details
                    </a>
                    
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Projects;
