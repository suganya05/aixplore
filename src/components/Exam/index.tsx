import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Figma from "../../assets/icons/figma.png";
import Illustrator from "../../assets/icons/Illustrator.png";
import XD from "../../assets/icons/Xd.png";
import DesignIcons from "../../assets/images/design-icon-box.png";
import DevelopmentIcons from "../../assets/images/development-icon-box.png";
import "./Exam.scss";
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
              height: "90%",
              "& img": {
                height: "100%",
                width: "100%",
              },
            },
          }}
        >
          <Box className="photo icons">
            <img src={DesignIcons} alt="" />
          </Box>
          <Box className="photo icons ">
            <img src={DevelopmentIcons} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Exam;
