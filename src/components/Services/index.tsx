import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ProfileImg from "../../assets/images/profile.png";
import "./Services.scss";

const data = [
  {
    image: ProfileImg,
    title: "Founder of Hacklido",
    description:
      "Working with Aixplore has been an absolute game-changer for our business. Not only did they deliver an exceptional product,but their dedication to our success truly sets them apart.",
  },
  {
    image: ProfileImg,
    title: "Founder of Hacklido",
    description:
      "Working with Aixplore has been an absolute game-changer for our business. Not only did they deliver an exceptional product,but their dedication to our success truly sets them apart.",
  },
  {
    image: ProfileImg,
    title: "Founder of Hacklido",
    description:
      "Working with Aixplore has been an absolute game-changer for our business. Not only did they deliver an exceptional product,but their dedication to our success truly sets them apart.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="services-wrapper mx">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section ref={targetRef} className="section-container mx">
      <div className="sticky-container">
        <motion.div style={{ x }} className="card-container">
          <div className="services-container">
            <div className="service-content">
              <h5>
                What Our <br />
                <span>Valued Customer</span> <br />
                Says
              </h5>
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  image: string;
  title: string;
  description: string;
}
[];

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="testimonials-pages">
          <div className="testimonials-head">
            <div className="testimonials-heading">
              <img src={image} alt="" />
              <h4>{title}</h4>
            </div>
            <div className="testimonials-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
