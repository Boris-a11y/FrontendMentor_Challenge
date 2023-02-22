const Header = () => {
  return (
    <div className="flex flex-row mb-12 items-center m-20">
      <div className="flex-1 h-16">
        <h1 className="text-6xl font-bold">W.</h1>
      </div>
      <div className="flex-row-reverse">
        <div className="text-xl opacity-40">
          <ul className="flex">
            <li className="p-4">
              <a href="">Home</a>
            </li>
            <li className="p-4">
              <a href="">New</a>
            </li>
            <li className="p-4">
              <a href="">Popular</a>
            </li>
            <li className="p-4">
              <a href="">Trending</a>
            </li>
            <li className="p-4">
              <a href="">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
