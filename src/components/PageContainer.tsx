import { FC, ReactNode } from 'react';
import useScrollToTop from './useScrollToTop';

interface PageContainerProps<T> {
    children: T;
}

const PageContainer: FC<PageContainerProps<ReactNode>> = ({ children }) => {
    useScrollToTop();

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden mb-12">
            <div className="layout-container flex h-full grow flex-col">
                <div className="small:px-4 medium:px-20 large:px-80 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col flex-1">
                        <div className="@container">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageContainer;