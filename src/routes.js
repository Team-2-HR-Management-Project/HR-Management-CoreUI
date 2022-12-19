import React from 'react'

const Login = React.lazy(() => import('./views/pages/login/Login'))
const EmployeeTable = React.lazy(() => import('./views/pages/employeeTable/EmployeeTable'))
const EmployeeDetail = React.lazy(() => import('./views/pages/employeeDetail/EmployeeDetail'))
const News = React.lazy(() => import('./views/pages/news/News'))
const CompanyTable = React.lazy(() => import('./views/pages/companyTable/CompanyTable'))
const CompanyList = React.lazy(() => import('./views/pages/companyTable/CompanyList'))
const PasswordReset = React.lazy(() => import('./views/pages/passwordreset/PasswordReset'))
const EmployeeList = React.lazy(() => import('./views/pages/employeeTable/EmployeeList'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/login', name: 'Login', element: Login },
  { path: '/employee/employeetable', name: 'Employee Table', element: EmployeeTable },
  { path: '/company/companytable', name: 'Company Table', element: CompanyTable },
  { path: '/company/companylist', name: 'Company List', element: CompanyList },

  { path: '/createpassword', name: 'New Password Page', element: PasswordReset },
  { path: '/employee/emplyeelist', name: 'Employee List', element: EmployeeList },

  {
    path: '/employee/employeedetail/:id',
    name: 'Employee Detail',
    element: EmployeeDetail,
  },
  { path: '/*', name: 'News', element: News },
]

export default routes
