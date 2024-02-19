import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import ProfileImg from "../../assets/images/profile.png";
gsap.registerPlugin(ScrollTrigger);
import "./Testimonials.scss";

function Testimonials() {
  const calculatedHeight = `calc(100vh - 100px)`;

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
    <React.Fragment>
      <Box className="gallery testimonials-wrapper" sx={{ display: "flex" }}>
        <Box
          className="rightblock"
          sx={{
            width: "10%",
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
                height: "100%",
                "& img": {
                  height: "100%",
                  width: "100%",
                },
              },
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: calculatedHeight,
              }}
            >
              <div className="service-content">
                <h5>
                  What Our <br />
                  <span>Valued Customer</span> <br />
                  Says
                </h5>
              </div>
            </div>
          </Box>
        </Box>
        <Box
          className="left"
          sx={{
            width: "50%",
            marginLeft: "auto",
            "& .details": {
              height: "80vh",
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
          <Box className="details"></Box>
          <Box className="details">
            <div className="testimonials-pages">
              <div className="testimonials-head">
                <div className="testimonials-heading">
                  <img src={ProfileImg} alt="" />
                  <h4>Founder of Hacklido</h4>
                </div>
                <div className="testimonials-description">
                  <p>
                    Working with Aixplore has been an absolute game-changer for
                    our business. Not only did they deliver an exceptional
                    product,but their dedication to our success truly sets them
                    apart.
                  </p>
                </div>
              </div>
            </div>
          </Box>
          <Box className="details">
            <div className="testimonials-pages">
              <div className="testimonials-head">
                <div className="testimonials-heading">
                  <img src={ProfileImg} alt="" />
                  <h4>Founder of Hacklido</h4>
                </div>
                <div className="testimonials-description">
                  <p>
                    Working with Aixplore has been an absolute game-changer for
                    our business. Not only did they deliver an exceptional
                    product,but their dedication to our success truly sets them
                    apart.
                  </p>
                </div>
              </div>
            </div>
          </Box>
          <Box className="details">
            <div className="testimonials-pages">
              <div className="testimonials-head">
                <div className="testimonials-heading">
                  <img src={ProfileImg} alt="" />
                  <h4>Founder of Hacklido</h4>
                </div>
                <div className="testimonials-description">
                  <p>
                    Working with Aixplore has been an absolute game-changer for
                    our business. Not only did they deliver an exceptional
                    product,but their dedication to our success truly sets them
                    apart.
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Testimonials;
