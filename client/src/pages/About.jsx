import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      
      <Navbar />

      <div className="flex-1">

        {/* Hero Section */}
        <div className="text-center py-20 px-6">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-green-500">CareerSaathi</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            CareerSaathi is an AI-powered smart interview platform designed
            to help students and professionals practice interviews with
            adaptive AI, smart follow-ups, and real-time performance feedback.
          </p>
        </div>

        {/* Mission Section */}
        <div className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            Our mission is to bridge the gap between academic learning and
            industry expectations by providing intelligent, affordable and
            accessible interview preparation for everyone.
          </p>
        </div>

        {/* Team Section */}
        <div className="py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Meet the Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold">Arpit Ranjan</h3>
              <p className="text-green-500 font-medium mt-2">
                Founder & Lead Developer
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                AI & Full Stack Developer passionate about building intelligent career tools.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold">Team Member 2</h3>
              <p className="text-green-500 font-medium mt-2">
                Frontend Developer
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                Responsible for UI/UX design and interactive user experience.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold">Team Member 3</h3>
              <p className="text-green-500 font-medium mt-2">
                Backend Developer
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                Handles server architecture, APIs and database management.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold">Team Member 4</h3>
              <p className="text-green-500 font-medium mt-2">
                AI Engineer
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                Works on AI logic, resume analysis and smart interview generation.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold">Team Member 5</h3>
              <p className="text-green-500 font-medium mt-2">
                Product Designer
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                Focuses on usability, branding and overall product vision.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold">Team Member 6</h3>
              <p className="text-green-500 font-medium mt-2">
                Marketing & Strategy
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                Handles growth strategy, outreach and partnerships.
              </p>
            </div>

          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default About;