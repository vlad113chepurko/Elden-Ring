import center_logo from "..//../assets/center-logo.svg";
import { motion } from "motion/react";

export default function UnderHeader() {
  return (
    <div className="under-header-container">
      <article className="left-article">
        <motion.p
          transition={{ duration: 0.5 }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
        >
          Take Power Of{" "}
        </motion.p>
      </article>

      <i className="under-header-container-image">
        <motion.img
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={center_logo}
          alt="center-logo"
        />
      </i>

      <article className="right-article">
        <motion.p
          transition={{ duration: 0.5 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
        >
          The Elden Ring!
        </motion.p>
      </article>
    </div>
  );
}
