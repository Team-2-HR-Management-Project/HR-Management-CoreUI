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
import { forgetPassword } from 'src/store/features/AuthSlice'
import Loading from 'src/components/loading/Loading'
const ForgetPassword = () => {
  const auth = useSelector((state) => state.auth.auth)
  const [email, setEmail] = useState('')
  const isExist = useSelector((state) => state.auth.isExist)
  const loading = useSelector((state) => state.auth.isLoading)
  const dispatch = useDispatch()

  const forgetPassword = async () => {
    if (email === '') {
      alert('Please enter your email.')
    } else {
      dispatch(
        forgetPassword({
          email: auth.email,
        }),
      )
    }
    console.log(email)
  }

  React.useEffect(() => {}, [])

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
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={isExist ? onClick={forgetPassword}: '/forgetpassword'}>
                        <CButton size="lg" color="success" >
                          Send Activation Code
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

export default ForgetPassword
