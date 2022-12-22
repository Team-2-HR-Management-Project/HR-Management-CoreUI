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
import { fetchCreateManager } from 'src/store/features/UserSlice'
import Loading from 'src/components/loading/Loading'
const SaveUser = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')

  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.isLoading)
  const isActivated = useSelector((state) => state.auth.isActivated)
  const createManager = async () => {
    if (name === '') {
      alert('Please enter any name!')
    } else if (surname === '') {
      alert('Please enter any surname!')
    } else if (email === '') {
      alert('Please enter any email!')
    } else if (phone === '') {
      alert('Please enter any phone!')
    } else if (company === '') {
      alert('Please enter any company!')
    } else {
      dispatch(
        fetchCreateManager({
          name: name,
          surname: surname,
          email: email,
          phone: phone,
          company: company,
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
                    <h1>Create New Manager</h1>
                    <p className="text-medium-emphasis">Please fill in the information...</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="Name"
                        placeholder="Name"
                        autoComplete="name"
                        onChange={(event) => {
                          setName(event.target.value)
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
                        floatingLabel="Surname"
                        placeholder="Surname"
                        autoComplete="surname"
                        onChange={(event) => {
                          setSurname(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        id="floatingInputInvalid"
                        floatingLabel="Email"
                        placeholder="example@gmail.com"
                        autoComplete="email"
                        onChange={(event) => {
                          setEmail(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="Phone"
                        placeholder="(---) --- -- --"
                        autoComplete="phone"
                        onChange={(event) => {
                          setPhone(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="Company"
                        placeholder="Company"
                        autoComplete="company"
                        onChange={(event) => {
                          setCompany(event.target.value)
                        }}
                      />
                    </CInputGroup>

                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={isActivated ? '/manager/managerlist' : '/page500'}>
                        <CButton size="lg" color="success" onClick={createManager}>
                          Create Manager
                        </CButton>
                      </Link>

                      <Link to={'/manager/managerlist'}>
                        <CButton size="lg" color="secondary" variant="outline">
                          Go back to List
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

export default SaveUser
