import Navbar from "@/components/navbar";

export default function Corporate() {
    return (
      <div className="min-h-screen bg-[#11071F] pb-12 xl:pb-96">
        <Navbar/>
        <div className="p-12 flex flex-col gap-16 xl:gap-28">
        <img className="absolute z-10 w-60 lg:w-auto" src="corporate.png " />
        <div className="z-50 flex flex-col items-center justify-center content ">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold mt-14 font-Montserrat"> Corporate Domain </h1>
            <h2 className="text-white text-base text-center lg:text-2xl font-semibold  w-2/3 mt-16 font-Montserrat "> For those who thrive on networking, strategy, and the business side of data science, the Corporate Domain is your playground. This domain bridges the gap between technology and industry, offering opportunities to engage with professionals, manage partnerships, and explore data-driven business strategies. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold font-Montserrat"> Content </h1>
            <h2 className="text-white text-base text-center lg:text-2xl font-semibold  w-2/3 mt-16 font-Montserrat"> The creative powerhouse behind every campaign. From crafting compelling narratives to storytelling, content is your key to unlocking impactful communication. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold font-Montserrat "> PR & Events </h1>
            <h2 className="text-white text-base text-center lg:text-2xl font-semibold  w-2/3 mt-16 font-Montserrat">Turn visions into unforgettable realities. Meticulously plan and execute events that leave a lasting impression, turning every moment into an extraordinary experience. </h2>
        </div>
        <div className="z-50 flex flex-col items-center justify-center content">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold font-Montserrat"> Sponsorship </h1>
            <h2 className="text-white text-base text-center lg:text-2xl font-semibold  w-2/3 mt-16 font-Montserrat"> Forge impactful partnerships that go beyond business deals. Elevate brands and innovations through strategic collaborations that open new doors to success. </h2>
        </div>
        </div>
      </div>
    );
  }
  