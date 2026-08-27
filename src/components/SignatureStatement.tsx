import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './SignatureStatement.css';

const SignatureStatement = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section className="statement" ref={containerRef}>
      <motion.div 
        className="statement-content"
        style={{ scale }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <h2 className="statement-text">
          Luxury is not about having more.<br />
          It is about <span className="statement-highlight">choosing better.</span>
        </h2>
      </motion.div>
    </section>
  );
};

export default SignatureStatement;
