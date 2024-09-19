import React, { useState, useEffect, useRef } from 'react';
import Menu from "../components/Menu/Menu";
import PageContainer from "../components/PageContainer";
import { useMediaQuery } from 'react-responsive';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


const MenuPage: React.FC = () => {

    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        const takeawayRef = collection(db, 'takeaway');
        const unsubscribe = onSnapshot(takeawayRef, (snapshot) => {
            const takeaway = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as any));

            const sortedTakeaway = takeaway.sort((a, b) => (a.order || 0) - (b.order || 0));

            setCategories(sortedTakeaway.map(category => category.category))

            setMenuItems(sortedTakeaway);
        });

        return () => unsubscribe();
    }, []);


    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const isMobile = useMediaQuery({ query: '(max-width: 901px)' });


    useEffect(() => {
        const handleScroll = () => {
            let currentCategory: string | null = null;
            for (const category of categories) {
                const element = categoryRefs.current[category];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentCategory = category;
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
                {menuItems.map((menu, index) => (
                    <div key={index} ref={el => categoryRefs.current[menu.category] = el}>
                        <Menu
                            title={menu.category}
                            description={menu.description}
                            backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png"
                            items={menu.items}
                            category={menu.id}
                        />
                    </div>
                ))}

            </PageContainer>
            <div className={`fixed ${isMobile ? 'bottom-[58px]' : 'bottom-0'} w-full shadow-lg border-t-2 bg-white flex justify-start text-black text-sm z-50 overflow-x-auto`}>
                <div className="flex">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className={`p-4 cursor-pointer transition-colors whitespace-nowrap ${activeCategory === category ? 'text-[#B2212B]' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MenuPage;
