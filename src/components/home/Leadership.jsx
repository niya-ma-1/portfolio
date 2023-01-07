import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          {/* <p className="lead">{message}</p> */}
          {message.map((value, index) => {
            return (
            <div>
            <h4> {(!value.link) ? value.name : <a href={value.link}>{value.name}</a>}</h4>
            <h2 className="lead">{value.role}</h2>
            <br></br>
            </div>
            )
          })}
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    // width={imageSize.width}
                    // height={imageSize.height}
                    width='100%'
                    height='100%'
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
