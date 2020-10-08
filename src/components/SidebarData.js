import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Status',
    path: '/',
    icon: <AiIcons.AiOutlineAppstore />,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/payment',
    icon: <AiIcons.AiOutlineCreditCard />,
    cName: 'nav-text'
  },
  {
    title: 'Edit',
    path: '/edit',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Sign out',
    path: '/signout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];