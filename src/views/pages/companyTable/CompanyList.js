import React, { useEffect } from 'react'
import { CImage, CButton, CCard, CCardBody } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { findAllCompany } from 'src/store/features/companySlice'
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
import { cilBriefcase, cilLibraryAdd } from '@coreui/icons'

const CompanyList = () => {
  const data = useSelector((state) => state.company.companyList)

  const dispatch = useDispatch()

  const getCompanies = () => {
    dispatch(findAllCompany())
  }

  useEffect(() => {
    getCompanies()
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
                    <h5 className="card-title fs-4 fw-semibold m-2">Companies</h5>
                  </CCol>
                  <CCol xs="auto">
                    <Link to={`/savecompany`} className="col align-self-end">
                      <CButton className="btn btn-secondary mb-3" type="button">
                        <CIcon icon={cilLibraryAdd} /> Add New Company
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
                        <CImage
                          className="avatar-circle-size"
                          src={
                            type.logo == null
                              ? require('../../../assets/person/company.jpg')
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
