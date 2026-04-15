import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { ReportProvider } from './contexts/ReportContext';
import { Web3Provider } from './contexts/Web3Provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Web3Provider>
        <SidebarProvider>
          <ReportProvider>
            <App />
          </ReportProvider>
        </SidebarProvider>
      </Web3Provider>
    </ThemeProvider>
  </StrictMode>
);
