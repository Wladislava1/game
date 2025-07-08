import { Link } from 'react-router-dom';

function Container({ currentShow, onSelect }) {

  let fixtures = [];
  if (currentShow === 1) {
    fixtures = Array.from({ length: 9 }, (_, i) => `/img/face/${i+1}.png`);
  } else if (currentShow === 2) {
    fixtures = Array.from({ length: 8 }, (_, i) => `/img/cloth/${i+1}.png`);
  } else if (currentShow === 3) {
    fixtures = Array.from({ length: 9 }, (_, i) => `/img/shoes/${i+1}.png`);
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full w-150 px-5 py-4 ml-auto border-3 border-white rounded-3xl bg-yellow-300 bg-clip-border">
      {fixtures.map((el, i) => (
        <div
          key={i}
          className="bg-white border-3 border-gray-300 shadow-lg flex items-center justify-center rounded-3xl"
          onClick={() => onSelect && onSelect(i)}
        >
          <img src={el} alt="" className="h-50 mt-30 max-w-full object-contain" />
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