"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
} from "../bootstrap-components/card/Card";
import { dummyData } from "@/app/data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgStyle = { height: "400px" };
const sliderStyle = {
  height: "400px",
};
export default function HeroCard() {
  const [data, setData] = useState(dummyData);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="row justify-content-center my-2">
      <div className="col-12 col-md-10 col-lg-10">
        <Slider {...sliderSettings} style={sliderStyle}>
          {data.map((img) => (
            <>
              <div className="card">
                <img
                  src={img.imageSrc}
                  style={{ height: "400px" }}
                  className="rounded object-fit-cover object-fit-lg-contain w-100"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title bg-primary rounded p-2 bg-opacity-75 d-inline">
                    {" "}
                    {img.title}
                  </h5>
                  <p className="card-text my-2">{img.subTitle}</p>
                </div>
              </div>
            </>
            //   <CardImgOverlay
            //     key={img.id}
            //     src={img.imageSrc}
            //     className="object-fit-cover"
            //   >
            //     <CardText>{img.title}</CardText>
            //   </CardImgOverlay>
          ))}
        </Slider>
      </div>
    </div>
  );
}
