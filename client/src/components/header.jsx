const Header = () => {
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden ">
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden ">
        <div className="container mx-auto px-6 flex relative py-16 gap-8">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-indigo-500 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800 mb-8">
              Be on
              <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-indigo-500 border-2 border-transparent text-white text-md mr-4 hover:bg-indigo-500"
              >
                Get started
              </a>
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-500 text-indigo-500 dark:text-white hover:bg-indigo-500 hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative ">
            <img
              className="w-full h-full block"
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
