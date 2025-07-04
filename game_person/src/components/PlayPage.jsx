import { useState } from "react";
import Container from "../ui/container";

const PlayPage = () => {
    const [currentShow, setCurrentShow] = useState(1);
    const handleShowClick = (index) => {
       setCurrentShow(index);
    }
    const handlePhotoClick = () => {
        
    }
    return (
        <>
        <div className="w-screen h-screen box-border p-4 bg-no-repeat bg-center bg-cover bg-[url(/img/bg/playPage.jpeg)]">
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
                      {[1, 2, 3].map((index) => (
                        <button
                          key={index}
                          className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center text-white border-3 border-solid shadow-lg hover:bg-yellow-500 transition"
                          onClick={() => handleShowClick(index)}
                        >
                            <img
                            src={`/img/buttons/${index === 1 ? 'лицо' : index === 2 ? 'одежда' : 'обувь'}.png`}
                            alt={`кнопка ${index}`}
                            className="max-w-full max-h-full object-contain p-1"
                            />
                        </button>
                    ))}
                        <button
                          className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center text-white border-3 border-solid shadow-lg hover:bg-yellow-500 transition"
                          onClick={() => handlePhotoClick()}
                        >
                            <img
                            src={`/img/buttons/фото.png`}
                            alt="кнопка фото"
                            className="max-w-full max-h-full object-contain p-1"
                            />
                        </button>
                  </div>
                </div>
                <div className="col-span-1 row-span-2 flex">
                <Container currentShow={currentShow}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default PlayPage;