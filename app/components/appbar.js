import Link from 'next/link';

const AppBar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-gray-200 bg-opacity-20 px-4 py-2 border-white border-2">
           <h2 className="playfair-display text-4xl text-white">AKMR</h2>
            <div className="flex">
                <Link href="/" className="mx-2 text-white text-lg font-serif">home</Link>
                <a href="/assets/AKMR_Resume.pdf" className="mx-2 text-white text-lg font-serif" download="Annie_Morony_Resume.pdf">resume</a>
                <Link href="/contact" className="mx-2 text-white text-lg font-serif">contact</Link>
                <Link href="/about" className="mx-2 text-white text-lg font-serif">about</Link>
            </div>
        </div>
    );
};

export default AppBar;