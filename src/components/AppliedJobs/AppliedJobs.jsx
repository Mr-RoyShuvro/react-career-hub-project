import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJObs] = useState([]);
    const [displayJObs, setDisplayJobs] = useState([]);

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
            setDisplayJobs(jobsApplied);
        }
    }, [])

    const handleDisplayJobs = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remote);
        }
        else if(filter === 'onsite'){
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsite);
        }
    }

    return (
        <div>

            <details className="dropdown">
                <summary className="m-1 btn">Sort By Place</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleDisplayJobs('all')}><a>All</a></li>
                    <li onClick={() => handleDisplayJobs('remote')}><a>Remote</a></li>
                    <li onClick={() => handleDisplayJobs('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            {
                displayJObs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;