import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";


const FeaturedJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-32 h-32" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex mt-4">
                    <p className="flex mr-4"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location}</p>
                    <p className="flex mr-4"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;