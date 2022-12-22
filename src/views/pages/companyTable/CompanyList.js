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
import { findAllCompany } from 'src/store/features/companySlice'
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
import { cilBriefcase } from '@coreui/icons'
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

const CompanyList = () => {
  const data = useSelector((state) => state.company.companyList)

  const dispatch = useDispatch()

  const getCompanies = () => {
    dispatch(findAllCompany())
  }

  useEffect(() => {
    getCompanies()
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
                    <h5 className="card-title fs-4 fw-semibold m-2">Companies</h5>
                  </CCol>
                  <CCol xs="auto">
                    {/* <CButton className="btn btn-secondary mb-3" type="button">
                      <CIcon icon={cilUserFollow} /> Add New Company
                    </CButton> */}
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
                      <CIcon icon={cilBriefcase} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Company Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
                    <CTableHeaderCell>Phone</CTableHeaderCell>
                    <CTableHeaderCell>Address</CTableHeaderCell>
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
                            type.logo == null
                              ? require('../../../assets/person/user.webp')
                              : type.logo
                          }
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{type?.email}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.phone}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.address}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <Link
                          to={`/company/companydetail/${type.id}`}
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

export default CompanyList
