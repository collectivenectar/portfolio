import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="text-white text-center w-full text-sm">
      <div className="mb-8 text-lg">
        <div>
          <h4 className="border-b border-blue-500 w-28 mx-auto my-4">Links</h4>
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:w-1/4 lg:justify-around lg:mx-auto lg:w-full h-fit w-full items-center">
          <li className="border border-transparent w-32 rounded-full py-2 my-2 h-fit transition duration-500 hover:bg-white hover:text-black">
              <a href="/blog" className="block">
                Blog
              </a>
            </li>
            <li className="border border-transparent w-32 rounded-full py-2 my-2 h-fit transition duration-500 hover:bg-white hover:text-black">
              <a href="https://linkedin.com/in/jonharveydev" className="block">
                LinkedIn
              </a>
            </li>
            <li className="border border-transparent w-32 rounded-full py-2 my-2 h-fit transition duration-500 hover:bg-white hover:text-black">
              <a href="https://github.com/collectivenectar" className="block">
                Github
              </a>
            </li>
            <li className="border border-transparent w-32 rounded-full py-2 my-2 h-fit transition duration-500 hover:bg-white hover:text-black">
              <a href="https://x.com/_jonharvey" className="block">
                X/Twitter
              </a>
            </li>
            {/* <li className="border border-transparent w-32 rounded-full py-2 my-2 h-fit transition duration-500 hover:bg-white hover:text-black">
            <a href="" className="block">Process</a>
          </li>
          <li className="border border-transparent w-32 rounded-full py-2 my-2 h-fit transition duration-500 hover:bg-white hover:text-black">
            <a href="" className="block">Insights</a>
          </li>
          <li className="border border-transparent w-32 rounded-full py-2 my-2 h-fit transition duration-500 hover:bg-white hover:text-black">
            <a href="" className="block">Contact</a>
          </li> */}
          </ul>
        </div>
      </div>
      <p className="mt-4">© 2025 Jon Harvey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
