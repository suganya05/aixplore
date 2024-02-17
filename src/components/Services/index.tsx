import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import XD from "../../assets/icons/Xd.png";
import Figma from "../../assets/icons/figma.png";
import Illustrator from "../../assets/icons/Illustrator.png";
import NextJs from "../../assets/icons/next.js.png";
import NodeJs from "../../assets/icons/node.js.png";
import ReactIcon from "../../assets/icons/react.png";
import MongoDB from "../../assets/icons/mongoDb.png";
import Blender from "../../assets/icons/blender.png";
import GraphQL from "../../assets/icons/graphQL.png";
import "./Services.scss";

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-47%"]);

  return (
    <section ref={targetRef} className="section-container mx">
      <div className="sticky-container">
        <motion.div style={{ x }} className="card-container">
          <div className="services-container">
            <div className="services-head">
              <p>Services</p>
            </div>
            <div className="service-content">
              <h5>
                A Complete Digital Product <br /> team
              </h5>
              <p>
                Designers, developers, and project managers unite, crafting
                success stories with creativity, expertise, and flawless
                execution, ensuring client triumph every time, delivering
                projects at their peak potential.
              </p>
            </div>
          </div>
          {items.map((item, index) => {
            return (
              <Card
                key={index}
                head={item.head}
                number={item.number}
                description={item.description}
                figma={item.figma}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  head: string;
  number: string;
  description: string;
  figma: {
    title: string;
    image: any;
  }[];
}
[];

const Card: React.FC<CardProps> = ({ head, number, description, figma }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="heading">
          <h2>{head}</h2>
          <div className="border-bottom"></div>
          <h4>{number}</h4>
        </div>
        <div className="para">
          <p>{description}</p>
        </div>

        <div className="figma-images">
          {figma.map((figmaItem, index) => (
            <div key={index} className="icon-box">
              <h3>{figmaItem.title}</h3>
              <img src={figmaItem.image} alt={figmaItem.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    head: "Design",
    number: "01",
    description:
      "Our design process starts with a comprehensive case study of client requirements, followed by tailored approaches across various platforms for seamless user experiences.",

    figma: [
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
    ],
  },
  {
    head: "Development",
    number: "02",
    description:
      "Our versatile team excels in web, app, and 3D development, leveraging cutting-edge technology to deliver top-tier products tailored to perfection.",
    figma: [
      {
        title: "Next.js",
        image: NextJs,
      },
      {
        title: "React Native",
        image: ReactIcon,
      },
      {
        title: "Node.js",
        image: NodeJs,
      },
      {
        title: "MongoDB",
        image: MongoDB,
      },
      {
        title: "GraphQL",
        image: GraphQL,
      },
      {
        title: "Blender",
        image: Blender,
      },
    ],
  },
];

export default Services;
