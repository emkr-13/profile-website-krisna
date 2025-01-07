import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full  bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo_emkr.png"
                alt="EMKR Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl text-black font-bold">EMKR</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-black hover:text-blue-900">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-blue-900">
              About
            </Link>
            <Link href="/projects" className="text-black hover:text-blue-900">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
