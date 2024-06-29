"use client";

import Link from 'next/link';

const AppBar = () => {
    return (
        <div className="fixed top-0 left-0 z-50 right-0 flex justify-between items-center bg-gray-200 bg-opacity-20 px-4 py-2 border-white border-2">
           <Link href="/" className="playfair-display text-4xl text-white">AKMR</Link>
            <div className="flex">
                <Link href="/contact" className="mx-2 text-white text-lg font-serif">contact</Link>
                <Link href="/about" className="mx-2 text-white text-lg font-serif">about</Link>
                <a href="/assets/AKMR_Resume.pdf" className="mx-2 text-white text-lg font-serif" download="Annie_Morony_Resume.pdf">resume</a>
            </div>
            <style jsx>{`
                @media (max-width: 640px) {
                    .bg-cover {
                        background-image: url('/assets/backgroundmobile.jpg');
                    }
                }
            `}</style>
        </div>
    );
};

export default AppBar;