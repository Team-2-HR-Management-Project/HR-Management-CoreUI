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
import { companyDetail, updateCompany } from 'src/store/features/companySlice'

const CompanyDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const company = useSelector((state) => state.company.othercompany)
  const [phone, setPhone] = useState(company?.phone)
  const [address, setAddress] = useState(company?.address)
  const [logo, setLogo] = useState(company?.logo)
  const [dateOfContract, setDateOfContract] = useState(company?.dateOfContract)
  const [contractExpiryDate, setContractExpiryDate] = useState(company?.contractExpiryDate)
  const [numberOfEmployees, setNumberOfEmployees] = useState(company?.numberOfEmployees)

  const onChangePhoto = (event) => {
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      setLogo(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  const update = () => {
    dispatch(
      updateCompany({
        companyid: company.id,
        address: address == null ? company.address : address,
        logo: logo == null ? company.logo : logo,
        phone: phone == null ? company.phone : phone,
        dateOfContract: dateOfContract == null ? company.dateOfContract : dateOfContract,
        contractExpiryDate:
          contractExpiryDate == null ? company.contractExpiryDate : contractExpiryDate,
        numberOfEmployees:
          numberOfEmployees == null ? company.numberOfEmployees : numberOfEmployees,
      }),
    )
  }

  useEffect(() => {
    dispatch(companyDetail(id))
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
                      company.logo == null
                        ? require('../../../assets/person/user.webp')
                        : company.logo
                    }
                    width={200}
                  />
                </div>
              </CRow>
              <CRow className="justify-content-center mt-3">
                <CInputGroup className="mb-3">
                  <CFormInput
                    type="file"
                    id="inputGroupFile02"
                    accept="image/*"
                    onChange={onChangePhoto}
                  />
                  <CInputGroupText
                    component="label"
                    htmlFor="inputGroupFile02"
                    placeholder="Fotoğraf Seçiniz"
                  ></CInputGroupText>
                </CInputGroup>
              </CRow>
              <CRow className="m-3 justify-content-center align-self-end">
                <Link to={`/company/companydetail/${id}`} className="col align-self-end">
                  <CButton
                    className="container align-self-end"
                    style={{ backgroundColor: 'black' }}
                    onClick={update}
                  >
                    Save
                  </CButton>
                </Link>
                <Link to={`/company/companytable`} className="col align-self-end">
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
          <CCol sm={8} className="detailfeed mb-5">
            <CForm className="m-5">
              <CRow className=" mb-4 ">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Name</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput type="text" placeholder={company?.name} disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Title</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput type="text" placeholder={company?.title} disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Tax Number</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput type="text" placeholder={company?.taxNumber} disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Tax Office</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput type="text" placeholder={company?.taxOffice} disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel htmlFor="inputEmail3" className="col-lg-2 col-form-label">
                    Email
                  </CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput type="email" placeholder={company?.email} disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Address</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput
                    placeholder={company?.address == null ? 'empty' : company.address}
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Phone</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput
                    placeholder={company?.phone == null ? 'empty' : company.phone}
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Number Of Employees</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput
                    placeholder={
                      company?.numberOfEmployees == null ? 'empty' : company.numberOfEmployees
                    }
                    type="text"
                    onChange={(e) => setNumberOfEmployees(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Date of Establishment</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput placeholder={company?.dateOfEstablishment} type="text" />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Date of Contract</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput
                    placeholder={company?.dateOfContract == null ? 'empty' : company.dateOfContract}
                    type="text"
                    onChange={(e) => setDateOfContract(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Contract Expiry Date</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput
                    placeholder={
                      company?.contractExpiryDate == null ? 'empty' : company.contractExpiryDate
                    }
                    type="text"
                    onChange={(e) => setContractExpiryDate(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Status</CFormLabel>
                </CCol>
                <CCol sm={9}>
                  <CFormInput placeholder={company?.status} type="text" />
                </CCol>
              </CRow>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default CompanyDetail
