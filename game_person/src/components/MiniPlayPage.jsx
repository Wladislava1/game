import { useContext } from 'react';
import { CoinsContext } from './MoneyContext.js';
import { Link } from 'react-router-dom';

const MiniPlayPage = () => {
    const { coins } = useContext(CoinsContext)

    return (
        <div className="w-screen h-screen box-border p-5 bg-no-repeat bg-cover bg-center bg-[url(/img/bg/миниИгры.png)]">
            <div className="grid grid-flow-col grid-rows-3">
                <div className="row-start-1 row-end-4 text-center flex justify-center items-center">
                    <div className="grid grid-flow-col grid-rows-3 gap-5 bg-indigo-200 border-4 rounded-3xl p-5">
                        <div className="row-start-1 row-end-2 text-center">
                            <div className="flex flex-col items-center right-0">
                                <img
                                src="/img/buttons/крестикиНолики.png"
                                alt="крестикиНолики"
                                className="border-3 rounded-3xl h-32 object-contain ro"
                                />
                            </div>
                        </div>
                        <div className="row-start-2 row-end-3 text-center">
                            <div className="flex flex-col items-center right-0">
                                <img
                                src="/img/buttons/пазлы.png"
                                alt="пазлы"
                                className="bg-white border-3 rounded-3xl w-32 h-32 object-contain"
                                />
                            </div>
                        </div>
                        <div className="bg-green-300 row-start-3 row-end-4 text-center">03</div>
                        <div className="row-start-1 row-end-2 text-center">
                            <div className="flex flex-col items-center right-0">
                                <img
                                src="/img/buttons/лабиринт.png"
                                alt="лабиринт"
                                className="bg-white border-3 rounded-3xl h-32 object-contain"
                                />
                            </div>
                        </div>
                        <div className="bg-pink-300 row-start-2 row-end-3 text-center">05</div>
                        <div className="bg-yellow-700 row-start-3 row-end-4 text-center">06</div>
                        <div className="row-start-1 row-end-2 text-center">
                            <div className="flex flex-col items-center right-0">
                                <img
                                src="/img/buttons/карты.png"
                                alt="карты"
                                className="bg-white border-3 rounded-3xl w-32 h-32 object-contain"
                                />
                            </div>
                        </div>
                        <div className="bg-yellow-700 row-start-2 row-end-3 text-center">08</div>
                        <div className="bg-yellow-700 row-start-3 row-end-4 text-center">09</div>
                    </div>
                </div>
                <div className="row-start-1 row-end-2 py-5 pr-15 flex justify-end">
                    <div className="flex flex-row items-start gap-5">
                        <Link
                            to="/"
                            className="w-30 h-30 bg-yellow-400 rounded-3xl flex items-center justify-center text-white border-3 border-solid shadow-lg hover:bg-yellow-500 transition text-7xl"
                            aria-label="Домой"
                        >
                            🏠
                        </Link>
                        <div className="flex flex-col items-center">
                            <img
                            src="/img/buttons/монетки.png"
                            alt="деньги"
                            className="w-full h-32 object-contain"
                            />
                            <span className="text-center font-bold text-shadow-lg text-shadow-white text-2xl">
                            {coins}❤️
                            </span>
                        </div>
                      </div>
                </div>
                <div className="row-start-2 row-end-4 text-center px-15">
                    <div className="h-full w-full border-4 rounded-3xl bg-indigo-200 bg-clip-border">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MiniPlayPage;