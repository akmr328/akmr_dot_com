import Link from 'next/link';

const AppBar = () => {
    return (
        <div className="fixed top-0 w-full flex flex-row justify-end bg-gray-200 bg-opacity-10 px-4 py-2 border-white border-2">
            <a href="/assets/AKMR_Resume.pdf" className="mx-2 text-white text-lg font-light" download="Annie_Morony_Resume.pdf">resume</a>
            <Link href="/contact" className="mx-2 text-white text-lg font-light">contact</Link>
            <Link href="/about" className="mx-2 text-white text-lg font-light">about</Link>
            <Link href="/" className="mx-2 text-white text-lg font-light">home</Link>
        </div>
    );
};

export default AppBar;