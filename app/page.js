import AppBar from "./components/appbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <AppBar />
        <main className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-lg text-center text-white">
                <h2 className="font-serif text-4xl font-bold leading-snug">
                    Hi, I&#39;m Annie. <br /> Developer. <br /> Art Historian. <br /> Pizza Lover. Mother. <br /> Aries. Irish.
                </h2>
            </div>
        </main>
        {/* <style jsx>{`
                @media (max-width: 640px) {
                    .bg-cover {
                        background-image: url('/assets/backgroundmobile.jpg');
                    }
                }
            `}</style> */}
   </div>
);
};
