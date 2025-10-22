import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">

                <nav className="flex flex-col md:flex-row gap-4 text-center md:text-left">
                    <Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                    <Link to="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link>
                    <Link to="/news" className="hover:text-primary transition-colors">News Portal</Link>
                    <a href="#" className="hover:text-primary transition-colors">FTP Server</a>
                </nav>

                <div className="flex gap-6 justify-center md:justify-end">
                    <a href="#" className="hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 ..."></path>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0 ..."></path>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-base-300" />

            {/* Copyright */}
            <div className="text-center text-sm text-base-content/70">
                © {new Date().getFullYear()} Movies Galaxy Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
