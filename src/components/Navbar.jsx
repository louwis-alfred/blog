import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-0">
      <div className="flex flex-shrink-0 items-center">
        {/* Add logo or other content here if needed */}
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        
        <a
          href="https://github.com/louwis-alfred"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
