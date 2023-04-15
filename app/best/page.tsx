import React from 'react';
import { Metadata } from 'next';

import { getList } from '../../helpers/fetch';
import Header from '../../components/header';
import ListDetail from '../../components/list-detail';

import styles2 from '../../components/list-item.module.css';

export const metadata: Metadata = {
  title: 'Hacker News - Best',
};

export default async function Best() {
  const getListData = getList('beststories');
  const [list] = await Promise.all([getListData]);

  return (
    <>
      <Header>Best</Header>
      {list ? (
        <ListDetail items={list.slice(0, 30)} url={false} />
      ) : (
        <ul>
          <li className={styles2.li}>Error loading item.</li>
        </ul>
      )}
    </>
  );
}
