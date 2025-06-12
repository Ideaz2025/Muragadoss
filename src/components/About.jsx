import FsLightbox from 'fslightbox-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './CSS/About.css';
import certificateImages from '../assets/Routes/AllCertificate';
import profileImg from '../assets/img/muragadoss.gif'; // Add this import
import 'animate.css';

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={certificateImages}
        slide={lightboxController.slide}
      />
      
      <Container fluid className="about-wrapper">
        <div className="row align-items-center">
          {/* Left: Profile Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0 mr-5">
            <img
              src={profileImg}
              alt="Dr. R. Murugadoss Profile"
              loading="lazy"
              className="about-profile-img shadow animate__animated animate__fadeInLeft img-fluid"
              style={{
                width: "440px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid #1c658c",
                marginBottom: "1.5rem"
              }}
            />
          </div>
          {/* Right: About Text */}
          <div className="col-md-8">
            <div className="about-right animate__animated animate__fadeInRight py-3" style={{
              background: "#f5f7fa",
              borderRadius: "12px",
              boxShadow: "0 1px 4px rgba(28,101,140,0.06)",
              padding: "2rem 1.5rem",
            }}>
              <h1 style={{
                color: "#1c658c",
                fontSize: "1.7rem",
                fontWeight: 700,
                marginBottom: "1.2rem"
              }}>About Dr. R. Murugadoss</h1>
              <p style={{ color: "#00324e", fontSize: "1.08rem", marginBottom: "1rem" }}>
                <strong>Dr. R. Murugadoss</strong> is an accomplished academician and administrator with over <strong>20 years of experience</strong> in teaching, research, and industry. He currently serves as <strong>Professor & Head of the Department of Artificial Intelligence and Data Science</strong> at <strong>V.S.B. College of Engineering Technical Campus</strong>, Kinathukadavu, Coimbatore.
              </p>
              <p style={{ color: "#00324e", fontSize: "1.08rem", marginBottom: "1rem" }}>
                He holds a <strong>Ph.D. in Computer Science and Engineering</strong> from Sathyabama University, Chennai (2016), and has previously completed his <strong>M.E. (Computer Science & Engineering)</strong> from Anna University, Chennai, <strong>M.C.A</strong> from Madurai Kamaraj University, and <strong>B.Sc. in Computer Science</strong>.
              </p>
              <p style={{ color: "#00324e", fontSize: "1.08rem", marginBottom: "1rem" }}>
                Dr. Murugadoss has held various academic roles at reputed institutions such as St. Ann’s College of Engineering and Technology, Chirala Engineering College, Thiruvalluvar College of Engineering & Technology, and more. He began his career as a software programmer at SAMTECH SYSTEMS, Chennai.
              </p>
              <div style={{ color: "#00", fontSize: "1.08rem", marginBottom: "1rem" }}>
                <span>Known for his commitment to educational innovation and quality improvement, he has served as:</span>
                <ul style={{ margin: "0.5rem 0 0 1.2rem", color: "#398ab9" ,listStyle:"none"}}>
                  <li>🚀🧠 AICTE Hackathon Coordinator</li>
                  <li>📋🏛️ Member Coordinator for UGC, NAAC, and NBA activities</li>
                  <li>📊🎯 IQAC Member at institutional level</li>
                </ul>
              </div>
              <p style={{ color: "#00324e", fontSize: "1.08rem" }}>
                His core strengths lie in <strong>curriculum development</strong>, <strong>research mentorship</strong>, <strong>interpersonal communication</strong>, and <strong>conceptual clarity</strong> in computer science education. Dr. Murugadoss is passionate about guiding young minds, contributing to academic excellence, and building future-ready institutions.
              </p>
            </div>
          </div>
        </div>
        {/* Certificates section remains below */}
        
      </Container>

    </>
  );
}

export default About;
