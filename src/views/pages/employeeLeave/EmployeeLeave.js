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
  CRow,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createLeave } from 'src/store/features/LeaveSlice'
import { getAllManagers } from 'src/store/features/ManagerSlice'

const EmployeeLeave = () => {
  const dispatch = useDispatch()
  const manager = useSelector((state) => state.user.managerList)
  const employeeId = useSelector((state) => state.user.currentUserId)
  const authId = useSelector((state) => state.auth.authid)
  const leave = useSelector((state) => state.leave.leave)
  const list = useSelector((state) => state.leave.leaveList)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [days, setDays] = useState('')
  const [type, setType] = useState('')
  const [managerid, setManagerid] = useState(0)

  const getManagers = () => {
    dispatch(getAllManagers())
  }

  const create = () => {
    if (startDate === '') {
      alert('Please enter the leave start date!')
    } else if (endDate === '') {
      alert('Please enter the leave end date!')
    } else if (days === '') {
      alert('Please enter the number of leave days!')
    } else if (type === '') {
      alert('Please enter the leave type!')
    } else if (managerid === '') {
      alert('Please select your manager!')
    } else {
      dispatch(
        createLeave({
          authid: authId,
          startDate: startDate,
          managerid: managerid,
          employeeid: employeeId,
          endDate: endDate,
          days: days,
          type: type,
        }),
      )
    }
  }
  console.log(list)

  useEffect(() => {
    getManagers()
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
                    <h1>Create New Leave Request</h1>
                    <p className="text-medium-emphasis">Please fill in the information...</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="floatingInputInvalid"
                        floatingLabel="StartDate"
                        placeholder="Start Date"
                        autoComplete="startdate"
                        onChange={(event) => {
                          setStartDate(event.target.value)
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
                        floatingLabel="EndDate"
                        placeholder="End Date"
                        autoComplete="endDate"
                        onChange={(event) => {
                          setEndDate(event.target.value)
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
                        floatingLabel="Days"
                        placeholder="Days"
                        autoComplete="days"
                        onChange={(event) => {
                          setDays(event.target.value)
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
                        floatingLabel="Type"
                        placeholder="Type"
                        autoComplete="type"
                        onChange={(event) => {
                          setType(event.target.value)
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
                          setManagerid(event.target.value)
                        }}
                      >
                        <option>Select your manager</option>
                        {manager.map((type, index) => (
                          <option key={index} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </CFormSelect>
                    </CInputGroup>
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={'/leaves/allmyleaves'}>
                        <CButton size="lg" color="success" onClick={create}>
                          Create Leave
                        </CButton>
                      </Link>

                      <Link to={'/leaves/allmyleaves'}>
                        <CButton size="lg" color="secondary" variant="outline">
                          Go back to Home
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

export default EmployeeLeave
