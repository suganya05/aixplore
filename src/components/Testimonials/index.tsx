import React from "react";
import ProfileImg from "../../assets/images/profile.png";
import "./Testimonials.scss";

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

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-container">
        <div className="testimonials-title">
          <h2>
            What Our <span>Valued Customer</span> Says
          </h2>
        </div>
        <div className="testimonials-pages">
          {data.map((f, index) => {
            return (
              <div key={index} className="testimonials-head">
                <div className="testimonials-heading">
                  <img src={f.image} alt="" />
                  <h4>{f.title}</h4>
                </div>
                <div className="testimonials-description">
                  <p>{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
