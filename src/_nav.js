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
        name: 'Employees List',
        to: '/employee/employeetable',
      },
      {
        component: CNavItem,
        name: 'Add Employee',
        to: '/employee/add',
      },
      {
        component: CNavItem,
        name: 'Employee List',
        to: '/employee/emplyeelist',
      },
      {
        component: CNavItem,
        name: 'Manager List',
        to: '/manager/managertable',
      },
      {
        component: CNavItem,
        name: 'Add Manager',
        to: '/manager/add',
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
      {
        component: CNavItem,
        name: 'Add Company',
        to: '/company/add',
      },
    ],
  },
]

export default _nav
