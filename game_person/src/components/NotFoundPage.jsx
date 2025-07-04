import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
        <div className="w-screen h-screen box-border p-4 bg-no-repeat bg-cover bg-center bg-[url(/img/bg/NotFound.jpeg)]">
            <Link
                to="/"
                className="w-24 h-24 bg-gray-300 rounded-3xl flex items-center justify-center text-black border-3 border-solid shadow-lg hover:bg-gray-500 transition text-6xl"
                aria-label="Домой"
            >
                🏠
            </Link>
        </div>
        
        </>
    )
}
export default NotFoundPage;