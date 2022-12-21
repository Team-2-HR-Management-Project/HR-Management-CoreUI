import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCol,
  CCardTitle,
  CRow,
  CContainer,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllManagers } from 'src/store/features/UserSlice'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilUserFollow } from '@coreui/icons'

function ManagerTable() {
  const managerList = useSelector((state) => state.user.managerList)

  const dispatch = useDispatch()

  const getManagers = () => {
    dispatch(getAllManagers())
  }

  useEffect(() => {
    getManagers()
  }, [])

  return (
    <div>
      <CRow>
        <CContainer>
          <CRow>
            <CCol xs="auto" className="me-auto">
              <h5 className="card-title fs-4 fw-semibold m-2">Managers</h5>
            </CCol>
            <CCol xs="auto">
              <CButton className="btn btn-secondary mb-3" type="button">
                <CIcon icon={cilUserFollow} />. Add New Manager
              </CButton>
            </CCol>
          </CRow>
        </CContainer>
      </CRow>
      <CRow>
        <div className="row flex flex-wrap  ">
          {managerList.map((type, index) => (
            <CCard className="m-4" style={{ width: '22rem' }} key={index}>
              <CCardImage
                className=" recPhotodetail mt-3 p-2"
                orientation="top"
                src={type.photo == null ? require('../../../assets/person/user.webp') : type.photo}
              />
              <CCardBody>
                <CCardTitle className="text-center">
                  {type?.name} {type?.surname}
                </CCardTitle>
                <CCardText className="text-center">
                  {type?.profession === null ? '---' : type.profession}
                </CCardText>
                <CCardText className="text-center">{type?.phone}</CCardText>
                <CCardText className="text-center">{type?.email}</CCardText>
                <CCardText className="text-center">{type?.company}</CCardText>
                <Link to={`/manager/managerdetail/${type.id}`} className="col align-self-end">
                  <CButton
                    className="container align-self-end"
                    style={{ backgroundColor: 'black' }}
                  >
                    Show Details & Edit
                  </CButton>
                </Link>
              </CCardBody>
            </CCard>
          ))}
        </div>
      </CRow>
    </div>
  )
}

export default ManagerTable
