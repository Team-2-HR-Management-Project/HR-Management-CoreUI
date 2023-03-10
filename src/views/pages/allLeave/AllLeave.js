import React, { useEffect, useState } from 'react'
import { CImage, CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { findbyTokenwithAxios, userSeeDetail } from '../../../store/features/UserSlice'
import { getAllLeaves, rejectLeave, approveLeave } from '../../../store/features/LeaveSlice'

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
  const data = useSelector((state) => state.leave.allLeaveList)
  const token = useSelector((state) => state.auth.token)
  const managerid = useSelector((state) => state.user.currentUserId)
  const changeStatus = useSelector((state) => state.leave.changeStatus)

  console.log(managerid)
  const dispatch = useDispatch()
  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios({ token }))
  }
  const getUsers = () => {
    getUser()
    dispatch(getAllLeaves(managerid))
  }

  useEffect(() => {
    getUsers()
  }, [data.size, changeStatus])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2"> All Leaves</h5>
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
                    <CTableHeaderCell>Detail</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((type, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CImage
                          className="avatar-circle-size"
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
                      <CTableDataCell>
                        <CButton
                          className="gap-2 m-2"
                          shape="rounded-pill"
                          size="sm"
                          color="success"
                          onClick={() => dispatch(approveLeave(type.id))}
                        >
                          APPROVE
                        </CButton>
                        <CButton
                          className="gap-2 m-2"
                          shape="rounded-pill"
                          color="danger"
                          size="sm"
                          onClick={() => dispatch(rejectLeave(type.id))}
                        >
                          REJECT
                        </CButton>
                        <Link to={`/leaves/leavedetail/${type.id}`} className="col align-self-end">
                          <CButton
                            className="gap-2 m-2"
                            shape="rounded-pill"
                            size="sm"
                            color="secondary"
                          >
                            SHOW MORE
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
