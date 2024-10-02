function App() {
  return (
    <>
      <main>
        <div className="absolute -top-[300px] -left-[350px]">
          <img src="/images/bg-pattern-top.svg" alt="" />
        </div>
        <div className="absolute bottom-[0px] right-0  top-[350px] overflow-hidden">
          <img src="/images/bg-pattern-bottom.svg" alt="" />
        </div>
        <div className="flex justify-center items-center h-screen relative">
          <div className="w-[330px] h-[350px] bg-white rounded-xl absolute ">
            <img
              src="/images/bg-pattern-card.svg"
              alt=""
              className="rounded-t-xl"
            />
            <img
              src="/images/image-victor.jpg "
              className="rounded-full border-4 relative  bottom-[40px] left-[115px] border-white"
              alt=""
            />
            <div className="flex gap-4 justify-center text-center relative bottom-[30px] ">
              <h1 className="font-bold text-center ">Victor Crest</h1>
              <p className="text-[#959498] font-semibold">26</p>
            </div>
            <p className="text-[#959498]  text-center relative bottom-[30px]">
              London
            </p>
            <hr />

            <div className="flex justify-around">
              <div className=" ">
                <h1 className="font-bold">80K</h1>
                <p className="text-[12px]">Posts</p>
              </div>
              <div className=" ">
                <h1 className="font-bold">1000</h1>
                <p className="text-[12px]">Followers</p>
              </div>
              <div className=" ">
                <h1 className="font-bold">1K</h1>
                <p className="text-[12px]">Likes</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
