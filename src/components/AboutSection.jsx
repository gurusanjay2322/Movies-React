import React from "react";
import ani1 from "../assets/lottie/ani1.json";
import ani2 from "../assets/lottie/ani2.json";
import Lottie from "lottie-react";

const sections = [
  {
    title: "About Movies",
    content: `Your One Stop Destination For Movies and TV Shows. Check out all 
              the collection and reviews of the movies and tv shows you like. 
              Have doubt on a movie? We got you covered.`,
    animationData: ani1,
    reverse: false,
    lottieSize: { width: "450px", height: "300px" },
  },
  {
    title: "Why Movies",
    content: `We got all the collection you could think of—your movies, TV 
              Shows, Series—everything you can think of. Log on and enjoy 
              whatever you like. You can add in your reviews so that we 
              recommend what you like.`,
    animationData: ani2,
    reverse: true,
    lottieSize: { width: "300px", height: "300px" },
  },
];

function AboutSection() {
  return (
    <div className="h-screen md:w-[80%] mx-auto">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`w-full flex flex-col ${
            index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center text-white`}
        >
          <div className="md:w-1/2">
            <h1 className="font-Bebas text-3xl text-[#FF4191] bg-[#FFF078] text-center w-fit p-2">
              {section.title}
            </h1>
            <p className="font-mono pt-4 ">{section.content}</p>
          </div>
          <div id="lottie-div" className="md:w-1/2">
            <Lottie className="h-64" animationData={section.animationData} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutSection;
