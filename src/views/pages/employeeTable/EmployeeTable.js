import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from 'src/store/features/UserSlice'
import { Link } from 'react-router-dom'

function EmployeeTable() {
  const data = useSelector((state) => state.user.data)

  const dispatch = useDispatch()

  const getUsers = () => {
    dispatch(getAllUsers())
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
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
              <CButton className="container align-self-end" style={{ backgroundColor: 'black' }}>
                Show Details & Edit
              </CButton>
            </Link>
          </CCardBody>
        </CCard>
      ))}
    </div>
  )
}

export default EmployeeTable
