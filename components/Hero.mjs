export default function Hero() {
    return (
      <div className="h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/media/hero-bg.jpg')" }}>
        <h1 className="text-4xl font-bold">PupsN: Your Pet’s Lifelong Companion</h1>
        <p className="text-lg mt-4">Monitor your pet’s health, store their memories, and connect with a pet-loving community.</p>
        <a href="/signup" className="mt-6 px-6 py-3 bg-orange-500 rounded text-white font-semibold">Join Us</a>
      </div>
    );
  }
  