import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
    backgroundImage: string;
    heading: string;
    text: string;
    buttonText?: string;
    buttonLink?: string;
    buttonText2?: string;
    buttonLink2?: string;
}

const HeroSection: React.FC<HeroProps> = ({ backgroundImage, heading, text, buttonText, buttonLink, buttonText2, buttonLink2 }) => {
    const navigate = useNavigate()
    const handleButtonClick = () => {
        if (buttonLink) navigate(buttonLink)
    }
    const handleButtonClick2 = () => {
        if (buttonLink2) navigate(buttonLink2)
    }
    return (
        <div className="rounded-lg relative bg-cover bg-center bg-no-repeat h-[40vh] mb-4">
            <img src={backgroundImage} alt="Hero Background" className="rounded-lg absolute inset-0 w-full h-full object-cover" />
            <div className="rounded-lg absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-9">
                <h2 className="text-4xl font-bold text-white">{heading}</h2>
                <p className="large:px-40 medium:px-12 small:px-8 mt-4 text-lg text-white">{text}</p>
                <div className="flex flex-row gap-4">
                    {
                        (buttonText && buttonLink) && <button className="mt-6 bg-[#B2212B] text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
                            {buttonText}
                        </button>
                    }
                    {
                        (buttonText2 && buttonLink2) && <button className="mt-6 bg-[#B2212B] text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick2}>
                            {buttonText2}
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroSection;