import React from 'react';

const Projects = () => {
    const projects = [
        {
          title: 'Juice Bar Management System',
          description: '"Developed using JavaFX and MVC architecture."',
          imgSrc: './src/assets/juice-bar.png',
          link: 'https://github.com/kash2005/Juice-Bar-Management-System'
        },
        {
          title: 'Pizza Hut Mobile App',
          description: '"Developed using React Native."',
          imgSrc: './src/assets/pizza-hut.jpg',
          link: 'https://github.com/kash2005/PizzaHut-mobile-app'
        },
        {
          title: 'Hello Shoe Shop Management System',
          description: '"Built with Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend."',
          imgSrc: './src/assets/shoe.png',
          link: 'https://github.com/kash2005/Hello-Shoe-Shop-FrontEnd'
        },
        {
          title: 'Old Portfolio',
          description: 'Developed using HTML, CSS, and JavaScript.',
          imgSrc: './src/assets/portfolio-old.png',
          link: 'https://github.com/kash2005/MyPortfolio/tree/styles'
        },
        {
          title: 'Chat Application',
          description: '"The chat application, built with Java socket programming, enables real-time messaging over a network."',
          imgSrc: 'https://www.socialintents.com/blog/wp-content/uploads/2021/09/canned-responses-for-live-chat.jpg',
          link: 'https://github.com/kash2005/chat_Application'
        },
        {
          title: 'Juice Bar Management System',
          description: '"Developed using JavaFX and layered architecture."',
          imgSrc: './src/assets/juice-bar2.png',
          link: 'https://github.com/kash2005/Juice-Bar-Management-System2'
        },
        {
          title: 'D24 Hostel Management System',
          description: '"Built with JavaFX, layered architecture and Hibernate."',
          imgSrc: './src/assets/hostel.png',
          link: 'https://github.com/kash2005/D24_Hostel_Management_System'
        },
        {
          title: 'New Portfolio',
          description: 'Developed using React Js, Vite, Type Script, Tailwind CSS.',
          imgSrc: './src/assets/portfolio-new.png',
          link: 'https://github.com/kash2005/My-Personal-Portfolio'
        },
      ];
  return (
    <div className="py-16 px-8 md:px-32 bg-white" id="projects">
      <div className="text-center mb-10">
        <p className="text-[rgba(0,0,0,0.6)] mt-2">Things I have built so far</p>
        <h2 className="text-3xl font-semibold text-[#001845]">Latest Projects</h2>
      </div>
      <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden bg-gray-100 border-2 border-gray-300 shadow-md group"
          >
            <div className="relative w-full h-72">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#001845] via-[#001845]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-sm text-white mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="bg-[#001845] text-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300 outline outline-2 outline-gray-800"
                >
                  <i className="bx bx-link-external text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
