import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider, darkTheme, lightTheme, type Theme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { defineChain } from 'viem';
import { useTheme } from './ThemeContext';

export const hashkeyChain = defineChain({
  id: 133,
  name: 'HashKey Chain',
  network: 'hashkey',
  nativeCurrency: {
    decimals: 18,
    name: 'HashKey Token',
    symbol: 'HSK',
  },
  rpcUrls: {
    default: {
      http: ['https://https://testnet.hsk.xyz'],
    },
    public: {
      http: ['https://https://testnet.hsk.xyz'],
    },
  },
  blockExplorers: {
    default: { name: 'HashKey Explorer', url: 'https://hashkey.blockscout.com' },
  },
});

const config = getDefaultConfig({
  appName: 'Institutional RWA Dashboard',
  projectId: '00000000000000000000000000000000', // Mock projectId
  chains: [hashkeyChain],
  ssr: false,
});

const queryClient = new QueryClient();

const customDarkTheme: Theme = {
  ...darkTheme(),
  colors: {
    ...darkTheme().colors,
    accentColor: '#A29BFE',
    accentColorForeground: '#FFFFFF',
    connectButtonBackground: '#1A1A2E',
    connectButtonInnerBackground: '#2D2B55',
    connectButtonText: '#E8E8F0',
    modalBackground: '#1A1A2E',
    modalBorder: '#2D2D44',
    modalText: '#E8E8F0',
    modalTextSecondary: '#9CA3AF',
    profileAction: '#2D2B55',
    profileActionHover: '#3D3B65',
    profileForeground: '#1A1A2E',
    closeButton: '#9CA3AF',
    closeButtonBackground: '#2D2D44',
    generalBorder: '#2D2D44',
    generalBorderDim: '#2D2D44',
    actionButtonBorder: '#2D2D44',
    actionButtonBorderMobile: '#2D2D44',
    actionButtonSecondaryBackground: '#2D2B55',
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  radii: {
    ...darkTheme().radii,
    actionButton: '12px',
    connectButton: '12px',
    menuButton: '12px',
    modal: '16px',
    modalMobile: '16px',
  },
  shadows: {
    ...darkTheme().shadows,
    connectButton: '0 2px 8px rgba(108, 92, 231, 0.15)',
    dialog: '0 8px 24px rgba(0, 0, 0, 0.4)',
    profileDetailsAction: '0 2px 6px rgba(0, 0, 0, 0.2)',
    selectedOption: '0 2px 6px rgba(108, 92, 231, 0.2)',
    selectedWallet: '0 2px 6px rgba(108, 92, 231, 0.2)',
    walletLogo: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
};

const customLightTheme: Theme = {
  ...lightTheme(),
  colors: {
    ...lightTheme().colors,
    accentColor: '#6C5CE7',
    accentColorForeground: '#FFFFFF',
    connectButtonBackground: '#FFFFFF',
    connectButtonInnerBackground: '#F0EEFF',
    connectButtonText: '#1A1A2E',
    modalBackground: '#FFFFFF',
    modalBorder: '#E8ECF1',
    modalText: '#1A1A2E',
    modalTextSecondary: '#6B7280',
    profileAction: '#F0EEFF',
    profileActionHover: '#E0DEFF',
    profileForeground: '#FFFFFF',
    closeButton: '#6B7280',
    closeButtonBackground: '#E8ECF1',
    generalBorder: '#E8ECF1',
    generalBorderDim: '#E8ECF1',
    actionButtonBorder: '#E8ECF1',
    actionButtonBorderMobile: '#E8ECF1',
    actionButtonSecondaryBackground: '#F0EEFF',
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  radii: {
    ...lightTheme().radii,
    actionButton: '12px',
    connectButton: '12px',
    menuButton: '12px',
    modal: '16px',
    modalMobile: '16px',
  },
  shadows: {
    ...lightTheme().shadows,
    connectButton: '0 2px 8px rgba(108, 92, 231, 0.06)',
    dialog: '0 8px 24px rgba(0, 0, 0, 0.08)',
    profileDetailsAction: '0 2px 6px rgba(0, 0, 0, 0.04)',
    selectedOption: '0 2px 6px rgba(108, 92, 231, 0.1)',
    selectedWallet: '0 2px 6px rgba(108, 92, 231, 0.1)',
    walletLogo: '0 2px 8px rgba(0, 0, 0, 0.06)',
  },
};

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={isDark ? customDarkTheme : customLightTheme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
