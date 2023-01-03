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
    name: 'MANAGER',
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
        name: 'Employee Card',
        to: '/employee/employeetable',
      },
      {
        component: CNavItem,
        name: 'Employee List',
        to: '/employee/employeelist',
      },
    ],
  },
]

export default _nav
