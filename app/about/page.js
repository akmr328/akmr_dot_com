import AppBar from "../components/appbar";

const About = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/background1.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-20"></div> 
            <AppBar />
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-lg text-center text-white mt-16"> 
                    <h2 className="font-sans text-xl bg center bg-black opacity-70 font-light leading-snug">
                        After studying Art History and Medieval History in undergrad and receieving an MA in Art Business, I spent 6 years working in the art world in New York. I worked as a specialist in rare book and maps, feeding my love of history and art. Following the onset of the pandemic, I was craving more stability in my career. A friend suggested I try coding. I downloaded an app intended to teach children to code, paid for a subscription and gave myself a month of 20 minutes a day to see if I really liked it. I found those 20 minutes turning into hours. I then enrolled in an intensive bootcamp program and the rest, as they say, is history. 
                        <br/>
                        ---
                    </h2>
                </div>
            </main>
        </div>
    );
};

export default About;