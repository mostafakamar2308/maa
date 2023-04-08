import { AnimatePresence, motion } from "framer-motion";

export default function CourseContentModule({
  bg,
  active,
  setIsActive,
  moduleNumber,
  moduleName,
  title,
  description,
}) {
  return (
    <AnimatePresence>
      <motion.div
        className={` ${bg} border-r  h-screen  flex flex-col gap-4 cursor-pointer ${
          active ? "grow" : "grow-0"
        }
      ${moduleNumber === 1 && "rounded-tr-lg rounded-br-lg"}
      ${moduleNumber === 5 && "rounded-tl-lg rounded-bl-lg border-none"}
      `}
        animate={{
          flexGrow: active ? 2 : 0,
          transition: {
            duration: 0.7,
          },
        }}
        onClick={() => setIsActive(moduleNumber)}
      >
        {!active ? (
          <h3 className={` p-3 ${active && "border-r"}`}>{moduleName}</h3>
        ) : (
          <motion.div className={`p-4`}>
            <h2>{title}</h2>
            <motion.p
              className=""
              initial={{ y: 50, opacity: 0, display: "none" }}
              animate={{
                y: 0,
                opacity: 1,
                display: "block",
                transition: { delay: 0.5, duration: 1 },
              }}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {description}
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
