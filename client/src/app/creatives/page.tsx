import Navbar from "@/components/navbar";

export default function Creatives() {
    return (
      <div className="min-h-screen bg-[#11071F] pb-12 xl:pb-96">
        <Navbar/>
        <div className="p-12 flex flex-col gap-16 xl:gap-28">
        <img className="absolute z-10 w-60 lg:w-auto" src="creatives.png " />
        <div className="z-50 flex flex-col items-center justify-center content ">
            <h1 className="text-white text-3xl lg:text-5xl font-semibold mt-14 font-Montserrat"> Creatives Domain </h1>
            <h2 className="text-white text-xl lg:text-2xl font-semibold text-wrap w-2/3 mt-16 font-Montserrat "> The artistic heart of our community! it is where imagination takes center stage, focusing on designing eye-catching posters, crafting visual content, and bringing ideas to life through design. If you have a passion for creativity, visual storytelling, or just love making things look great, this is your space. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-3xl lg:text-5xl font-semibold font-Montserrat">  UI/UX </h1>
            <h2 className="text-white text-xl lg:text-2xl font-semibold text-wrap w-2/3 mt-16 font-Montserrat"> Design with purpose. In the UI/UX space, we create seamless user experiences that balance aesthetics and functionality. It’s where innovation meets empathy, and every interface tells a story through design. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-3xl lg:text-5xl font-semibold font-Montserrat "> Photography </h1>
            <h2 className="text-white text-xl lg:text-2xl font-semibold text-wrap w-2/3 mt-16 font-Montserrat">Capture the world one frame at a time. Whether it’s the beauty in everyday moments or the extraordinary through your lens, photography is where moments become timeless. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-3xl lg:text-5xl font-semibold font-Montserrat"> VFX </h1>
            <h2 className="text-white text-xl lg:text-2xl font-semibold text-wrap w-2/3 mt-16 font-Montserrat"> Craft the unseen and bring imagination to life, one visual at a time. From transforming the ordinary into the extraordinary to pushing the boundaries of creativity, VFX is where visions evolve into immersive realities. </h2>
        </div>
        </div>
      </div>
    );
  }
  