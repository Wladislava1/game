import { useContext, useRef, useState } from 'react';
import { CoinsContext } from './MoneyContext.js';
import { Link } from 'react-router-dom';

const HousePage = () => {
    const { coins } = useContext(CoinsContext);
    const [currentShow, setCurrentShow] = useState(0);

    return (
        <div className="w-screen h-screen box-border p-4 bg-no-repeat bg-cover bg-center bg-[url(/img/bg/дом.jpeg)]">
            <div className="grid grid-flow-col grid-rows-10 grid-cols-10 h-full">
                <div className="col-start-1 col-end-4 row-start-7 row-end-11">диван</div>
                <div className="col-start-8 col-end-10 row-start-1 row-end-10">шкаф</div>
                <div className="col-start-5 col-end-7 row-start-7 row-end-11">стол</div>
                <div className="col-start-7 col-end-11 row-start-8 row-end-11">кровать</div>
                <div className="col-start-1 col-end-3 row-start-1 row-end-5">
                    <img src="/img/furniture/картина.png" alt="картина" className="drop-shadow-[-10px_10px_10px_rgba(0,0,0,0.5)]"/>
                </div>
                <div className="col-start-4 col-end-8 row-start-9 row-end-11">ковер</div>
                <div className="col-start-4 col-end-5 row-start-3 row-end-10">
                    <img src="/img/furniture/торшер.png" alt="картина" className=" h-full drop-shadow-[0px_10px_10px_rgba(0,0,0,0.5)]"/>
                </div>
            </div>
        </div>
    )
}
export default HousePage;