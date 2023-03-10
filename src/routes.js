import React from 'react'

const UserTable = React.lazy(() => import('./views/pages/userTable/UserTable'))
const UserList = React.lazy(() => import('./views/pages/userTable/UserList'))
const UserDetail = React.lazy(() => import('./views/pages/userDetail/UserDetail'))
const EmployeeTable = React.lazy(() => import('./views/pages/employeeTable/EmployeeTable'))
const EmployeeList = React.lazy(() => import('./views/pages/employeeTable/EmployeeList'))
const EmployeeDetail = React.lazy(() => import('./views/pages/employeeDetail/EmployeeDetail'))
const News = React.lazy(() => import('./views/pages/news/News'))
const CompanyTable = React.lazy(() => import('./views/pages/companyTable/CompanyTable'))
const CompanyList = React.lazy(() => import('./views/pages/companyTable/CompanyList'))
const CompanyDetail = React.lazy(() => import('./views/pages/companyDetail/CompanyDetail'))
const PasswordReset = React.lazy(() => import('./views/pages/passwordreset/PasswordReset'))
const ForgotPassword = React.lazy(() => import('./views/pages/forgetpassword/ForgotPassword'))
const ManagerDetail = React.lazy(() => import('./views/pages/managerTable/ManagerDetail'))
const ManagerTable = React.lazy(() => import('./views/pages/managerTable/ManagerTable'))
const ManagerList = React.lazy(() => import('./views/pages/managerTable/ManagerList'))
const SaveManager = React.lazy(() => import('./views/pages/saveUser/SaveManager'))
const SaveEmployee = React.lazy(() => import('./views/pages/saveUser/SaveEmployee'))
const SaveCompany = React.lazy(() => import('./views/pages/saveCompany/SaveCompany'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Profile = React.lazy(() => import('./views/pages/profile/Profile'))
const MyColleague = React.lazy(() => import('./views/pages/mycolleague/MyColleague'))
const AllMyLeaves = React.lazy(() => import('./views/pages/allMyLeaves/AllMyLeaves'))
const AllLeaves = React.lazy(() => import('./views/pages/allLeave/AllLeave'))
const EmployeeLeave = React.lazy(() => import('./views/pages/employeeLeave/EmployeeLeave'))
const LeaveDetail = React.lazy(() => import('./views/pages/managerLeaveDetail/ManagerLeaveDetail'))
const CreateExpenses = React.lazy(() => import('./views/pages/expenses/CreateExpenses'))
const AllMyExpenses = React.lazy(() => import('./views/pages/expenses/AllMyExpenses'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/user/usertable', name: 'User Table', element: UserTable },
  { path: '/user/userList', name: 'User List', element: UserList },
  { path: '/employee/employeetable', name: 'Employee Table', element: EmployeeTable },
  { path: '/company/companytable', name: 'Company Table', element: CompanyTable },
  { path: '/company/companylist', name: 'Company List', element: CompanyList },
  { path: '/company/companydetail/:id', name: 'Company Detail', element: CompanyDetail },
  { path: '/createpassword', name: 'New Password Page', element: PasswordReset },
  { path: '/forgetpassword', name: 'Forgot Password Page', element: ForgotPassword },
  { path: '/employee/employeelist', name: 'Employee List', element: EmployeeList },
  { path: '/manager/managertable', name: 'Manager List', element: ManagerTable },
  { path: '/manager/managerlist', name: 'Manager List', element: ManagerList },
  { path: '/page500', name: 'page 500', element: Page500 },
  { path: '/login', name: 'login', element: Login },
  { path: '/profile', name: 'profile', element: Profile },
  { path: '/mycolleague', name: 'My Colleague', element: MyColleague },
  { path: '/leaves/allmyleaves', name: 'All My Leaves', element: AllMyLeaves },
  { path: '/leaves/allleaves', name: 'All Leaves', element: AllLeaves },
  { path: '/leaves/createleave', name: 'Create Leaves', element: EmployeeLeave },
  { path: '/leaves/leavedetail/:id', name: 'Leave Detail', element: LeaveDetail },
  { path: '/expenses/createexpenses', name: 'Create Expenses', element: CreateExpenses },
  { path: '/expenses/allmyexpenses', name: 'All My Expenses', element: AllMyExpenses },

  {
    path: '/employee/employeedetail/:id',
    name: 'Employee Detail',
    element: EmployeeDetail,
  },
  {
    path: '/user/userdetail/:id',
    name: 'User Detail',
    element: UserDetail,
  },
  {
    path: '/manager/managerdetail/:id',
    name: 'Manager Table',
    element: ManagerDetail,
  },

  { path: '/savemanager', name: 'Save Manager', element: SaveManager },
  { path: '/saveemployee', name: 'Save Employee', element: SaveEmployee },
  { path: '/saveCompany', name: 'Save Company', element: SaveCompany },
  { path: '/*', name: 'News', element: News },
]
export default routes
