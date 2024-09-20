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
    lottieSize: { width: "450px", height: "300px" }, // New field for size
  },
  {
    title: "Why Movies",
    content: `We got all the collection you could think of—your movies, TV 
              Shows, Series—everything you can think of. Log on and enjoy 
              whatever you like. You can add in your reviews so that we 
              recommend what you like.`,
    animationData: ani2,
    reverse: true,
    lottieSize: { width: "300px", height: "300px" }, // Different size for this Lottie
  },
];

function AboutSection() {
  return (
    <div className="h-screen">
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: section.reverse ? "row-reverse" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
          className="text-white"
        >
          <div style={{ flex: 1, padding: "0 20px" }} className="">
            <h1 className="font-Bebas text-3xl text-[#FF4191] bg-[#FFF078]  w-40 text-center">
              {section.title}
            </h1>

            <p className="font-mono pt-4 ">{section.content}</p>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={section.lottieSize}>
              <Lottie animationData={section.animationData} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutSection;
