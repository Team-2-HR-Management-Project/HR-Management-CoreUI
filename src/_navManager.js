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
    name: 'My Colleague',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Colleague',
        to: '/mycolleague',
      },
      {
        component: CNavItem,
        name: 'Profile',
        to: '/profile',
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
  {
    component: CNavGroup,
    name: 'My Leaves',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Leaves',
        to: '/leaves/allmyleaves',
      },
      {
        component: CNavItem,
        name: 'Create Leave',
        to: '/leaves/createleave',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Employee Leaves',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Leave List',
        to: '/leaves/allleaves',
      },
    ],
  },
]

export default _nav
