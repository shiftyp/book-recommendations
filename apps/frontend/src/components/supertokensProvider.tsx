'use client';
import React from 'react';
import { SuperTokensWrapper } from 'supertokens-auth-react';
import SuperTokensReact from 'supertokens-auth-react';
import { frontendConfig, setRouter } from '../app/config/frontend';
import { usePathname, useRouter } from 'next/navigation';

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SuperTokensProvider: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  setRouter(useRouter(), usePathname() || window.location.pathname);

  // @ts-expect-error because I said so
  return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
};