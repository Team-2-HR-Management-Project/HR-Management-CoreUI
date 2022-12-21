import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilLockLocked,
  cilMagnifyingGlass,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    to: '/home',
  },
  {
    component: CNavTitle,
    name: 'ADMIN',
  },
  {
    component: CNavGroup,
    name: 'News',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'News',
        to: '/news',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Employees',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User Card',
        to: '/employee/employeetable',
      },
      {
        component: CNavItem,
        name: 'User List',
        to: '/employee/emplyeelist',
      },
      {
        component: CNavItem,
        name: 'Admin Card',
        to: '*',
      },
      {
        component: CNavItem,
        name: 'Admin List',
        to: '*',
      },
      {
        component: CNavItem,
        name: 'Manager Card',
        to: '/manager/managertable',
      },
      {
        component: CNavItem,
        name: 'Manager List',
        to: '/manager/managerlist',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Company',
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Company List',
        to: '/company/companylist',
      },
    ],
  },
]

export default _nav
