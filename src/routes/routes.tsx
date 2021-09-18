import React from 'react';

type Route = {
  name: string;
  component: any;
  key?: number;
};

let pages: Route[] = [
  {
    name: '/home/index',
    component: require('../pages/home/index/index').default,
  },
  {
    name: '/user/index',
    component: require('../pages/user/index/index').default,
  },
];

export {pages};
