import React from "react";
import TextGenerateEffectDemo from "./generate";
const testimonials = [
  {
    founderName: "Nilanjan Maiti",
    companyName: "Culture OS",
    speech:
      "SHARE was responsible for a range of tasks, including data processing, industry research across 12 industries, and drafting the format for comprehensive industry reports on organizational culture within each sector. These report formats showcased the ability to synthesize different data sets and collate them to form an industry insight. SHARE actively participated in the marketing campaigns executed for the company's outreach. A keen understanding of marketing strategies, creativity in campaign design, and the ability to execute plans efficiently were displayed.",
    logo: "/companycolorlogos/cultureoscolor.png",
  },
  {
    founderName: "Ganesh Shankar",
    companyName: "Fluxgen Technologies",
    speech:
      "I am writing to highly recommend SHARE IIT Kharagpur for their outstanding work and invaluable contribution to FluxGen. Over six weeks, SHARE conducted extensive research and analysis, providing strategic insights that have significantly benefitted our organisation.",
    logo: "/companycolorlogos/fluxgencolor.png",
  },
  {
    founderName: "Raiyana Patoary",
    companyName: "Bintix Waste Research",
    speech:
      "The team worked diligently to arrive at an answer that will likely help Bintix when it thinks about international expansion. I would work with them again for any similar projects and recommend them for any fellow entrepreneur who may have such consulting based projects.",
    logo: "/companycolorlogos/bintixcolor.png",
  },
];

const Clients = () => {
  const defaultLogo = "https://via.placeholder.com/150";

  return (
    <div>
      <div className="w-screen px-8 flex justify-center border border-b-0 border-r-0 border-l-0">
        <TextGenerateEffectDemo></TextGenerateEffectDemo>
      </div>
      <div className=" w-screen px-8 flex flex-wrap justify-center sm:flex-col items-center  lg:flex-row">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" max-w-md py-4 px-8 bg-zinc-900 shadow-lg  my-20 mx-4 h-fit [background:linear-gradient(45deg,#1e1e1f,theme(colors.zinc.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.900/.48)_80%,_theme(colors.zinc.800)_86%,_theme(colors.zinc.700)_90%,_theme(colors.zinc.700)_94%,_theme(colors.zinc.600/.48))_border-box] rounded-2xl border border-4 border-transparent animate-border"
          >
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-4 border-emerald-600"
                src={testimonial.logo || defaultLogo}
                alt={`Client Logo - ${testimonial.companyName}`}
              />
            </div>
            <div>
              <h2 className="text-gray-300 text-3xl font-semibold">
                {testimonial.companyName}
              </h2>
              <p className="mt-2 text-zinc-400">{testimonial.speech}</p>
            </div>
            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-xl font-medium font-mono text-emerald-500"
              >
                {testimonial.founderName}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
