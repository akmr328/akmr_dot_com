import AppBar from "../components/appbar";


const Contact = () => {
    return (
        <div className="relative min-h-screen">
           <div className="absolute inset-0 bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black opacity-20"></div> 
            <AppBar />
            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center text-center text-white mt-16 space-y-4"> 
                    <a 
                        href="mailto:akm328@gmail.com" 
                        className="text-white text-xl font-serif"
                    >
                        &#97;&#107;&#109;&#51;&#50;&#56;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/akmr328/" 
                        className="text-white text-xl font-serif" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        linkedin
                    </a>
                    <a 
                        href="https://github.com/akmr328" 
                        className="text-white text-xl font-serif" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                </div>
            </main>
        </div>
    );
};


export default Contact;