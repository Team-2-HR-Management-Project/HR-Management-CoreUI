import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CLink,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchCreatePassword, fecthRegisterbymail } from 'src/store/features/AuthSlice'
import Loading from 'src/components/loading/Loading'
const PasswordReset = () => {
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')
  const [temppassword, setTemppassword] = useState('')

  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.isLoading)
  const isActivated = useSelector((state) => state.auth.isActivated)
  const createPassword = async () => {
    if (email === '' || temppassword === '') {
      alert('Please enter your email and activation code!')
    } else if (password1 === '' || password2 === '') {
      alert('Please enter any password!')
    } else if (password1.length < 8 && password1.length > 32) {
      alert('Password can be between 8 to 32 characters!')
    } else if (password2.length < 8 && password2.length > 32) {
      alert('Password can be between 8 to 32 characters!')
    } else if (password1 !== password2) {
      alert('Passwords do not macth!')
    } else {
      dispatch(
        fetchCreatePassword({
          email: email,
          temppassword: temppassword,
          password: password1,
        }),
      )
    }
    console.log(email)
  }

  React.useEffect(() => {}, [isActivated])

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center ">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>New Password</h1>
                    <p className="text-medium-emphasis">
                      You can activate to your account by setting a new password.
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        id="floatingInputInvalid"
                        floatingLabel="Email addresss"
                        placeholder="name@example.com"
                        autoComplete="email"
                        onChange={(event) => {
                          setEmail(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="Activation Code"
                        placeholder="Activation Code"
                        autoComplete="temp-password"
                        onChange={(event) => {
                          setTemppassword(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        id="floatingInputInvalid"
                        floatingLabel="Password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={(event) => {
                          setPassword1(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        id="floatingInputInvalid"
                        floatingLabel="Confirm Password"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        onChange={(event) => {
                          setPassword2(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={isActivated ? '/login' : '/createpassword'}>
                        <CButton size="lg" color="success" onClick={createPassword}>
                          Create Password
                        </CButton>
                      </Link>

                      <Link to={'/login'}>
                        <CButton size="lg" color="secondary" variant="outline">
                          Go back to Login
                        </CButton>
                      </Link>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default PasswordReset
