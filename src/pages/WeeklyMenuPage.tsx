import { useEffect, useState } from "react";
import { db } from '../../firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";
import WeeklyMenu from "../components/Menu/WeeklyMenu";
import PageContainer from "../components/PageContainer";
import AltHero from "../components/AltHero";

export function WeeklyMenuPage() {
    const [menuItems, setMenuItems] = useState<any[]>([]);

    useEffect(() => {
        const takeawayRef = collection(db, 'weeklyMenu');
        const unsubscribe = onSnapshot(takeawayRef, (snapshot) => {
            const weekly = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as any));

            // Sort by 'order' field
            const sortedWeekly = weekly.sort((a, b) => (a.order || 0) - (b.order || 0));

            // Rotate menu based on the current day of the week
            const rotatedMenu = rotateMenuBasedOnToday(sortedWeekly);

            setMenuItems(rotatedMenu);
        });

        return () => unsubscribe();
    }, []);

    // Helper function to rotate the menu
    const rotateMenuBasedOnToday = (menu: any[]) => {
        const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const todayIndex = new Date().getDay(); // Get current day index (0 = Sunday, 1 = Monday, etc.)

        // Find the index of the first day (today) in the menu array
        const todayMenuIndex = menu.findIndex(item => item.day.toLowerCase() === daysOfWeek[todayIndex]);

        if (todayMenuIndex === -1) return menu; // If today is not found, return original order

        // Rotate the menu so that today comes first
        const rotatedMenu = [...menu.slice(todayMenuIndex), ...menu.slice(0, todayMenuIndex)];

        return rotatedMenu;
    };

    return (
        <PageContainer>
            <div className="">
                <AltHero backgroundImg="https://cdn.usegalileo.ai/sdxl10/7aee91c2-b484-43ed-bd4f-e244cb72a736.png" text="" title="Ukesmeny" />
                {menuItems.map((menu) => (
                    <WeeklyMenu
                        key={menu.id}
                        title={menu.category}
                        description={menu.description}
                        backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png"
                        items={menu.items}
                        day={menu.day}
                        prefix={menu.prefix}
                    />
                ))}
            </div>

        </PageContainer>

    );
}
