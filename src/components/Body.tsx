const Body = () => {
  return (
    <div className="flex flex-row items-left justify-evenly">
      <div>
        <div className="mb-8">
          <img src="image-web-3-desktop.jpg" alt="" />
        </div>

        <div className="flex flex-row justify-between">
          <div className="">
            <h1 className="text-6xl font-bold">
              The bright <br /> future of <br /> Web 3.0?
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="text-xl break-words ">
              We dive into the next evolution of the web that <br /> claims to
              put the power of the platforms back <br /> into the hands of the
              people. But is it really fullfilling its promise?
            </div>
            <div className="mt-8">
              <button className="bg-red-500 text-white p-2 w-32">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-left p-8">
        <h1 className="text-4xl text-yellow-400 font-bold">New</h1>
        <div className="border-b-2 mt-8">
          <h3 className="text-2xl font-bold mb-4">Hydrogen VS Electric Cars</h3>
          <p className="mb-8">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="border-b-2 mt-8">
          <h3 className="text-2xl font-bold mb-4">
            The downsides of AI Artistry
          </h3>
          <p className="mb-8">
            What are the possible adverse effects of on demand AI image
            generation?
          </p>
        </div>
        <div className="border-b-2 mt-8">
          <h3 className="text-2xl font-bold mb-4">Is VC Funding Drying up?</h3>
          <p className="mb-8">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
