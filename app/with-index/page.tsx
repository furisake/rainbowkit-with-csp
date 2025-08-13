import { cookieToInitialState } from "wagmi";
import { Provider } from "../providers";
import { headers } from "next/headers";
import { config } from "../config";
import WalletButtons from "@/components/wallet-buttons";

export default async function Home() {
  const initialState = cookieToInitialState(
    config,
    (await headers()).get('cookie')
  )

  return (
    <Provider initialState={initialState}>
      The <a href="https://github.com/rainbow-me/rainbowkit/issues/1256#issuecomment-1712923324">solution</a> in the GitHub issue does not work.
      <WalletButtons />
    </Provider>
  );
}
