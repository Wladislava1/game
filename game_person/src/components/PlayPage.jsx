import { useState } from "react";
import Container from "../ui/container";

const PlayPage = () => {
    const [currentShow, setCurrentShow] = useState(1);
    const [faceIndex, setFaceIndex] = useState(1);
    const [clothesIndex, setClothesIndex] = useState(1);
    const [shoesIndex, setShoesIndex] = useState(1);

    const handleShowContainerClick = (index) => {
      setCurrentShow(index);
    }
    const handleShowImgPhoto = (index) => {
      if (index === 1) setFaceIndex((prev) => (prev % 3) + 1);
      if (index === 2) setClothesIndex((prev) => (prev % 3) + 1);
      if (index === 3) setShoesIndex((prev) => (prev % 3) + 1);
    }
    const handlePhotoClick = () => {
        
    }
    return (
        <>
        <div className="w-screen h-screen box-border p-4 bg-no-repeat bg-center bg-cover bg-[url(/img/bg/playPage.jpeg)]">
            <div className="grid grid-flow-col grid-rows-3 gap-4 w-full h-full">
                <div className="row-span-3 flex items-center justify-end">
                    <div className="relative w-full h-full">
                        <img
                            src="/img/девочка.png"
                            alt="база"
                            className="absolute inset-0 max-h-full max-w-full object-contain z-10"
                        />
                        <img
                            src={`/img/face/${faceIndex}.png`}
                            alt="волосы"
                            className="absolute inset-0 max-h-full max-w-full object-contain z-20 pointer-events-none"
                        />
                        <img
                            src={`/img/cloth/${clothesIndex}.png`}
                            alt="одежда"
                            className="absolute inset-0 max-h-full max-w-full object-contain z-30 pointer-events-none"
                        />
                        <img
                            src={`/img/shoes/${shoesIndex}.png`}
                            alt="обувь"
                            className="absolute inset-0 max-h-full max-w-full object-contain z-40 pointer-events-none"
                        />
                        </div>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                  <div className="flex flex-row items-center justify-center gap-20">
                      {[1, 2, 3].map((index) => (
                        <button
                          key={index}
                          className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center text-white border-3 border-solid shadow-lg hover:bg-yellow-500 transition"
                          onClick={() => handleShowContainerClick(index)}
                        >
                        <div onClick={handleShowImgPhoto}>
                            <img
                            src={`/img/buttons/${index === 1 ? 'лицо' : index === 2 ? 'одежда' : 'обувь'}.png`}
                            alt={`кнопка ${index}`}
                            className="max-w-full max-h-full object-contain p-1"
                            />
                        </div>
                        </button>
                    ))}
                        <button
                          className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center text-white border-3 border-solid shadow-lg hover:bg-yellow-500 transition"
                          onClick={() => handlePhotoClick()}
                        >
                            <img
                            src="/img/buttons/фото.png"
                            alt="кнопка фото"
                            className="max-w-full max-h-full object-contain p-1"
                            />
                        </button>
                  </div>
                </div>
                <div className="col-span-1 row-span-2 flex">
                <Container 
                    currentShow={currentShow} 
                    onSelect={(index) => {
                        if (currentShow === 1) {
                        setFaceIndex((prev) => (prev === index + 1 ? 0 : index + 1));
                        }
                        if (currentShow === 2) {
                        setClothesIndex((prev) => (prev === index + 1 ? 0 : index + 1));
                        }
                        if (currentShow === 3) {
                        setShoesIndex((prev) => (prev === index + 1 ? 0 : index + 1));
                        }
                    }}
                />
                </div>
            </div>
        </div>
        </>
    )
}
export default PlayPage;