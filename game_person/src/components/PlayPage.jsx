import {  useState } from "react";

const PlayPage = () => {
    const [currentShow, setCurrentShow] = useState(0);
    const handleShowClick = (index) => {
       setCurrentShow(currentShow === index ? 0 : index);
    }
    return (
        <>
        <div className="w-screen h-screen box-border p-4 bg-no-repeat bg-center bg-cover bg-[url(/img/playPage.jpeg)]">
            <div className="grid grid-flow-col grid-rows-3 gap-4 w-full h-full">
                <div className="row-span-3 flex items-center justify-end">
                    <img
                        src="/img/девочка.png"
                        alt="девочка"
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="col-span-1 flex items-center justify-end">
                  <div className="flex flex-row items-center justify-center gap-20">
                      {[1, 2, 3, 4].map((index) => (
                        <button
                          key={index}
                          className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center text-white border-[3px] border-solid shadow-lg hover:bg-yellow-500 transition"
                          onClick={() => handleShowClick(index)}
                        >
                            <img
                            src={`/img/${index === 1 ? 'лицо' : index === 2 ? 'одежда' : index === 3 ? 'обувь' : 'фото'}.png`}
                            alt={`кнопка ${index}`}
                            className="max-w-full max-h-full object-contain p-1"
                            />
                        </button>
                    ))}
                  </div>
                </div>
                <div className="col-span-1 row-span-2 flex">
                <div className={`grid grid-cols-4 grid-rows-4 gap-2 h-full w-150 px-5 py-4 ml-auto border-3 border-white rounded-3xl bg-yellow-300 bg-clip-border ${
                    currentShow === 0 ? 'hidden' : ''}`}>
                    {[...Array(16)].map((_, i) => (
                    <div key={i} className="bg-white border border-gray-300 flex items-center justify-center">
                        {i + 1}
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default PlayPage;