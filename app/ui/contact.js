const Contact = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/background1.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
            <AppBar />
            <main className="flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-lg text-center text-white mt-16"> {/* Add margin-top to prevent overlap */}
                    <h2 className="font-sans text-4xl font-light leading-snug">
                        Contact me here
                    </h2>
                </div>
            </main>
        </div>
    );
};


export default Contact;