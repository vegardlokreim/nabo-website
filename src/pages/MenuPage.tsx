import React, { useState, useEffect, useRef } from 'react';
import Menu from "../components/Menu/Menu";
import PageContainer from "../components/PageContainer";
import { useMediaQuery } from 'react-responsive';

interface MenuCategory {
    title: string;
    description: string;
    category: string;
}

const menuCategories: MenuCategory[] = [
    { title: "Asian soups and tapas", description: "", category: "asianSoupAndTapas" },
    { title: "Nye Dim Sum", description: "6 pieces", category: "dimsum" },
    { title: "Small asian dishes", description: "", category: "smallAsianDishes" },
    { title: "Raw fish appetizers", description: "6 pieces", category: "rawFishAppetizers" },
    { title: "Maki rolls", description: "6 pieces", category: "makiRolls" },
    { title: "Sushi & sashimi dinner", description: "", category: "sushiDinner" },
    { title: "Wok and Stir fry", description: "", category: "wokAndStirFry" },
    { title: "Wok Fried Noodles And Rice", description: "", category: "wokFriedNoodlesAndRice" },
    { title: "Thai spicy soup", description: "", category: "thaiSpicyNoodleSoup" },
    { title: "Choi's gunkan sushi", description: "2 pieces", category: "choisGunkanSushi" },
    { title: "Choi's nigiri", description: "2 pieces", category: "choisNigiri" },
    { title: "Choi's sashimi", description: "3 pieces", category: "choisSashimi" },
    { title: "Drikke", description: "", category: "brus" },
    { title: "Tilbehør", description: "", category: "tilbehor" },
    { title: "Saus", description: "", category: "saus" }
];

const MenuPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const isMobile = useMediaQuery({ query: '(max-width: 901px)' });


    useEffect(() => {
        const handleScroll = () => {
            let currentCategory: string | null = null;
            for (const category of menuCategories) {
                const element = categoryRefs.current[category.category];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentCategory = category.category;
                        break;
                    }
                }
            }
            setActiveCategory(currentCategory);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCategoryClick = (category: string) => {
        const element = categoryRefs.current[category];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <PageContainer>
                {menuCategories.map((menu, index) => (
                    <div key={index} ref={el => categoryRefs.current[menu.category] = el}>
                        <Menu
                            title={menu.title}
                            description={menu.description}
                            backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png"
                            category={menu.category}
                        />
                    </div>
                ))}




            </PageContainer>
            <div className={`fixed ${isMobile ? 'bottom-[58px]' : 'bottom-0'} w-full shadow-lg border-t-2 bg-white flex justify-start text-black text-sm z-50 overflow-x-auto`}>
                <div className="flex">
                    {menuCategories.map((menu) => (
                        <div
                            key={menu.category}
                            className={`p-8 cursor-pointer transition-colors whitespace-nowrap ${activeCategory === menu.category ? 'text-[#B2212B]' : ''}`}
                            onClick={() => handleCategoryClick(menu.category)}
                        >
                            {menu.title}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MenuPage;
