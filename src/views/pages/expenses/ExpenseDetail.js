import { cilCheck, cilDelete, cilExitToApp, cilX } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CImage,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormTextarea,
  CCol,
  CButton,
  CFormLabel,
  CContainer,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { seeDetailExpenses } from '../../../store/features/ExpenseSlice'

const ExpenseDetail = () => {
  const { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()
  const expense = useSelector((state) => state.expenses.expenses)
  

  useEffect(() => {
    dispatch(seeDetailExpenses( id ))
  }, [])
  return (
    <>
      <CContainer>
        <CRow>
          <CCol className="detailside mb-5" sm={4}>
            <CRow className="m-5 justify-content-center">
              <CRow className="m-3 justify-content-center align-self-end">
                <CRow className="justify-content-center ">
                  <CCol xs={4}>
                    <CButton
                      className="gap-2 m-2"
                      shape="rounded-pill"
                      size="lg"
                      color="success"
                      onClick={() => dispatch(approveLeave(leave.id))}
                    >
                      <CIcon icon={cilCheck} />
                    </CButton>
                  </CCol>
                  <CCol xs={4}>
                    <CButton
                      className="gap-2 m-2"
                      shape="rounded-pill"
                      color="danger"
                      size="lg"
                      onClick={() => dispatch(rejectLeave(leave.id))}
                    >
                      <CIcon icon={cilX} />
                    </CButton>
                  </CCol>
                </CRow>

                <p className="justify-content-center detailLeaveText">
                  You can change the status of this leave request.
                </p>
                <Link to={`/leaves/allleaves`} className="col align-self-end m-5">
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
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Message</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    placeholder={leave.message}
                    rows={3}
                    disabled
                  ></CFormTextarea>
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
                  <CFormLabel className="col col-form-label ">Status</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={leave.status} type="text" disabled />
                </CCol>
              </CRow>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default ExpenseDetail
