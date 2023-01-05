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
import { seeDetailLeave, updateLeave } from 'src/store/features/LeaveSlice'
import { userSeeDetail } from 'src/store/features/UserSlice'

const ManagerLeaveDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const employee = useSelector((state) => state.user.otherUserProfile)
  const leave = useSelector((state) => state.leave.otherleave)
  const [status, setStatus] = useState(leave.status)

  const update = () => {
    dispatch(
      updateLeave({
        authid: employee.authid,
        status: leave.status,
      }),
    )
  }

  useEffect(() => {
    dispatch(userSeeDetail(id), seeDetailLeave(leave.id))
  }, [leave.id])
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
                      employee.photo == null
                        ? require('../../../assets/person/user.webp')
                        : employee.photo
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
                    onClick={update}
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
                  <CFormInput type="text" placeholder={employee?.name} disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Surname</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput type="text" placeholder={employee?.surname} disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Department</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.department} type="text" disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Profession</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.profession} type="text" disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">ID Number</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.identityNumber} type="text" disabled />
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
                  <CFormInput
                    placeholder={leave.status}
                    type="text"
                    onChange={(e) => setStatus(e.target.value)}
                  />
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
