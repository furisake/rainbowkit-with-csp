"use client"

import { type ReactNode } from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, type State } from 'wagmi';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import { config } from './config';

const queryClient = new QueryClient();

type Props = {
    children: ReactNode,
    initialState: State | undefined,
}

export function Provider({ children, initialState }: Props) {
    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
