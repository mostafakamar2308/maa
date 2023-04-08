import { useScroll, motion } from "framer-motion";

function ReactAnimation({ containerRef }) {
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
  });
  console.log({ scrollY, scrollYProgress });
  return <motion.div className=" top-0">ReactAnimation</motion.div>;
}

export default ReactAnimation;
