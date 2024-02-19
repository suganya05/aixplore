import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import DesignImg from "../../assets/images/design-icon-box.png";
import DevelopmentImg from "../../assets/images/development-icon-box.png";
import "./StickyScroll.scss";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
}) => {
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

  const backgroundColors = ["#FFE6E6", "#FFEAC9"];
  const images = [DesignImg, DevelopmentImg];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="stickyScroll-wrapper"
      ref={ref}
    >
      <div className="stickyScroll-container">
        <div className="stickyScroll-content">
          {content.map((item, index) => (
            <div key={item.title + index} className="content">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="title"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="description"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={{
          backgroundImage: images[activeCard % images.length],
        }}
        className="image"
      >
        <img src={images[activeCard % images.length]} alt="" />
      </motion.div>
    </motion.div>
  );
};
