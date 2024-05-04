import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";


const FeaturedJob = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className=" card-compact bg-base-100 shadow-xl px-5">
            <figure><img className="w-40 h-32" src={logo} alt="Shoes" /></figure>
            <div className="">
                <h2 className="card-title py-5">{job_title}</h2>
                <p className="pb-5">{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex mt-4">
                    <p className="flex mr-4"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location}</p>
                    <p className="flex mr-4"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</p>
                </div>
                <div className="card-actions p-10">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;