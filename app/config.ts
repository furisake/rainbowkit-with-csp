'use client'

import { http } from "viem"
import { mainnet } from "viem/chains";
import { cookieStorage, createConfig, createStorage } from "wagmi";
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
    metaMaskWallet,
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
    [
        {
            groupName: 'Recommended',
            wallets: [metaMaskWallet],
        },
    ],
    {
        appName: 'demo',
        projectId: 'demo',
    }
);

export const config = createConfig({
    connectors,
    chains: [mainnet],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [mainnet.id]: http('http://example.com'),
    },
});
