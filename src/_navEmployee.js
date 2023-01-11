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
  cilGem,
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
    name: 'EMPLOYEE',
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
    name: 'Expenses',
    icon: <CIcon icon={cilGem} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Expenses List',
        to: '/expenses/allmyexpenses',
      },
      {
        component: CNavItem,
        name: 'Create Expense',
        to: '/expenses/createexpenses',
      },
    ],
  },
]

export default _nav
