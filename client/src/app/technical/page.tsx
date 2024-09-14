import Navbar from "@/components/navbar";

export default function Technical() {
    return (
      <div className="min-h-screen bg-[#11071F] pb-12 xl:pb-96">
        <Navbar/>
        <div className="p-12 flex flex-col gap-16 xl:gap-28">
        <img className="absolute z-10 w-60 lg:w-auto" src="technical.png " />
        <div className="z-50 flex flex-col items-center justify-center content ">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold mt-14 font-Montserrat"> Technical Domain </h1>
            <h2 className="text-white text-base lg:text-2xl font-semibold  w-2/3 mt-16 font-Montserrat "> Just like mastering each level in a retro game, the Technical Domain empowers you to build, code, and create with precision. Whether you're coding your way through complex problems or developing the next big app, this is where you hone your technical prowess and play to win. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold font-Montserrat "> AI/ML </h1>
            <h2 className="text-white text-base lg:text-2xl text-center font-semibold w-2/3 mt-16 font-Montserrat"> Enter the realm of artificial intelligence, where machines learn and data becomes your game controller. Train models, analyze patterns, and unlock the future of tech. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold font-Montserrat"> Web Dev </h1>
            <h2 className="text-white text-base lg:text-2xl text-center font-semibold w-2/3 mt-16 font-Montserrat"> Build the web like crafting the perfect game map—one line of code at a time. Design responsive, interactive websites that level up user experiences and leave a lasting impact. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold font-Montserrat"> App Dev </h1>
            <h2 className="text-white text-base lg:text-2xl text-center font-semibold w-2/3 mt-16 font-Montserrat"> Take your coding skills to the next level by developing apps that feel like a cheat code for the modern world. Dive deep into the world of app creation and build with hands-on learning. </h2>
        </div>
        </div>
      </div>
    );
  }
  