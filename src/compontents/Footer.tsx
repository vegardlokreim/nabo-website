export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="flex gap-2 bg-white">
                <a className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#181411]" href="/">
                    <div className="text-[#181411] flex h- items-center justify-center" data-icon="House" data-size="24px" data-weight="fill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                            ></path>
                        </svg>
                    </div>
                    <p className="text-[#181411] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
                </a>
                <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#897261]" href="/meny">
                    <div className="text-[#897261] flex h-8 items-center justify-center" data-icon="ShoppingBag" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
                            ></path>
                        </svg>
                    </div>
                    <p className="text-[#897261] text-xs font-medium leading-normal tracking-[0.015em]">Order</p>
                </a>
                <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#897261]" href="#">
                    <div className="text-[#897261] flex h-8 items-center justify-center" data-icon="PhoneCall" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z"
                            ></path>
                        </svg>
                    </div>
                    <p className="text-[#897261] text-xs font-medium leading-normal tracking-[0.015em]">Contact</p>
                </a>
                <a className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#897261]" href="#">
                    <div className="text-[#897261] flex h-8 items-center justify-center" data-icon="UserCircle" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"
                            ></path>
                        </svg>
                    </div>
                    <p className="text-[#897261] text-xs font-medium leading-normal tracking-[0.015em]">About</p>
                </a>
            </div>
        </footer>
    )
}