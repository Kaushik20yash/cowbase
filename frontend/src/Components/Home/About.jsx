import React from "react";
import AboutCards from "../Utilities/Cards/AboutCards";

function About() {

    const AboutDetails = [
        {
            id: 0,
            name: "Sahil Agrawal",
            position: "Team Leader",
            linkedin: "https://www.linkedin.com/in/sahilag/",
            github: "https://github.com/sahilag",
            
        },
        {
            id: 1,
            name: "Akanxi Kushwaha",
            position: "React Developer",
            linkedin: "https://www.linkedin.com/in/akanxikushwaha/",
            github: "https://github.com/akanxikushwaha",
        },
        {
            id: 2,
            name: "Yash Kaushik",
            position: "Backend Developer",
            linkedin: "https://www.linkedin.com/in/kaushik-03-79a27a187/",
            github: "https://github.com/kaushik03",
        },
        {
            id: 2,
            name: "Lavanya Varshney",
            position: "Backend Developer",
            linkedin: "https://www.linkedin.com/in/lavanaya28var/",
            github: "https://github.com/lavanaya28var",
        },
    ];
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Project Developers
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AboutDetails.map((AboutDetail) => (
                <AboutCards
                    key={AboutDetail.id}
                    name={AboutDetail.name}
                    image={AboutDetail.image}
                    position={AboutDetail.position}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default About;
