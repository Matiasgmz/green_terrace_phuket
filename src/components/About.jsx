import React from "react";
import restaurante from "../assets/img/restaurante_img.jpg";
import chili from "../assets/img/chili.png";
import lemon from "../assets/img/lemon.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  // Suivre la progression du scroll
  const { scrollYProgress } = useScroll();

  const chiliX = useTransform(scrollYProgress, [0.2, 0.35], ["-100%", "0%"]); // Arrive de la gauche
  const lemonX = useTransform(scrollYProgress, [0.2, 0.35], ["100%", "0%"]); // Arrive de la droite

  return (
    <div className="container text-light" >
      <motion.div
        style={{
          x: chiliX,
          width: "300px",
          height: "300px",
          backgroundImage: `url(${chili})`,
          backgroundSize: "cover",
          rotate: "-15deg",
          position: "absolute",
          left: "0",
          marginTop: "5vh",
          zIndex: "1",
          transform: "translateY(-75%)",
        }}
      />

      {/* Citron (lemon) */}
      <motion.div
        style={{
          x: lemonX,
          width: "300px",
          height: "200px",
          backgroundImage: `url(${lemon})`,
          backgroundSize: "cover",
          rotate: "15deg",
          position: "absolute",
          right: "0",
          marginTop: "10vh",
          zIndex: "1",
          transform: "translateY(-75%)",
        }}
      />

      <div className="row justify-content-around">
        <h2 style={{ zIndex: "2" }} className="my-5 text-center">
          ABOUT
        </h2>
        <div
          style={{ zIndex: "2" }}
          id="containerPhoto"
          className="col-12 col-xl-6"
        >
          <img id="restaurant_img" src={restaurante} alt="" />
        </div>
        <div
          style={{ zIndex: "2" }}
          className="col-12 col-xl-6 text-center fs-5 align-self-center"
        >
          <p>
            Green Terrace welcomes you to a lush and refreshing space where the
            terrace serves as the true heart of the restaurant. Set in the open
            air and surrounded by vibrant tropical plants, it creates a soothing
            ambiance that invites relaxation. This natural setting is perfect
            for savoring Thai cuisine crafted with care from fresh, locally
            sourced ingredients.
          </p>

          <p>
            Each dish highlights seasonal produce, from crisp vegetables and
            aromatic herbs to high-quality meats, all prepared with authentic
            Thai flavors. Whether you’re enjoying a leisurely lunch or an
            evening dinner, the terrace at Green Terrace offers a unique setting
            for an authentic Thai culinary experience in the heart of Phuket.
          </p>
        </div>
      </div>
    </div>
  );
}
