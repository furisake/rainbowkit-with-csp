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
      Without CSP. No error will occur.
      <br />
      <br />
      <WalletButtons />
    </Provider>
  );
}
