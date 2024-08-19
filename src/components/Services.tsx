const Services = () => {
  return (
    <div className="py-20 px-8 md:px-32 bg-white" id="services">
      <div className="text-center mb-10">
        <p className="text-[rgba(0,0,0,0.6)] mt-2">what i will do for you</p>
        <h2 className="text-3xl font-semibold text-[#001845]">Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* UI-UX Design Card */}
        <div className="p-6 bg-white border-2 border-[#001845] rounded-lg shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-center text-[#001845] mb-4">UI-UX Design</h3>
          <p className="text-[rgba(0,0,0,0.6)] text-center mb-6">
            Providing UI/UX design services that transform your ideas into intuitive and engaging digital experiences. I focus on user-centered design, creating interfaces that are both visually appealing and highly functional.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">Figma</button>
            {/* <button className="px-10 py-1 bg-[#001845] text-white font-semibold rounded-lg hover:bg-transparent hover:border-[#001845] hover:border-2 hover:text-[#001845] focus:outline-none focus:ring-2 focus:ring-blue-300">View My Figma Designs</button> */}
          </div>
        </div>

        {/* Front End Card */}
        <div className="p-6 bg-white border-2 border-[#001845] rounded-lg shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-center text-[#001845] mb-4">Front End</h3>
          <p className="text-gray-700 text-center mb-6">
            Delivering front-end development services that bring your designs to life with clean, responsive, and high-performing code. I create interactive, user-friendly websites that work seamlessly across all devices.
          </p>
          <div className="flex flex-wrap justify-center gap-2 px-2">
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">HTML</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">CSS</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">JS</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">TypeScript</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">React JS</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">Vite</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">Tailwind CSS</button>
          </div>
        </div>

        {/* Other Card */}
        <div className="p-6 bg-white border-2 border-[#001845] rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold text-center text-[#001845] mb-4">Other</h3>
          <p className="text-gray-700 text-center mb-6">
            Skilled in mobile development, with a solid foundation in backend technologies, and familiar with key tools like GitHub and various IDEs. I continuously expand my expertise to deliver well-rounded solutions across the full stack.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">Java</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]2">MySQL</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">Git</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">React Native</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">Spring Boot</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">Spring</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">IntelliJ IDEA</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">VS Code</button>
            <button className="px-4 py-1 rounded-lg bg-transparent border-[rgba(0, 24, 69, 0.6)] border-2 text-[#606060]">Hibernate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
