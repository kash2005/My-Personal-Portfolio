
const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-6">
        {/* Left Side: Image */}
      <div className="mt-10 flex items-center justify-center">
        <img 
          src="./src/assets/about.jpg" 
          alt="About" 
          className="w-full h-auto max-w-xs lg:max-w-sm"
        />
      </div>
      
      {/* Right Side: Text and Social Links */}
      <div className="flex flex-col items-center lg:items-start lg:justify-start">
        <h1 className="pb-1 text-[rgba(0,0,0,0.6)] lg:mt-16">Let me introduce myself</h1>
        <h1 className="pb-12 text-3xl font-semibold text-[#001845]">About me</h1>
        <p className="pb-7 max-w-lg text-gray-700 px-6 sm:px-6 lg:px-0">
          "Creative front-end developer and UI/UX designer passionate about crafting visually stunning and user-friendly digital experiences. I specialize in turning ideas into intuitive interfaces that deliver exceptional user experiences."
        </p>

        <ul className="pb-7 flex space-x-4">
        <li className="icon-content group">
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 group-hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#001845] group-hover:text-white" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <div className="tooltip text-sm mt-1 hidden group-hover:block text-center">
            LinkedIn
          </div>
        </li>
        <li className="icon-content group">
          <a href="https://www.github.com/" aria-label="GitHub" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 group-hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#001845] group-hover:text-white" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </a>
        <div className="tooltip text-sm mt-1 hidden group-hover:block text-center">
          GitHub
        </div>
      </li>
      <li className="group">
        <a href="https://www.facebook.com/" aria-label="Facebook" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 group-hover:bg-blue-600">
          <svg version="1.1" viewBox="0 0 100 100" className="w-7 h-7 text-[#001845] group-hover:text-white" fill="currentColor">
            <path d="M50,4C24.7,4,4,24.7,4,50c0,20.3,13.3,37.5,31.5,43.4v-30.7h-9.4v-12.1h9.4v-9c0-9.3,5.5-14.4,13.7-14.4c3.9,0,7.3,0.3,8.3,0.4v9.6h-5.7c-4.5,0-5.4,2.1-5.4,5.3v7h10.8l-1.4,12.1h-9.4v30.7C72.7,87.5,86,70.3,86,50C86,24.7,65.3,4,50,4z"></path>
          </svg>
        </a>
        <div className="tooltip text-sm mt-1 hidden group-hover:block text-center">
          Facebook
        </div>
      </li>
      <li className="icon-content group">
        <a href="https://www.instagram.com/" aria-label="Instagram" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 group-hover:bg-gradient-to-tr group-hover:from-purple-400 group-hover:to-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#001845] group-hover:text-white" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.719-.89.923-1.416.198-.51.333-1.09.372-1.942.038-.853.048-1.125.048-3.298s-.01-2.444-.048-3.298c-.04-.851-.174-1.434-.372-1.942a3.9 3.9 0 0 0-.923-1.417 3.905 3.905 0 0 0-1.416-.923c-.509-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 7.999 0zm0 1.438c2.137 0 2.39.008 3.233.046.78.036 1.203.166 1.486.276.374.145.64.319.92.599.28.28.454.546.6.92.109.283.24.706.276 1.486.038.843.046 1.096.046 3.233s-.008 2.39-.046 3.233c-.036.78-.166 1.203-.276 1.486a2.462 2.462 0 0 1-.6.92 2.47 2.47 0 0 1-.92.599c-.283.109-.706.24-1.486.276-.843.038-1.096.046-3.233.046s-2.39-.008-3.233-.046c-.78-.036-1.203-.166-1.486-.276a2.47 2.47 0 0 1-.92-.599 2.465 2.465 0 0 1-.599-.92c-.109-.283-.24-.706-.276-1.486-.038-.843-.046-1.096-.046-3.233s.008-2.39.046-3.233c.036-.78.166-1.203.276-1.486.145-.374.319-.64.599-.92.28-.28.546-.454.92-.6.283-.109.706-.24 1.486-.276.843-.038 1.096-.046 3.233-.046zM8 3.889A4.111 4.111 0 1 0 8 12.11 4.111 4.111 0 0 0 8 3.89zm0 1.438a2.673 2.673 0 1 1 0 5.346 2.673 2.673 0 0 1 0-5.346zm5.223-.974a.96.96 0 1 0 0 1.922.96.96 0 0 0 0-1.922z" />
          </svg>
        </a>
        <div className="tooltip text-sm mt-1 hidden group-hover:block text-center">
          Instagram
        </div>
      </li>
    </ul>
    <a
      href="./src/assets/resume.pdf"
      download="Kashmi-Venushika-Resume.pdf"
      className="rounded-md border-2 border-[#001845] bg-[#001845] px-7 py-3 font-semibold text-white transition-all hover:bg-white hover:text-[#001845]"
    >
      Download CV
    </a>
  </div>
</div>

  )
}

export default About