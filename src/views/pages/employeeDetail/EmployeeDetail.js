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
import { userSeeDetail, updateUser } from 'src/store/features/UserSlice'

const EmployeeDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const employee = useSelector((state) => state.user.otherUserProfile)
  const [phone, setPhone] = useState(employee?.phone)
  const [address, setAddress] = useState(employee?.address)
  const [photo, setPhoto] = useState(employee?.photo)

  const onChangePhoto = (event) => {
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      setPhoto(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }

  const update = () => {
    dispatch(
      updateUser({
        authid: employee.authid,
        address: address == null ? employee.address : address,
        photo: photo == null ? employee.photo : photo,
        phone: phone == null ? employee.phone : phone,
      }),
    )
  }

  useEffect(() => {
    dispatch(userSeeDetail(id))
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
                      employee.photo == null
                        ? require('../../../assets/person/user.webp')
                        : employee.photo
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
                <Link to={`/employee/employeedetail/${id}`} className="col align-self-end">
                  <CButton
                    className="container align-self-end"
                    style={{ backgroundColor: 'black' }}
                    onClick={update}
                  >
                    Save
                  </CButton>
                </Link>
                <Link to={`/employee/employeetable`} className="col align-self-end">
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
                  <CFormLabel className="col col-form-label">Middle Name</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput type="text" placeholder={employee?.middleName} disabled />
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
                  <CFormLabel className="col col-form-label">Second Surname</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput type="text" placeholder={employee?.secondSurname} disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel htmlFor="inputEmail3" className="col-lg-2 col-form-label">
                    Email
                  </CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput type="email" placeholder={employee?.email} disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Address</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={employee?.address == null ? 'empty' : employee.address}
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Phone</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={employee?.phone == null ? 'empty' : employee.phone}
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                  />
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
            </CForm>
          </CCol>

          <CCol sm={4} className="detailfeed mb-5">
            <CForm className="m-5">
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Date of Birth</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.dob} type="text" disabled />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Place of Birth</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.placeOfBirth} type="text" disabled />
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
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Join Date</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.joinDate} type="text" disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Resign Date</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.resignDate} type="text" disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Status</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.status} type="text" disabled />
                </CCol>
              </CRow>
              <CRow className=" mb-4 ">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label ">Company</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput placeholder={employee?.company} type="text" disabled />
                </CCol>
              </CRow>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default EmployeeDetail
