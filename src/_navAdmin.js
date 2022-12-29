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
    name: 'User',
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
    ],
  },

  {
    component: CNavGroup,
    name: 'Manager',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
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
]

export default _nav
