import { motion } from "motion/react";
import "./App.css";

export default function App() {
  return (
    <>
      {/* Background Canvas */}
      <div className="bg-canvas">
        <div className="bg-grid"></div>
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
      </div>

      <motion.div
        className="viewport-container"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header Section */}
        <header className="header-wrapper">
          <motion.span
            className="status-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Website Status
          </motion.span>
          <motion.h1
            className="main-title"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Under Construction
          </motion.h1>
        </header>

        {/* Core Main Illustration & Copy Section */}
        <div className="page-core">
          {/* Construction Illustration (Subtle Orange/Yellow Highlights, Worker Silhouette, Cone) */}
          <motion.div
            className="illustration-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg
              className="premium-svg"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Specular Highlighted Cone Gradients */}
                <linearGradient id="glowOrange" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7a2500" />
                  <stop offset="25%" stopColor="#cc3e00" />
                  <stop offset="45%" stopColor="#ff7b33" />
                  <stop offset="50%" stopColor="#ffffff" /> {/* High specular metallic brightness */}
                  <stop offset="55%" stopColor="#ff8a4f" />
                  <stop offset="80%" stopColor="#b33600" />
                  <stop offset="100%" stopColor="#5c1c00" />
                </linearGradient>
                <linearGradient id="reflectiveSilver" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#666666" />
                  <stop offset="30%" stopColor="#cccccc" />
                  <stop offset="48%" stopColor="#ffffff" />
                  <stop offset="52%" stopColor="#ffffff" />
                  <stop offset="70%" stopColor="#bcbcbc" />
                  <stop offset="100%" stopColor="#555555" />
                </linearGradient>
                <linearGradient id="goldWarning" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffb020" />
                  <stop offset="100%" stopColor="#c77b00" />
                </linearGradient>
                
                {/* Soft Specular Drop Shadow */}
                <radialGradient id="vectorConeShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(0, 0, 0, 0.85)" />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                </radialGradient>
              </defs>

              {/* Backdrop grid markings */}
              <circle className="rotator-cw" cx="200" cy="200" r="145" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.75" strokeDasharray="4 14" />
              <circle className="rotator-ccw" cx="200" cy="200" r="115" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.75" strokeDasharray="8 20" />
              <line className="glow-ring" x1="200" y1="50" x2="200" y2="350" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8" />

              {/* 1. Under Construction Triangular/Diamond Hazard Sign Base */}
              <g transform="translate(200, 150)">
                {/* Warning Sign Outer Diamond */}
                <rect x="-60" y="-60" width="120" height="120" rx="4" transform="rotate(45)" fill="rgba(20, 20, 21, 0.9)" stroke="url(#goldWarning)" strokeWidth="1.5" />
                
                {/* Warning Sign Patterned Border */}
                <rect x="-53" y="-53" width="106" height="106" rx="2" transform="rotate(45)" stroke="rgba(255,176,32,0.3)" strokeWidth="1" />
                
                {/* Sign Chevron Stripes (Subtle golden warning decor) */}
                <path d="M -30 -30 L -25 -30 L -30 -25 Z" fill="url(#goldWarning)" opacity="0.6" />
                <path d="M 30 30 L 25 30 L 30 25 Z" fill="url(#goldWarning)" opacity="0.6" />
                
                {/* Minimalist Graphic Icon inside sign: Construction Hammer/Wrench Cross */}
                <path d="M -15 -5 L 15 5 M -15 5 L 15 -5" stroke="url(#goldWarning)" strokeWidth="1" opacity="0.25" />
              </g>

              {/* 2. Professional Builder/Worker Silhouette (Standing proud in central position) */}
              <g transform="translate(140, 110)">
                {/* Minimalist Tech Vector Silhouette of Builder wearing hard hat and holding architectural tools */}
                {/* Hard Hat */}
                <path d="M 12 15 C 12 7, 28 7, 28 15 Z" fill="#ffffff" opacity="0.9" />
                <path d="M 8 15 H 32" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Builder silhouette body structure */}
                <path d="M 10 32 C 10 24, 30 24, 30 32 V 82 H 24 V 110 H 16 V 82 H 10 Z" fill="#ffffff" opacity="0.95" />
                
                {/* Holding blueprint architectural layout roll outline */}
                <path d="M 6 42 Q 13 45 32 38" stroke="url(#goldWarning)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <circle cx="6" cy="42" r="1.5" fill="#ffffff" />
                <circle cx="32" cy="38" r="1.5" fill="url(#goldWarning)" />
              </g>

              {/* 3. Highlighted Specular 3D Construction Cones */}
              
              {/* Back Left Cone (Small Scale) */}
              <g transform="translate(125, 275) scale(0.65)">
                {/* Shadow */}
                <ellipse cx="0" cy="5" rx="34" ry="10" fill="url(#vectorConeShadow)" />
                {/* Base Plate Edge */}
                <path d="M -26 -4 A 26 7 0 0 0 26 -4 L 26 0 A 26 7 0 0 1 -26 0 Z" fill="rgba(80, 24, 0, 0.9)" />
                {/* Base Plate Face */}
                <ellipse cx="0" cy="-4" rx="26" ry="7" fill="url(#glowOrange)" />
                {/* Cone Stem */}
                <path d="M -19 -4 L -4 -68 A 4 1.5 0 0 1 4 -68 L 19 -4 A 19 4.5 0 0 1 -19 -4 Z" fill="url(#glowOrange)" />
                {/* Silver Tape Band High Reflective */}
                <path d="M -13 -28 A 13 2.8 0 0 1 13 -28 L 16.3 -15 A 16.3 3.3 0 0 1 -16.3 -15 Z" fill="url(#reflectiveSilver)" />
                <path d="M -7.7 -51 A 7.7 1.8 0 0 1 7.7 -51 L 10.3 -40 A 10.3 2.3 0 0 1 -10.3 -40 Z" fill="url(#reflectiveSilver)" />
                <ellipse cx="0" cy="-68" rx="4" ry="1.5" fill="#ffffff" opacity="0.95" />
              </g>

              {/* Forefront Right Cone (Highly Detailed, High contrast specular flare) */}
              <g transform="translate(255, 245) scale(0.92)">
                {/* Shadow */}
                <ellipse cx="0" cy="5" rx="34" ry="10" fill="url(#vectorConeShadow)" />
                {/* Base Plate Edge */}
                <path d="M -26 -4 A 26 7 0 0 0 26 -4 L 26 0 A 26 7 0 0 1 -26 0 Z" fill="rgba(80, 24, 0, 1)" />
                {/* Base Plate Face */}
                <ellipse cx="0" cy="-4" rx="26" ry="7" fill="url(#glowOrange)" />
                {/* Cone Stem */}
                <path d="M -19 -4 L -4 -68 A 4 1.5 0 0 1 4 -68 L 19 -4 A 19 4.5 0 0 1 -19 -4 Z" fill="url(#glowOrange)" />
                {/* Silver Tape 1 */}
                <path d="M -13 -28 A 13 2.8 0 0 1 13 -28 L 16.3 -15 A 16.3 3.3 0 0 1 -16.3 -15 Z" fill="url(#reflectiveSilver)" />
                {/* Silver Tape 2 */}
                <path d="M -7.7 -51 A 7.7 1.8 0 0 1 7.7 -51 L 10.3 -40 A 10.3 2.3 0 0 1 -10.3 -40 Z" fill="url(#reflectiveSilver)" />
                {/* Specular bright overlay highlight for liquid metallic glass touch */}
                <path d="M -0.5 -68 L -0.2 -4 L 1.5 -4 L 1.2 -68 Z" fill="#ffffff" opacity="0.45" />
                <ellipse cx="0" cy="-68" rx="4" ry="1.5" fill="#ffffff" opacity="0.95" />
              </g>

              {/* Core technical alignment overlays */}
              <circle cx="200" cy="200" r="3" fill="#ffffff" />
              <g className="pulse-particles">
                <circle cx="215" cy="180" r="2.2" fill="url(#goldWarning)" />
                <circle cx="185" cy="220" r="2.2" fill="url(#goldWarning)" />
              </g>
            </svg>
          </motion.div>

          {/* Texts Section (Elegant Modern Typography) */}
          <div className="text-section">
            <motion.h2
              className="brand-header"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              MoonShine Interactive
            </motion.h2>

            <motion.p
              className="brand-paragraph"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Our website is currently under construction.
            </motion.p>

            <motion.p
              className="brand-paragraph"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              We're working on something exciting and will be launching soon.
            </motion.p>

            <motion.p
              className="brand-paragraph"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              style={{ opacity: 0.55 }}
            >
              For business inquiries, partnerships, publishing opportunities, or collaborations, feel free to reach out.
            </motion.p>

            {/* Premium Call to Action Area label */}
            <motion.div
              className="partner-invitation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.0, duration: 1.2 }}
            >
              Contact Resources
            </motion.div>

            {/* Apple iOS 26 Liquid Glass buttons */}
            <motion.div
              className="actions-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="https://www.linkedin.com/company/moonshine-interactive"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-btn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@moonshineinteractive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-btn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Small Premium Footer */}
        <footer className="footer-container">
          <motion.p
            className="footer-copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.28 }}
            transition={{ delay: 1.3, duration: 1.2 }}
          >
            © MoonShine Interactive
          </motion.p>
        </footer>
      </motion.div>
    </>
  );
}
