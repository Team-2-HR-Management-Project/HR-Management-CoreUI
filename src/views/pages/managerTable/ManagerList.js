import React, { useEffect } from 'react'
import { CImage, CButton, CCard, CCardBody } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllManagers } from '../../../store/features/UserSlice'
import { Link } from 'react-router-dom'

import {
  CCol,
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
import { cilPeople, cilUserFollow } from '@coreui/icons'

const ManagerList = () => {
  const managerList = useSelector((state) => state.manager.managerList)

  const dispatch = useDispatch()

  const getManagers = () => {
    dispatch(getAllManagers())
  }

  useEffect(() => {
    getManagers()
  }, [managerList.size])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2">Managers</h5>
                  </CCol>
                  <CCol xs="auto">
                    <Link to={`/savemanager`} className="col align-self-end">
                      <CButton className="btn btn-secondary mb-3" type="button">
                        <CIcon icon={cilUserFollow} /> Add New Manager
                      </CButton>
                    </Link>
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
                    <CTableHeaderCell className="text-center">Company</CTableHeaderCell>
                    <CTableHeaderCell>Detail</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {managerList.map((type, index) => (
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
                        <div>{type?.email}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.phone}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.company}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <Link
                          to={`/manager/managerdetail/${type.id}`}
                          className="col align-self-end"
                        >
                          <CButton
                            className="container align-self-end"
                            style={{ backgroundColor: 'black' }}
                          >
                            Show Details
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

export default ManagerList
