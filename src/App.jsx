import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMedium,
  FaTelegram
} from 'react-icons/fa';
import bgImage from './assets/bg.jpg'; // Import your background image

function App() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-65 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Main Content Container */}
          <div className="flex flex-col items-center justify-center flex-grow">
            {/* Logo and Title */}
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center w-full max-w-screen-lg my-4">
                <div className="flex-grow h-1 bg-[#d9d9d9]" />
                <div className="mx-4 text-white text-[120px] font-[700] font-Bison leading-[86.40px]">
                  TOROX
                </div>
                <div className="flex-grow h-1 bg-[#d9d9d9]" />
              </div>
              <div className="text-center text-white font-[600] font-Bison leading-[1.2] max-w-screen-md px-4 text-responsive">
                Decentralized Web3 Game Engine with P2P Networking, Blockchain
                Integration, and Advanced Security Features
              </div>
            </div>

            {/* Notification Subscription */}
            <div className="flex flex-col w-full items-center">
              <div className="flex flex-col max-w-md w-full">
                {/* Subtitle */}
                <div className="text-left text-white font-[400] font-Bison leading-normal mt-10 mb-4 text-[clamp(20px,2vw,32px)]">
                  Get Notified When We Launch
                </div>

                {/* Input and Subscribe Button */}
                <div className="flex items-center w-full">
                  <input
                    type="email"
                    placeholder="E-mail address..."
                    className="h-12 px-4 py-2 rounded-l-lg shadow-inner text-base font-semibold font-['Outfit'] flex-grow"
                  />
                  <button className="h-12 px-6 py-2 bg-[#3555fa] text-white text-base font-semibold font-['Outfit'] rounded-r-lg">
                    Subscribe
                  </button>
                </div>

                {/* Agreement Text */}
                <div className="mt-2 text-sm font-light text-white/90 font-['Outfit'] text-left">
                  By clicking subscribe you agree to our{' '}
                  <button className="underline font-semibold">
                    Terms & Conditions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto w-full">
            <div className="flex flex-col items-center">
              {/* Social Icons */}
              <div className="SocialIcons h-6 flex justify-center items-center gap-6 mb-4">
                <a
                  href="https://github.com/Torox-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-6 h-6 text-white hover:text-gray-500" />
                </a>
                <a
                  href="https://x.com/Torox_org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="w-6 h-6 text-white hover:text-gray-500" />
                </a>
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="w-6 h-6 text-white hover:text-gray-500" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="w-6 h-6 text-white hover:text-gray-500" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-6 h-6 text-white hover:text-gray-500" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord className="w-6 h-6 text-white hover:text-gray-500" />
                </a> */}
                <a
                  href="https://medium.com/@TOROX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMedium className="w-6 h-6 text-white hover:text-gray-500" />
                </a>
              </div>

              {/* Copyright Text */}
              <div className="text-white text-sm font-normal font-['Poppins'] tracking-tight mb-4">
                © {new Date().getFullYear()} TOROX | All Rights Reserved
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
