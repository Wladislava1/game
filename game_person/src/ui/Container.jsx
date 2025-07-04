import { Link } from 'react-router-dom';

function Container({ currentShow }) {
  const faceBodyFixtures = [
    "/img/face/дваПучка.png",
    "/img/face/дваХвостика.png",
    "/img/face/короткийХвост.png",
    "/img/face/кудрявые короткие.png",
    "/img/face/кудрявыеДлинные.png",
    "/img/face/прямые.png",
    "/img/face/прямыеКороткие.png",
    "/img/face/пучок.png",
    "/img/face/рыжиеВолосы.png"
  ];
  const clothFixtures = [
    "/img/cloth/джинсоваяЮбка.png",
    "/img/cloth/джинсы.png",
    "/img/cloth/желтоеХуди.png",
    "/img/cloth/майка.png",
    "/img/cloth/пальто.png",
    "/img/cloth/свитер.png",
    "/img/cloth/платье.png",
    "/img/cloth/школково.png"
  ];
  const shoesFixtures = [
    "/img/shoes/балетки.png",
    "/img/shoes/кеды.png",
    "/img/shoes/кроксы.png",
    "/img/shoes/кроссы.png",
    "/img/shoes/обувь.png",
    "/img/shoes/сапоги.png",
    "/img/shoes/танцы.png",
    "/img/shoes/балетки.png",
    "/img/shoes/вансы.png"
  ];

  let fixtures = [];
  switch (currentShow) {
    case 1:
      fixtures = faceBodyFixtures;
      break;
    case 2:
      fixtures = clothFixtures;
      break;
    case 3:
      fixtures = shoesFixtures;
      break;
    default:
      return null;
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full w-150 px-5 py-4 ml-auto border-3 border-white rounded-3xl bg-yellow-300 bg-clip-border">
      {fixtures.map((el, i) => (
        <div
          key={i}
          className="bg-white border-3 border-gray-300 shadow-lg flex items-center justify-center rounded-3xl"
        >
          <img src={el} alt="" className="max-h-full max-w-full object-contain" />
        </div>
      ))}
      <Link
        to="/"
        className="w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center text-white border-3 border-solid shadow-lg hover:bg-yellow-500 transition text-6xl"
        aria-label="Домой"
      >
        🏠
      </Link>
    </div>
  );
}
export default Container;