'use client';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from '../client';

export const Providers = ({children}: {children : React.ReactNode}) => {
    return <ApolloProvider client={client}> {children}</ApolloProvider>;
}