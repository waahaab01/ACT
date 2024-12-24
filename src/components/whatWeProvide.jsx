export default function WhatWeProvide() {
  return (
    <section className="relative bg-[#0F0E17] py-16 px-4 md:px-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-[url('../assets/images/services-bg.png')]  transform -translate-y-2"
        style={{
          backgroundImage: "url('../assets/images/services-bg.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h3 className="text-blue-400 text-sm font-medium uppercase">
          What We Provide
        </h3>
        <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">
          Unlock Your Potential with <br /> Our Services
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 px-4">
        {/* Card 1 */}
        <div className="bg-white p-8 w-full max-w-[314px] h-[414px] flex flex-col justify-between">
          <h3 className="text-2xl font-bold mb-4">
            Process Improvement & Strategic Alignment (PI & SA)
          </h3>
          <ul className="text-gray-700 text-base space-y-2">
            <li>Optimize workflows to dominate your market.</li>
            <li>Align business processes with long-term income goals.</li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-all">
            Explore Our Approach
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 w-full max-w-[314px] h-[414px] flex flex-col justify-between">
          <h3 className="text-2xl font-bold mb-4">
            Information Technology Services
          </h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>Wireless and mobile solutions.</li>
            <li>Web development.</li>
            <li>Financial management systems.</li>
            <li>IT project management.</li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-all">
            Learn More
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 w-full max-w-[314px] h-[414px] flex flex-col justify-between">
          <h3 className="text-2xl font-bold mb-4">
            Program & Project Management (PM)
          </h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>Establishing PMOs for better governance.</li>
            <li>PM and ITIL-compliant process development.</li>
            <li>Facilitation of strategic decision-making sessions.</li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-all">
            View Our Expertise
          </button>
        </div>
      </div>
    </section>
  );
}
