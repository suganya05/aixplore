import React from "react";
import Figma from "../../assets/icons/figma.png";
import Illustrator from "../../assets/icons/Illustrator.png";
import NextJs from "../../assets/icons/next.js.png";
import NodeJs from "../../assets/icons/node.js.png";
import ReactIcon from "../../assets/icons/react.png";
import MongoDB from "../../assets/icons/mongoDb.png";
import Blender from "../../assets/icons/blender.png";
import GraphQL from "../../assets/icons/graphQL.png";
import XD from "../../assets/icons/Xd.png";
import "./Service.scss";

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

const DevelopmentData = [
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
];

const Service: React.FC = () => {
  return (
    <div className="service-wrapper mx">
      <div className="service-container">
        <h3>Services</h3>
        <h1>
          A Complete Digital Product <br />
          team
        </h1>
        <p>
          Designers, developers, and project managers unite, crafting success
          stories with creativity, expertise, and flawless execution, ensuring
          client triumph every time, delivering projects at their peak
          potential.
        </p>
      </div>
      <div className="sections">
        <div>
          <div className="design-wrapper">
            <div className="first">
              <h3>Design</h3>
              <p>
                Our design process starts with a comprehensive case study of
                client requirements, followed by tailored approaches across
                various platforms for seamless user experiences.
              </p>
            </div>
            <div className="second">
              {DesignData.map((f, index) => {
                return (
                  <div key={index} className="box">
                    <h2>{f.title}</h2>
                    <img src={f.image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="design-wrapper">
            <div className="first">
              <h3>Development</h3>
              <p>
                Our versatile team excels in web, app, and 3D development,
                leveraging cutting-edge technology to deliver top-tier products
                tailored to perfection.
              </p>
            </div>

            <div className="flex-box">
              <div className="second">
                {DevelopmentData.slice(0, 3).map((f, index) => {
                  return (
                    <div key={index} className="box">
                      <h2>{f.title}</h2>
                      <img src={f.image} alt="" />
                    </div>
                  );
                })}
              </div>
              <div className="second">
                {DevelopmentData.slice(3, 6).map((f, index) => {
                  return (
                    <div key={index} className="box">
                      <h2>{f.title}</h2>
                      <img src={f.image} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
