const Header = () => {
    return (
      <header>
      <nav className=" w-11/12 h-16 flex flex-row justify-between m-4 mx-auto rounded-full text-white border border-white">
        <a className="w-12 h-12 my-auto mx-2 rounded-full">
          <img className="rounded-full" src="/icons/favicon.png" />
        </a>
        <a href="#contact" className="w-fit px-6 py-2 my-auto mx-2 h-12 text-center text-lg rounded-full border border-white transition duration-500 hover:bg-white hover:text-black hover:opacity-90 lg:text-xl font-bold">
          contact
        </a>
      </nav>
    </header>
    )
}

export default Header;