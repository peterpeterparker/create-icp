import type {IcrcAccount} from '@dfinity/oisy-wallet-signer';
import {IcpWallet} from '@dfinity/oisy-wallet-signer/icp-wallet';
import {createContext, useContext, useState} from 'react';

type WalletContextProviderProps = {
  children: React.ReactNode;
};

type WalletContext = {
  wallet: IcpWallet;
  accounts: IcrcAccount[];
};

type OptionWalletContext = WalletContext | undefined | null;

type WalletContextProviderState = {
  context: OptionWalletContext;
  setContext: (data: OptionWalletContext) => void;
};

const initialState: WalletContextProviderState = {
  context: undefined,
  setContext: () => null
};

const WalletContextProviderContext = createContext<WalletContextProviderState>(initialState);

export function WalletProvider({children}: WalletContextProviderProps) {
  const [context, setWalletContext] = useState<OptionWalletContext>(undefined);

  const value = {
    context,
    setContext: (context: OptionWalletContext) => {
      setWalletContext(context);
    }
  };

  return (
    <WalletContextProviderContext.Provider value={value}>
      {children}
    </WalletContextProviderContext.Provider>
  );
}

export const useWalletContext = () => {
  const context = useContext(WalletContextProviderContext);

  if (context === undefined)
    throw new Error('useWalletContext must be used within a WalletContextProviderContext');

  return context;
};
