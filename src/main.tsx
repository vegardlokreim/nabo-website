import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useMediaQuery } from 'react-responsive';

import './index.css';
import MobileApp from './mobile/MobileApp.tsx';
import DesktopApp from "./desktop/DesktopApp.tsx";

function Main() {
  const isMobile = useMediaQuery({ query: '(max-width: 200px)' });

  return (
    <div>
      {isMobile ? <MobileApp /> : <DesktopApp />}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);