import { useEffect } from 'react';

// Custom hook to scroll to top on component mount
const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
};

export default useScrollToTop;