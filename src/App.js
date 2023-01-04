import React, { Component, Suspense } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import PasswordReset from './views/pages/passwordreset/PasswordReset'
import ForgotPassword from './views/pages/forgetpassword/ForgotPassword'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/login/Login'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" name="Login Page" element={<Login />} />
            <Route path="/login" name="Login Page" element={<Login />} />
            <Route path="/createpassword" name="New Password Page" element={<PasswordReset />} />
            <Route
              path="/forgetpassword"
              name="Forgot Password Page"
              element={<ForgotPassword />}
            />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
