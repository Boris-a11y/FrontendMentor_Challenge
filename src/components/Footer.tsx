const Footer = () => {
  return (
    <div className="flex flex-row mb-12 items-center m-20 justify-between">
      <div className="flex space-x-8">
        <div id="img">
          <img src="image-retro-pcs.jpg" alt="" />
        </div>
        <div id="text">
          <h1 className="text-5xl font-bold opacity-20">01</h1>
          <h1 className="text-2xl font-bold mt-4">Reviving retro PCs</h1>
          <p className="mt-4">
            What happens when old PCs <br /> are given modern upgrades.
          </p>
        </div>
      </div>
      <div className="flex space-x-8">
        <div id="img">
          <img src="image-top-laptops.jpg" alt="" />
        </div>
        <div id="text">
          <h1 className="text-5xl font-bold opacity-20">02</h1>
          <h1 className="text-2xl font-bold mt-4">Top 10 Laptops of 2022</h1>
          <p className="mt-4">
            Our best picks for various <br /> needs and budgets. <br />
          </p>
        </div>
      </div>
      <div className="flex space-x-8">
        <div id="img">
          <img src="image-gaming-growth.jpg" alt="" />
        </div>
        <div id="text">
          <h1 className="text-5xl font-bold opacity-20">03</h1>
          <h1 className="text-2xl font-bold mt-4">Reviving retro PCs</h1>
          <p className="mt-4">
            How the pandemic has sparked <br /> fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
