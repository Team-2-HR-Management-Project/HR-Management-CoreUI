import {
  CImage,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCol,
  CButton,
  CFormLabel,
  CContainer,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { seeLeaveDetails, updateLeave } from 'src/store/features/LeaveSlice'

const ManagerLeaveDetail = () => {
  const { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()
  const leave = useSelector((state) => state.leave.otherleave)

  useEffect(() => {
    dispatch(seeLeaveDetails(id))
  }, [])
  return (
    <>
      <CContainer>
        <CRow>
          <CCol className="detailside mb-5" sm={4}>
            <CRow className="m-5 justify-content-center">
              <CRow className="m-2 justify-content-center">
                <div className="clearfix">
                  <CImage
                    className="circularPhotodetail"
                    align="center"
                    rounded
                    src={
                      leave.photo == null
                        ? require('../../../assets/person/user.webp')
                        : leave.photo
                    }
                    width={200}
                  />
                </div>
              </CRow>
              <CRow className="m-3 justify-content-center align-self-end">
                <Link to={`/leaves/leavedetail/${id}`} className="col align-self-end">
                  <CButton
                    className="container align-self-end"
                    style={{ backgroundColor: 'black' }}
                  >
                    Save
                  </CButton>
                </Link>
                <Link to={`/leaves/allleaves`} className="col align-self-end">
                  <CButton
                    className="container align-self-end"
                    style={{ backgroundColor: 'black' }}
                  >
                    Exit
                  </CButton>
                </Link>
              </CRow>
            </CRow>
          </CCol>

          <CCol sm={4} className="detailfeed mb-5">
            <CForm className="m-5">
              <CRow className=" mb-4 ">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Name</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput type="text" placeholder={leave?.name} disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Surname</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput type="text" placeholder={leave?.surname} disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Department</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave?.department} type="text" disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Profession</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave?.profession} type="text" disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">ID Number</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave?.identityNumber} type="text" disabled />
                </CCol>
              </CRow>
            </CForm>
          </CCol>

          <CCol sm={4} className="detailfeed mb-5">
            <CForm className="m-5">
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Leave Start Date</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave.startDate} type="text" disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Leave End Date</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave.endDate} type="text" disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Days</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave.days} type="text" disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4 ">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label ">Type</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave.type} type="text" disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4 ">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label ">Message</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave.message} type="text" disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4 ">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label ">Status</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave.status} type="text" />
                </CCol>
              </CRow>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default ManagerLeaveDetail
