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
import { findbyTokenwithAxios, userSeeDetail } from 'src/store/features/UserSlice'
import { getMyAllLeaves } from 'src/store/features/LeaveSlice'

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
  const data = useSelector((state) => state.leave.myLeaveList)
  const token = useSelector((state) => state.auth.token)
  const authid = useSelector((state) => state.auth.authid)

  const dispatch = useDispatch()
  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios({ token }))
  }
  const getUsers = () => {
    getUser()
    dispatch(getMyAllLeaves(authid))
  }

  useEffect(() => {
    getUsers()
  }, [data.size])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2"> My Leaves</h5>
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
                    <CTableHeaderCell className="text-center">Leave Type</CTableHeaderCell>
                    <CTableHeaderCell>Leave Days</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
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
                        <div>{type?.type}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.days}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.status}</div>
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
