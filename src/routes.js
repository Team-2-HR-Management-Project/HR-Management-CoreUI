import React from 'react'

const Login = React.lazy(() => import('./views/pages/login/Login'))
const EmployeeTable = React.lazy(() => import('./views/pages/employeeTable/EmployeeTable'))
const EmployeeDetail = React.lazy(() => import('./views/pages/employeeDetail/EmployeeDetail'))
const News = React.lazy(() => import('./views/pages/news/News'))
const CompanyTable = React.lazy(() => import('./views/pages/companyTable/CompanyTable'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/login', name: 'Login', element: Login },
  { path: '/employee/employeetable', name: 'Employee Table', element: EmployeeTable },
  { path: '/company/companytable', name: 'Company Table', element: CompanyTable },
  {
    path: '/employee/employeedetail/:id',
    name: 'Employee Detail',
    element: EmployeeDetail,
  },
  { path: '/*', name: 'News', element: News },
]

export default routes
