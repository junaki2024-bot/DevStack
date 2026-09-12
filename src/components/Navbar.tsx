import logo from '../assets/logo-text.png' 

const Navbar = () => { 
    return (
        <nav className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
                <img src={logo} alt="" />
                {/* Navbar */}
                <div className="flex gap-8 text-gray-600">
                   <a href="#home">Home</a>
                   <a href="#tecnologies">Tecnologies</a>
                   <a href="#project">Project</a>
                   <a href="#about">About</a>
                   <a href="#contact">Contact</a>
                </div>
                {/* Button */}
                <div className="flex items-center gap-4">
                    <button className="text-gray-700">Sign In</button>
                     <button className="gradient-btn text-gray-700 bg-pink-500 px-6 py-2 rounded-full">  Sign Up</button>
            </div>
        </div>
        </nav>
    );
};
export default Navbar; 