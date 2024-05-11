

const Footer = () => {
    return (
        <footer className="p-10 bg-base-200 text-base-content">
            <div className="max-w-6xl mx-auto">
            <div className="footer pb-10">
                <aside>
                    <h3 className="text-3xl font-semibold">CareerHub</h3>
                    <p>Empowering Your Future, One Career at a Time - <br />Your Trusted Partner in Professional <br />Growth and Development.</p>
                    <img className="w-28 h-12 py-2" src="https://i.ibb.co/gd3sf6G/social.png" alt="" />
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">524 Broadway, NYC</a>
                    <a className="link link-hover">+1785-765-702</a>
                </nav>
            </div>
            {/* <hr className=""></hr> */}
            <div className="flex pt-20 border-t-2 border-gray-300">
                <h3 className="flex-1">@2023 CareerHub. All Rights Reserved.</h3>
                <h3>Powered by CareerHub</h3>
            </div>
            </div>
        </footer>
    );
};

export default Footer;