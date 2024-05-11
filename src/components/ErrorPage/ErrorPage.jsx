import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-red-700 text-4xl text-white font-semibold p-20 text-center h-screen">
            <h1 className="pb-12">Oops!!</h1>
            <h2>The page you search is not found...</h2>
            <Link to="/"><button className="bg-orange-500 hover:bg-orange-600 text-black p-2 rounded-xl text-lg m-32">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;