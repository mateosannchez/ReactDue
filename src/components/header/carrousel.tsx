import { useState, useEffect } from 'react';

const words = ["Argentina", "Brasil", "Uruguay", "Perú", "Chile", "Paraguay", "Colombia"]; 

const Carousel = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Cambia la palabra cada 2 segundos

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carousel">
            <div className="words-container" style={{ transform: `translateX(-${currentWordIndex * 100}%)` }}>
                {words.map((word, index) => (
                    <div key={index} className="word">
                        {word}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
