import React from 'react'

const EmployeeTable = React.lazy(() => import('./views/pages/employeeTable/EmployeeTable'))
const EmployeeDetail = React.lazy(() => import('./views/pages/employeeDetail/EmployeeDetail'))
const News = React.lazy(() => import('./views/pages/news/News'))
const CompanyTable = React.lazy(() => import('./views/pages/companyTable/CompanyTable'))
const CompanyList = React.lazy(() => import('./views/pages/companyTable/CompanyList'))
const CompanyDetail = React.lazy(() => import('./views/pages/companyDetail/CompanyDetail'))
const PasswordReset = React.lazy(() => import('./views/pages/passwordreset/PasswordReset'))
const EmployeeList = React.lazy(() => import('./views/pages/employeeTable/EmployeeList'))
const ManagerDetail = React.lazy(() => import('./views/pages/managerTable/ManagerDetail'))
const ManagerTable = React.lazy(() => import('./views/pages/managerTable/ManagerTable'))
const ManagerList = React.lazy(() => import('./views/pages/managerTable/ManagerList'))
const SaveManager = React.lazy(() => import('./views/pages/saveUser/SaveManager'))
const SaveEmployee = React.lazy(() => import('./views/pages/saveUser/SaveEmployee'))
const SaveCompany = React.lazy(() => import('./views/pages/saveCompany/SaveCompany'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Profile = React.lazy(() => import('./views/pages/profile/Profile'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/employee/employeetable', name: 'Employee Table', element: EmployeeTable },
  { path: '/company/companytable', name: 'Company Table', element: CompanyTable },
  { path: '/company/companylist', name: 'Company List', element: CompanyList },
  { path: '/company/companydetail/:id', name: 'Company Detail', element: CompanyDetail },
  { path: '/createpassword', name: 'New Password Page', element: PasswordReset },
  { path: '/employee/employeelist', name: 'Employee List', element: EmployeeList },
  { path: '/manager/managertable', name: 'Manager List', element: ManagerTable },
  { path: '/manager/managerlist', name: 'Manager List', element: ManagerList },
  { path: '/page500', name: 'page 500', element: Page500 },
  { path: '/login', name: 'login', element: Login },
  { path: '/profile/:id', name: 'profile', element: Profile },

  {
    path: '/employee/employeedetail/:id',
    name: 'Employee Detail',
    element: EmployeeDetail,
  },
  {
    path: '/manager/managerdetail/:id',
    name: 'Manager Table',
    element: ManagerDetail,
  },

  { path: '/savemanager', name: 'Save Manager', element: SaveManager },
  { path: '/saveemployee', name: 'Save User', element: SaveEmployee },
  { path: '/saveCompany', name: 'Save Company', element: SaveCompany },
  { path: '/*', name: 'News', element: News },
]
export default routes
