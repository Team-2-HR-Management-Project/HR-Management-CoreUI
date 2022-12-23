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
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { createCompany, findAllCompany } from 'src/store/features/companySlice'

const SaveCompany = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [title, setTitle] = useState('')

  const data = useSelector((state) => state.company.companyList)
  const dispatch = useDispatch()

  console.log(data)

  const create = async () => {
    if (name === '') {
      alert('Please enter any name!')
    } else if (title === '') {
      alert('Please enter any title!')
    } else if (email === '') {
      alert('Please enter any email!')
    } else if (phone === '') {
      alert('Please enter any phone!')
    } else if (address === '') {
      alert('Please select any address!')
    } else {
      dispatch(
        createCompany({
          name: name,
          title: title,
          email: email,
          phone: phone,
          address: address,
        }),
      )
    }
  }
  // useEffect(() => {
  //   create()
  // }, [])

  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center ">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Create New Company</h1>
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
                        floatingLabel="Title"
                        placeholder="Title"
                        autoComplete="title"
                        onChange={(event) => {
                          setTitle(event.target.value)
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
                        floatingLabel="Address"
                        placeholder="(---) --- -- --"
                        autoComplete="address"
                        onChange={(event) => {
                          setAddress(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={'/company/companylist'}>
                        <CButton size="lg" color="success" onClick={create}>
                          Create Company
                        </CButton>
                      </Link>

                      <Link to={'/company/companylist'}>
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

export default SaveCompany
