import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJObs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJObs(jobsApplied);
        }
    }, [])

    return (
        <div>
            <h3 className="text-3xl bg-red-400 p-2 text-black m-20">Jobs I applied: {appliedJobs.length}</h3>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </details>
            {
                appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;