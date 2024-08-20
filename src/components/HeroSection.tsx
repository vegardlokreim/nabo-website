import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
    backgroundImage: string;
    heading: string;
    text: string;
    buttonText?: string;
    buttonLink?: string;
}

const HeroSection: React.FC<HeroProps> = ({ backgroundImage, heading, text, buttonText, buttonLink }) => {
    const navigate = useNavigate()
    const handleButtonClick = () => {
        if (buttonLink) navigate(buttonLink)
    }
    return (
        <div className="rounded-lg relative bg-cover bg-center bg-no-repeat h-[40vh] mb-4">
            <img src={backgroundImage} alt="Hero Background" className="rounded-lg absolute inset-0 w-full h-full object-cover" />
            <div className="rounded-lg absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-9">
                <h2 className="text-4xl font-bold text-white">{heading}</h2>
                <p className="large:px-40 medium:px-12 small:px-8 mt-4 text-lg text-white">{text}</p>
                {
                    (buttonText && buttonLink) && <button className="mt-6 bg-[#B2212B] text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
                        {buttonText}
                    </button>
                }
            </div>
        </div>
    );
};

export default HeroSection;