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
                <div className="col-span-1 bg-green-300 flex items-center justify-center">
                  
                </div>
                <div className="col-span-1 row-span-2 flex items-center justify-center">
                    <div className="grid grid-flow-col grid-rows-2 gap-4">
                        <button
                          className="bg-pink-500 hover:bg-fuchsia-500 text-white font-bold py-5 px-40 rounded-3xl text-xl shadow-lg shadow-pink-500/50 transition duration-300"
                        >
                          Играть
                        </button>
                        <button
                          className="bg-pink-500 hover:bg-fuchsia-500 text-white font-bold py-5 px-40 rounded-3xl text-xl shadow-lg shadow-pink-500/50 transition duration-300"
                        >
                          Коллекция
                        </button>

                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default HomePage;