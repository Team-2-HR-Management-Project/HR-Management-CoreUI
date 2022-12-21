import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllManagers } from 'src/store/features/ManagerSlice'
import { Link } from 'react-router-dom'

function ManagerTable() {
  const managerList = useSelector((state) => state.user.data)

  const dispatch = useDispatch()

  const getManagers = () => {
    dispatch(getAllManagers())
  }

  useEffect(() => {
    getManagers()
  }, [])

  return (
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
            <CCardText className="text-center">{type?.email}</CCardText>
            <Link to={`/manager/managerdetail/${type.id}`} className="col align-self-end">
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

export default ManagerTable
