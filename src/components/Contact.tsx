const Contact = () => {
  return (
    <footer className="bg-[#001845] text-white py-8" id="contact">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Email Subscription Form */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 w-full  px-4 py-2 border-2 border-[#001845] rounded-sm bg-white text-[#001845] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-5 py-2 bg-[#001845] text-white font-semibold rounded-lg hover:bg-transparent hover:border-[#001845] hover:border-2 hover:text-[#001845] focus:outline-none focus:ring-2 focus:ring-blue-300">
                Submit
              </button>
            </div>
          </div>
        </div>


        {/* Contact, Social Links, and Quick Links Centered */}
        <div className="flex flex-col lg:flex-row justify-center items-center mb-6 space-y-6 lg:space-y-0 lg:space-x-60 ">
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h4 className="font-bold mb-2">Contact</h4>
            <p>Phone: +94 70 487 2266</p>
            <p>
              Email:{" "}
              <a
                href="mailto:kashmifernando3@gmail.com"
                className="text-white hover:underline"
              >
                kashmifernando3@gmail.com
              </a>
            </p>
            <p>Address: Panadura, Kalutara, Sri Lanka</p>
          </div>

          {/* Social Links */}
          <div className="lg:text-left">
            <h4 className="font-bold mb-2">Socials</h4>
            <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <a href="https://www.linkedin.com/in/kashmi-fernando-31976427b" className="flex items-center space-x-2 hover:underline">
                    <i className="fab fa-linkedin w-5 h-5 text-white"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <a href="https://github.com/kash2005" className="flex items-center space-x-2 hover:underline">
                    <i className="fab fa-github w-5 h-5 text-white"></i>
                    <span>GitHub</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <a href="https://web.facebook.com/kashmi%20fernando?_rdc=1&_rdr" className="flex items-center space-x-2 hover:underline">
                    <i className="fab fa-facebook w-5 h-5 text-white"></i>
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <a href="https://www.instagram.com/kash_fernando" className="flex items-center space-x-2 hover:underline">
                    <i className="fab fa-instagram w-5 h-5 text-white"></i>
                    <span>Instagram</span>
                  </a>
                </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:text-left">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
            <li><a href="#home" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-white"></i><span>Home</span></a></li>
                <li><a href="#about" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-white"></i><span>About Me</span></a></li>
                <li><a href="#services" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-white"></i><span>Services</span></a></li>
                <li><a href="#projects" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-white"></i><span>Projects</span></a></li>
                <li><a href="#contact" className="flex items-center space-x-2 hover:underline"><i className="fas fa-arrow-left w-4 h-4 text-white"></i><span>Contact Me</span></a></li>

            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white mt-8 pt-4 flex flex-col items-center justify-center space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-36 lg:space-x-28 md:space-x-12">
          <img src="./src/assets/logo-white.png" alt='' className='w-14 h-auto hover:scale-105 transition-all'></img>
          <p className="text-white">© 2024 Kashmi Fernando, All Rights Reserved!</p>
          <a href="#home">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
              <i className="fas fa-arrow-up text-[#001845]"></i>
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
