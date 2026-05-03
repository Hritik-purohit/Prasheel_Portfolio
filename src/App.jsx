import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Layout from "./components/Layout";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AllProjects from "./components/AllProjects";
import ProjectDetails from "./components/ProjectDetails";

import { setupSmoothScroll } from "./utils/scrollAnimations";

function App() {
  const [loading, setLoading] = useState(true);
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowSite(true);
      }, 100);
    }
  }, [loading]);

  useEffect(() => {
    setupSmoothScroll();
  }, []);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {showSite && (
        <BrowserRouter>

          <Routes>

            {/* 🔥 ALL ROUTES UNDER LAYOUT */}
            <Route element={<Layout />}>

              {/* HOME */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Services />
                    <Projects />
                    <Contact />
                    <Footer />
                  </>
                }
              />

              {/* ALL PROJECTS */}
              <Route path="/projects" element={<AllProjects />} />

              {/* PROJECT DETAILS */}
              <Route path="/project/:title" element={<ProjectDetails />} />

            </Route>

          </Routes>

        </BrowserRouter>
      )}
    </>
  );
}

export default App;