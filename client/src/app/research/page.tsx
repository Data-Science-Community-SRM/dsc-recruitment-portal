import Navbar from "@/components/navbar";

export default function Research() {
  return (
    <div className="min-h-screen bg-[#11071F] pb-12 xl:pb-96">
      <Navbar />
      <div className=" lg:p-12 flex flex-col gap-16 xl:gap-28">
        <img className="absolute z-10 w-60 lg:w-auto" src="research.png " />
        <div className="z-50 flex flex-col items-center justify-center content ">
          <h1 className="text-white font-Montserrat text-2xl lg:text-5xl font-semibold mt-14">
            {" "}
            Research Domain{" "}
          </h1>
          <h2 className="text-white text-base text-center font-Montserrat lg:text-2xl font-semibold  w-2/3 mt-16 ">
            "Research is seeing what everybody else has seen and thinking what
            nobody else has thought." This powerful statement captures the
            essence of innovation and discovery, particularly in the field of
            data science and artificial intelligence. If you are someone who
            thrives on curiosity, analytical thinking, and the relentless
            pursuit of knowledge, then the Research Domain is your ideal
            playground.<br/><br/> Here, you have the opportunity to collaborate on
            groundbreaking projects, experiment with new methodologies, and push
            the boundaries of what is possible.<br/><br/> Whether it’s diving deep into
            complex datasets, uncovering hidden patterns, or developing new
            algorithms, your contributions can have a significant impact on the
            ever-evolving fields of AI and machine learning. Moreover, the
            Research Domain is not just about exploring the unknown; it’s also
            about sharing your findings with the world.<br/><br/> By publishing papers and
            presenting your work, you can contribute to the global body of
            knowledge and inspire others to think differently. Join us in this
            exciting journey to uncover new insights, challenge existing
            paradigms, and shape the future of technology.{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
