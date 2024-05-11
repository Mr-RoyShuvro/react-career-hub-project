

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/H2GhvtB/user.png" className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold leading-normal">One Step <br /> Closer to your <br /><span className="text-sky-500">Dream Job</span></h1>
                    <p className="py-6">Explore thousands of job opportunies with all the <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;