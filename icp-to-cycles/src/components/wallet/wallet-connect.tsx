import {useWalletContext} from '@/components/providers/wallet-provider.tsx';
import {Button} from '@/components/ui/button.tsx';
import {CONTAINER, OISY_SIGN_URL} from '@/constants/app.constants.ts';
import {IcpWallet} from '@dfinity/oisy-wallet-signer/icp-wallet';
import {isNullish} from '@dfinity/utils';
import {toast} from 'sonner';

export function WalletConnect() {
  const {setContext, context} = useWalletContext();

  const connectOISY = async () => {
    await connect(OISY_SIGN_URL);
  };

  const connect = async (url: string) => {
    await disconnect();

    const wallet = await IcpWallet.connect({
      url,
      host: CONTAINER,
      onDisconnect
    });

    const {allPermissionsGranted} = await wallet.requestPermissionsNotGranted();

    if (!allPermissionsGranted) {
      toast.warning('Permissions have not been granted.');
      return;
    }

    const accounts = await wallet.accounts();

    if (isNullish(accounts) || accounts.length === 0) {
      toast.error('The wallet did not provide any account.');
      await disconnect();
      return;
    }

    setContext({wallet, accounts});
  };

  const onDisconnect = () => {
    setContext(null);
  };

  const disconnect = async () => {
    await context?.wallet?.disconnect();
  };

  return (
    <Button type="button" onClick={connectOISY}>
      Connect OISY Wallet
    </Button>
  );
}
