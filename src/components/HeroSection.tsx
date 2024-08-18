import React from 'react';

interface HeroProps {
    backgroundImage: string;
    heading: string;
    text: string;
    buttonText: string;
    buttonLink?: string;
}

const HeroSection: React.FC<HeroProps> = ({ backgroundImage, heading, text, buttonText }) => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat h-[40vh]">
            <img src={backgroundImage} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-9">
                <h2 className="text-4xl font-bold text-white">{heading}</h2>
                <p className="mt-4 text-lg text-white">{text}</p>
                <button className="mt-6 bg-[#B2212B] text-white font-bold py-2 px-4 rounded">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default HeroSection;