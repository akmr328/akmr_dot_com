import AppBar from "./ui/appbar";

// const backgroundImages = [
//   'assets/background1.jpg',
//   'assets/background2.jpg',
//   'assets/background3.jpg',
//   'assets/background4.jpg',
// ]

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/background1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <AppBar />
        <main className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-lg text-center text-white">
                <h2 className="font-serif text-4xl font-bold leading-snug">
                    Hi, I'm Annie. <br /> Developer. <br /> Art Historian. <br /> Pizza Lover. Mother. <br /> Aries. Irish.
                </h2>
            </div>
        </main>
    </div>
);
};
