import { useEffect,useState } from "react";

const Hero = () => {
        const [currentText, setCurrentText] = useState(0);
        const texts = [
            'First Text',
            'Second Text',
            'Third Text',
            'Fourth Text',
        ];
    
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentText((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
            }, 3000); // Change text every 3 seconds
    
            return () => clearInterval(interval);
        }, []);    

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:px-32">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-1 text-2xl text-[#001845]  lg:mt-16 lg:text-xl">Hi, I’m</h1>
                    <h1 className="pb-1 text-5xl text-[#001845] font-semibold lg:text-4xl">Kashmi Fernando</h1>
                    <h1 className="pb-1 text-xl text-[#001845] font-thin lg:text-base">I'm 19 years old.</h1>
                    <h1 className="pb-1 text-xl text-[#001845] font-thin lg:text-base">I'm a design-focused and passionate.</h1>
                    <div className="overflow-hidden w-full flex items-center justify-center">
                        <div className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentText * 100}%)`, width: `${texts.length * 100}%` }}>
                            {texts.map((text, index) => (
                                <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="">
                        <i className="bx bx-github text-5xl cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero