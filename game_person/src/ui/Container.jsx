import { Link } from 'react-router-dom';

function Container({ currentShow, onSelect }) {

  const getAlignment = (type) => {
    if (type === 'face') return 'h-40 mt-20';
    if (type === 'top') return 'h-54 mb-6';
    if (type === 'down') return 'h-55 mb-25';
    if (type === 'shoes') return 'items-end justify-center';
    return 'items-center justify-center';
  };
  const topClothes = Array.from({ length: 6 }, (_, i) => ({
    src: `/img/clothTop/${i + 1}.png`,
    type: 'top',
    index: i + 1
  }));

  const downClothes = Array.from({ length: 2 }, (_, i) => ({
    src: `/img/clothDown/${i + 1}.png`,
    type: 'down',
    index: i + 1
  }));

  let fixtures = [];
  if (currentShow === 1) {
    fixtures = Array.from({ length: 8 }, (_, i) => ({
      src: `/img/face/${i + 1}.png`,
      type: 'face',
      index: i + 1
    }));
  } else if (currentShow === 2) {
    fixtures = [...topClothes, ...downClothes];
  } else if (currentShow === 3) {
    fixtures = Array.from({ length: 9 }, (_, i) => ({
      src: `/img/shoes/${i + 1}.png`,
      type: 'shoes',
      index: i + 1
    }));
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full w-150 px-5 py-4 ml-auto border-3 border-white rounded-3xl bg-yellow-300 bg-clip-border">
      {fixtures.map((item, i) => (
        <div
          key={i}
          className="bg-white border-3 border-gray-300 shadow-lg flex items-center justify-center rounded-3xl"
          onClick={() => onSelect && onSelect(item.type, item.index)}
        >
          <img src={item.src} alt="" className={`${getAlignment(item.type)} pointer-events-none max-w-full object-contain`} />
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