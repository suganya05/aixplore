import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import "./ThingsWeDone.scss";

export const HeroParallax = ({
  products,
}: {
  products: {
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  return (
    <div ref={ref} className="heroParallax-wrapper mx">
      <div className="heading">
        <h2>Things We Done</h2>
      </div>
      <motion.div>
        <motion.div className="heroParallax-first-row">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} />
          ))}
        </motion.div>
        <motion.div className="heroParallax-second-row">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="productCard-wrapper"
    >
      <div className="block">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="images"
        />
      </div>
    </motion.div>
  );
};
