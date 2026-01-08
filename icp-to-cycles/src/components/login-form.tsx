import {useWalletContext} from '@/components/providers/wallet-provider.tsx';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {WalletApprove} from '@/components/wallet/wallet-approve.tsx';
import {WalletConnect} from '@/components/wallet/wallet-connect.tsx';
import {cn} from '@/lib/utils';
import {isNullish} from '@dfinity/utils';

export function LoginForm({className, ...props}: React.ComponentProps<'div'>) {
  const {context} = useWalletContext();

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>ICP to Cycles</CardTitle>
          <CardDescription>Swap ICP to an account on the Cycles ledger</CardDescription>
        </CardHeader>
        <CardContent>{isNullish(context) ? <WalletConnect /> : <WalletApprove />}</CardContent>
      </Card>
    </div>
  );
}
