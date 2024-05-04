import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id))
    console.log(job);
    return (
        <div>
            <h3 className="text-3xl font-bold text-center">Job details of: {job.job_title}</h3>
            <div className="grid md:grid-cols-4 gap-4 py-16">
                <div className="md:col-span-3 space-y-5 px-2 py-10">
                    <h3><span className="text-lg font-bold">Job Description: </span>{job.job_description}</h3>
                    <h3><span className="text-lg font-bold">Job Responsibility: </span>{job.job_responsibility}</h3>
                    <h3><span className="text-lg font-bold">Educational Requirements: <br /></span>{job.educational_requirements}</h3>
                    <h3><span className="text-lg font-bold">Experiences: <br /></span> {job.experiences}</h3>
                </div>
                <div className="md:col-span-1 bg-sky-50 rounded-xl">
                    <div className="p-5 text-black">
                        <h3 className="pb-10">Job Details</h3>
                        <h3 className="pb-2">Salary: {job.salary}</h3>
                        <h3 className="pb-2">Job Title: {job.job_title}</h3>
                        <h2 className="text-xl font-semibold py-8">Contact Information</h2>
                        <h3 className="pb-2">Phone: {job.contact_information.phone}</h3>
                        <h3 className="pb-2">Email: {job.contact_information.email}</h3>
                        <h3 className="pb-2">Address: {job.contact_information.address}</h3>
                    </div>
                    <button className="btn btn-primary w-full mt-10 text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;