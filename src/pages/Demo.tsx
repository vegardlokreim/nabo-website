import { useEffect, useState } from "react";
import { db } from '../../firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";
import WeeklyMenu from "../components/Menu/WeeklyMenu";

export function Demo() {
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [days, setDays] = useState<string[]>([])

    useEffect(() => {
        const takeawayRef = collection(db, 'weeklyMenu');
        const unsubscribe = onSnapshot(takeawayRef, (snapshot) => {
            const weekly = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as any));

            // Sort by 'order' field
            const sortedWeekly = weekly.sort((a, b) => (a.order || 0) - (b.order || 0));

            setMenuItems(sortedWeekly);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
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
    );
}
