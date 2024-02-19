import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Figma from "../../assets/icons/figma.png";
import Illustrator from "../../assets/icons/Illustrator.png";
import XD from "../../assets/icons/Xd.png";
import DesignImg from "../../assets/images/design-icon-box.png";
import DevelopmentImg from "../../assets/images/development-icon-box.png";
import DesignIcons from "../../assets/images/design-icon-box.png";
import DevelopmentIcons from "../../assets/images/development-icon-box.png";
import "./Exam.scss";
import { content } from "../../utils/data";
gsap.registerPlugin(ScrollTrigger);

const DesignData = [
  {
    title: "Figma",
    image: Figma,
  },
  {
    title: "Adobe XD",
    image: XD,
  },
  {
    title: "Illustrator",
    image: Illustrator,
  },
];

const Exam: React.FC = () => {
  const backgroundColors = ["#FFE6E6", "#FFEAC9"];
  const images = [DesignImg, DevelopmentImg];
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { y: "110%" });

      const animation = gsap.to(".photo:not(:first-child)", {
        y: 0,
        duration: 1,
        stagger: 1,
      });

      const exitAnimation = gsap.from(
        ".photo:not(:first-child)",
        {
          y: "110%",
          duration: 1,
        },
        {
          y: "110%",
          duration: 1,
        }
      );

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        onEnter: () => exitAnimation.play(),
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Box className="gallery" sx={{ display: "flex" }}>
      <Box
        className="left"
        sx={{
          width: "50%",
          marginLeft: "auto",
          "& .details": {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "40vw",
            marginLeft: "auto",
            color: "#000",
            fontSize: "3rem",
            fontWeight: 900,
          },
        }}
      >
        <Box className="details design-content">
          <h3>Design</h3>
          <p>
            Our design process starts with a comprehensive case study of client
            requirements, followed by tailored approaches across various
            platforms for seamless user experiences.
          </p>
        </Box>
        <Box className="details design-content">
          <h3>Development</h3>
          <p>
            Our versatile team excels in web, app, and 3D development,
            leveraging cutting-edge technology to deliver top-tier products
            tailored to perfection.
          </p>
        </Box>
      </Box>
      <Box
        className="rightblock"
        sx={{
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "40vw",
            height: "40vw",
            position: "relative",
            overflow: "hidden",
            "& .photo": {
              position: "absolute",
              width: "100%",
              // height: "100%",
              "& img": {
                // height: "100%",
                width: "100%",
              },
            },
          }}
        >
          {/* <Box className="photo icons">
            <img src={DesignIcons} alt="img-1" />
          </Box>
          <Box className="photo icons ">
            <img src={DevelopmentIcons} alt="img-2" />
          </Box> */}
          <motion.div
            animate={{
              backgroundImage: images[activeCard % images.length],
            }}
            className="image"
          >
            <img src={images[activeCard % images.length]} alt="" />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Exam;
