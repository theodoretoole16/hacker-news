import React from 'react';

import Header from '../../../components/header';

export const metadata = {
  title: 'Hacker News - User',
};

export default async function User({ children }: React.PropsWithChildren) {
  return (
    <>
      <meta name="robots" content="noindex" />
      <Header>User</Header>
      {children}
    </>
  );
}
