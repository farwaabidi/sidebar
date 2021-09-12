import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'General Journal',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'T Accounts',
    path: '/tacc',
    cName: 'nav-text'
  },
  {
    title: 'Trial Balance',
    path: '/trial', 
    cName: 'nav-text'
  },
  {
    title: 'Net Income',
    path: '/income',
    cName: 'nav-text'
  },
  {
    title: 'Owner Equity',
    path: '/',
    cName: 'nav-text'
  },
  {
    title: 'Balance Sheet',
    path: '/',  
    cName: 'nav-text'
  }
];