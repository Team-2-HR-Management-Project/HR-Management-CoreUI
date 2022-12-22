import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { findAllCompany } from 'src/store/features/companySlice'
import { Link } from 'react-router-dom'

function CompanyTable() {
  const data = useSelector((state) => state.company.companyList)

  const dispatch = useDispatch()

  const getCompanies = () => {
    dispatch(findAllCompany())
  }

  useEffect(() => {
    getCompanies()
  }, [])

  return (
    <div className="row flex flex-wrap  ">
      {data.map((type, index) => (
        <CCard className="m-4" style={{ width: '22rem' }} key={index}>
          <CCardImage
            className=" recPhotodetail mt-3 p-2"
            orientation="top"
            src={type.logo == null ? require('../../../assets/person/user.webp') : type.logo}
          />
          <CCardBody>
            <CCardTitle className="text-center">{type?.name}</CCardTitle>
            <CCardText className="text-center">
              {type?.title === null ? '---' : type.title}
            </CCardText>
            <CCardText className="text-center">
              {type?.email === null ? '---' : type.email}
            </CCardText>
            <CCardText className="text-center">
              {type?.phone === null ? '---' : type.phone}
            </CCardText>
            <CCardText className="text-center">
              {type?.address === null ? '---' : type.address}
            </CCardText>
            <Link to={`/company/companydetail/${type.id}`} className="col align-self-end">
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

export default CompanyTable
