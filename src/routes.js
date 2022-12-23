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
<<<<<<< HEAD
const SaveManager = React.lazy(() => import('./views/pages/saveUser/SaveManager'))
=======
const SaveUser = React.lazy(() => import('./views/pages/saveUser/SaveUser'))
const SaveCompany = React.lazy(() => import('./views/pages/saveCompany/SaveCompany'))
>>>>>>> 8cc91448f29c041d275f7e7ea2e2374ce5d39504
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/employee/employeetable', name: 'Employee Table', element: EmployeeTable },
  { path: '/company/companytable', name: 'Company Table', element: CompanyTable },
  { path: '/company/companylist', name: 'Company List', element: CompanyList },
  { path: '/company/companydetail/:id', name: 'Company Detail', element: CompanyDetail },
  { path: '/createpassword', name: 'New Password Page', element: PasswordReset },
  { path: '/employee/emplyeelist', name: 'Employee List', element: EmployeeList },
  { path: '/manager/managertable', name: 'Manager List', element: ManagerTable },
  { path: '/manager/managerlist', name: 'Manager List', element: ManagerList },
  { path: '/page500', name: 'page 500', element: Page500 },

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
<<<<<<< HEAD
  { path: '/savemanager', name: 'Save Manager', element: SaveManager },

=======
  { path: '/saveuser', name: 'Save User', element: SaveUser },
  { path: '/saveCompany', name: 'Save Company', element: SaveCompany },
>>>>>>> 8cc91448f29c041d275f7e7ea2e2374ce5d39504
  { path: '/*', name: 'News', element: News },
]
export default routes
