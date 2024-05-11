

const JobCategory = () => {
    return (
        <div>
            <h3 className="text-5xl text-center">Job Category List</h3>
            <p className="text-center py-5">Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className="flex gap-5 pt-5 pb-20">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/H731wqX/accounts.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Account & Finance</h2>
                        <p>300 jobs available</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/DbF652S/creative.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Creative Design</h2>
                        <p>100+ jobs available</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/M8bfn3j/marketing.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Marketing & Sales</h2>
                        <p>150 jobs available</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/r4CVkHc/chip.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Engineering Job</h2>
                        <p>224 jobs available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;