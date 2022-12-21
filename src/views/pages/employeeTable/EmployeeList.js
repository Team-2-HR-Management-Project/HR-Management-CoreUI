import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from 'src/store/features/UserSlice'
import { Link } from 'react-router-dom'

import {
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
  cilUserFollow,
} from '@coreui/icons'

const EmployeeList = () => {
  const data = useSelector((state) => state.user.data)

  const dispatch = useDispatch()

  const getUsers = () => {
    dispatch(getAllUsers())
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2">Users</h5>
                  </CCol>
                  <CCol xs="auto">
                    <CButton className="btn btn-secondary mb-3" type="button">
                      <CIcon icon={cilUserFollow} /> Add New User
                    </CButton>
                  </CCol>
                </CRow>
              </CContainer>
              <CRow>
                <CCol></CCol>
              </CRow>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Name Surname</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
                    <CTableHeaderCell>Phone</CTableHeaderCell>
                    <CTableHeaderCell>Role</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Company</CTableHeaderCell>
                    <CTableHeaderCell>Detail</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((type, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={
                            type.photo == null
                              ? require('../../../assets/person/user.webp')
                              : type.photo
                          }
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>
                          {type?.name} {type?.surname}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.email}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.phone}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.role}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.company}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <Link
                          to={`/employee/employeedetail/${type.id}`}
                          className="col align-self-end"
                        >
                          <CButton
                            className="container align-self-end"
                            style={{ backgroundColor: 'black' }}
                          >
                            Show Details & Edit
                          </CButton>
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EmployeeList
