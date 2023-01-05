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
import { fetchCreatePassword, fecthRegisterbymail } from 'src/store/features/AuthSlice'
import Loading from 'src/components/loading/Loading'
import { findAllCompany } from 'src/store/features/companySlice'

const SaveManager = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [companyid, setCompanyid] = useState(0)

  const data = useSelector((state) => state.company.companyList)
  const dispatch = useDispatch()

  console.log(data)
  const getCompanies = () => {
    dispatch(findAllCompany())
  }

  const createManager = async () => {
    if (name === '' || name.length < 2 || name.length > 32) {
      alert('Please enter any name!')
    } else if (surname === '' || surname.length < 2 || surname.length > 32) {
      alert('Please enter any surname!')
    } else if (email === '' || !email.includes('@') || !email.includes('.')) {
      alert('Please enter any email!')
    } else if (phone === '' || phone.length < 10 || phone.length > 11) {
      alert('Please enter any phone!')
    } else if (companyid === '' || companyid === 0) {
      alert('Please select any company!')
    } else {
      dispatch(
        fecthRegisterbymail({
          name: name,
          surname: surname,
          email: email,
          phone: phone,
          companyid: companyid,
          role: 'MANAGER',
        }),
      )
    }
    console.log(email)
    console.log('picked' + companyid)
  }
  useEffect(() => {
    getCompanies()
  }, [])

  return (
    <>
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
                      <CFormSelect
                        aria-label="Default select example"
                        onChange={(event) => {
                          setCompanyid(event.target.value)
                        }}
                      >
                        <option>Select any Company</option>
                        {data.map((type, index) => (
                          <option key={index} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </CFormSelect>
                    </CInputGroup>
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={'/manager/managerlist'}>
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

export default SaveManager
