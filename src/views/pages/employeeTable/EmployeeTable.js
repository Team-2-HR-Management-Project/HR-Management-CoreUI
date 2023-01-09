import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CRow,
  CContainer,
  CCol,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilUserFollow } from '@coreui/icons'
import { getAllEmployees, findbyTokenwithAxios } from '../../../store/features/UserSlice'

function EmployeeTable() {
  const data = useSelector((state) => state.user.employeeList)
  const token = useSelector((state) => state.auth.token)
  const myuser = useSelector((state) => state.user.user)

  const dispatch = useDispatch()
  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios({ token }))
  }
  const getUsers = () => {
    getUser()
    dispatch(getAllEmployees(myuser.companyid))
  }

  useEffect(() => {
    getUsers()
  }, [data.size])

  return (
    <div>
      <CRow>
        <CContainer>
          <CRow>
            <CCol xs="auto" className="me-auto">
              <h5 className="card-title fs-4 fw-semibold m-2"> Users </h5>
            </CCol>
            <CCol xs="auto">
              <Link to={`/saveemployee`} className="col align-self-end">
                <CButton className="btn btn-secondary mb-3" type="button">
                  <CIcon icon={cilUserFollow} /> Add New Employee
                </CButton>
              </Link>
            </CCol>
          </CRow>
        </CContainer>
      </CRow>
      <CRow>
        <div className="row flex flex-wrap  ">
          {data.map((type, index) => (
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
                <CCardText className="text-center">{type?.email}</CCardText>
                <Link to={`/employee/employeedetail/${type.id}`} className="col align-self-end">
                  <CButton
                    className="container align-self-end"
                    style={{ backgroundColor: 'black' }}
                  >
                    Show Details
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

export default EmployeeTable
