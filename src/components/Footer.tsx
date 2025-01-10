import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-center">© 2025 EMKR. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/emkr-13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-mathew-krisna-rata-b9358625b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
