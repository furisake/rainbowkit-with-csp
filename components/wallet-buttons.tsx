'use client'

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletButtons() {
    return (
        <div>
            <ConnectButton />
            <br />
            <br />
            <ConnectButton.Custom>
                {({ openConnectModal }) => (
                    <button onClick={openConnectModal} className="border border-black">Custom Button with no inline-style also causes an error</button>
                )}
            </ConnectButton.Custom>
        </div>
    );
}
