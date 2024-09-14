
export default function Navbar() {
  return (
    <div className="min-h-20 bg-[#1A0B2E] px-2 lg:px-10 py-2 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2 logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 74 80"
          fill="none"
        >
          <path
            d="M54.9297 48.093L36.8147 37.3573L18.3923 48.0674L37.1222 58.9825L54.9297 48.093Z"
            fill="#8855C4"
          />
          <path
            d="M54.9296 48.093L36.7891 37.3829V16.0652L54.9296 26.3017V48.093Z"
            fill="#2B0D4F"
          />
          <path
            d="M36.7891 37.3829V16.0652L18.3923 26.0751V48.0674L36.7891 37.3829Z"
            fill="#4B207A"
          />
          <path
            d="M65.0759 21.5226C65.0845 18.1746 65.0964 11.4274 65.0759 11.2224L73.8387 15.9369V26.3908L65.0759 21.5226Z"
            fill="#4B207A"
          />
          <path
            d="M64.7685 52.5769L64.7173 42.533L73.7363 47.8624L64.7685 52.5769Z"
            fill="#2B0D4F"
          />
          <path
            d="M46.6281 31.8741L45.9619 0L57.9019 6.20059V25.4173L73.7365 34.8463V47.8624L46.6281 31.8741Z"
            fill="#6F389F"
          />
          <path
            d="M46.1924 10.4026L45.9618 0L37.2502 5.15008L46.1924 10.4026Z"
            fill="#2B0D4F"
          />
          <path
            d="M0.200439 27.262V16.7569L9.37321 11.6775V21.9326L0.200439 27.262Z"
            fill="#4B207A"
          />
          <path
            d="M9.04007 52.9869L0.0979004 47.8624L9.04007 42.8661V52.9869Z"
            fill="#2B0D4F"
          />
          <path
            d="M27.9238 10.2489L27.8726 0L36.7891 5.15008L27.9238 10.2489Z"
            fill="#2B0D4F"
          />
          <path
            d="M28.0262 32.2841L0.0979445 47.8624L0 34.4876L15.9838 25.1098V6.76428L27.8725 0L28.0262 32.2841Z"
            fill="#683B9B"
          />
          <path
            d="M36.9171 69.5389L28.1799 74.6634L36.6865 79.9928L45.6031 74.6634L36.9171 69.5389Z"
            fill="#4B207A"
          />
          <path
            d="M64.5636 52.9869L64.7686 63.4408L55.9033 58.4701L64.5636 52.9869Z"
            fill="#2B0D4F"
          />
          <path
            d="M9.06567 63.6458L9.27065 53.4481L18.1872 58.4957L9.06567 63.6458Z"
            fill="#2B0D4F"
          />
          <path
            d="M21.2619 70.6724L37.0196 61.3397L52.9852 70.7175L64.7685 63.4408L37.0196 47.8624L9.06567 63.6457L21.2619 70.6724Z"
            fill="#6F389F"
          />
        </svg>

        <div className="logo-text flex flex-col">
          <div className="flex gap-1 items-center">
            <h1 className="text-xs lg:text-2xl font-semibold font-Poppins text-white">Data</h1>
            <h1 className="lg:text-2xl text-xs font-semibold font-Poppins text-[#8855C4]">Science</h1>
          </div>
          <div className="flex gap-1 items-center">
            <h1 className="lg:text-2xl text-xs font-semibold font-Poppins text-white">Community</h1>
            <h1 className="lg:text-2xl text-xs font-semibold font-Poppins text-[#8855C4]">SRM</h1>
          </div>
        </div>
      </div>
      <div className="sections flex items-center lg:gap-16 gap-4">
        <a href="/" className="text-white text-xs lg:text-lg font-Montserrat">Home</a>
        <a href="/aboutus" className="text-white text-xs lg:text-lg font-Montserrat">About Us</a>
      </div>
    </div>
  );
}
