"use client";

import { Code2, Gauge, TrendingUp } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function HeroPanelStack() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scrollOffset = useTransform(scrollYProgress, [0, 0.35], [0, 34]);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      aria-label="Fully managed website services"
      className="hero-stack"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      style={{ y: shouldReduceMotion ? 0 : scrollOffset }}
      transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* The two rear panes make the illustration read as a layered website
          system while the front pane carries the legible interface details. */}
      <div className="hero-stack__pane hero-stack__pane--back" aria-hidden="true">
        <div className="hero-stack__back-lines">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-stack__back-grid" />
      </div>

      <div
        className="hero-stack__pane hero-stack__pane--middle"
        aria-hidden="true"
      >
        <div className="hero-stack__back-lines">
          <span />
          <span />
        </div>
        <div className="hero-stack__signal">
          <span />
        </div>
      </div>

      <div className="hero-stack__pane hero-stack__pane--front">
        <div className="hero-stack__toolbar">
          <span className="hero-stack__mark">NC</span>
          <div className="hero-stack__toolbar-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-stack__menu" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="hero-stack__interface">
          <div className="hero-stack__media" aria-hidden="true">
            <span />
          </div>
          <div className="hero-stack__copy-lines" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
        </div>

        <div className="hero-stack__metrics" aria-label="Website capabilities">
          <div>
            <Code2 aria-hidden="true" size={22} strokeWidth={1.5} />
            <span>Build</span>
          </div>
          <div>
            <Gauge aria-hidden="true" size={22} strokeWidth={1.5} />
            <span>Speed</span>
          </div>
          <div>
            <TrendingUp aria-hidden="true" size={22} strokeWidth={1.5} />
            <span>Grow</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
