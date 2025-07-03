import { useEffect, useState } from "react";

const images = [
  "/img/зеленаяЖенщина.png",
  "/img/краснаяЖенщина.png",
  "/img/синяяЖенщина.png",
  "/img/розоваяЖенщина.png",
  "/img/бежеваяЖенщина.png"
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

    return (
        <>
          <div className="w-screen h-screen box-border p-4 bg-no-repeat bg-center bg-[url(/img/customBack.png)]">
            <div className="grid grid-flow-col grid-rows-3 gap-4 w-full h-full">
                <div className="row-span-3 flex items-center justify-start">
                    <img
                        src={images[currentIndex]}
                        alt="девочка"
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <div className="flex flex-row items-center justify-center gap-20">
                    <div className="flex flex-col items-center gap-2">
                      <button className="w-24 h-24 bg-blue-400 rounded-3xl flex items-center justify-center text-white border-[3px] border-solid shadow-lg hover:bg-blue-500 transition">
                        <img
                          src="/img/сумка.png"
                          alt="сумка"
                          className="max-w-full max-h-full object-contain p-2"
                        />
                      </button>
                      <span className="text-center text-white font-bold text-shadow-lg text-2xl">МАГАЗИН</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <button className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center text-white border-[3px] border-solid shadow-lg hover:bg-yellow-500 transition">
                        <img
                          src="/img/гардероб.png"
                          alt="гардероб"
                          className="max-w-full max-h-full object-contain p-1"
                        />
                      </button>
                      <span className="text-center text-white font-bold text-shadow-lg text-2xl">ГАРДЕРОБ</span>
                    </div>
                    <div className="flex flex-col items-center gap-2"></div>
                      <div className="flex flex-col items-center w-32 h-40 right-0">
                        <img
                          src="/img/монетки.png"
                          alt="деньги"
                          className="w-full h-32 object-contain"
                        />
                        <span className="text-center text-white font-bold text-shadow-lg text-2xl">
                          1255
                        </span>
                      </div>
                  </div>
                </div>
                <div className="col-span-1 row-span-2 flex items-center justify-center">
                    <div className="grid grid-flow-col grid-rows-2 gap-4">
                        <button
                          className="bg-pink-500 hover:bg-fuchsia-500 text-white font-bold border-3 border-solid py-5 px-40 rounded-3xl text-xl shadow-lg shadow-pink-500/50 transition duration-300"
                        >
                          ИГРАТЬ
                        </button>
                        <button
                          className="bg-pink-500 hover:bg-fuchsia-500 text-white font-bold border-3 border-solid py-5 px-40 rounded-3xl text-xl shadow-lg shadow-pink-500/50 transition duration-300"
                        >
                          КОЛЛЕКЦИЯ
                        </button>

                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default HomePage;