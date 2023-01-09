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
import { Link } from 'react-router-dom'
import { findbyTokenwithAxios, updateAllUser } from '../../../store/features/UserSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const employee = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.auth.token)

  const [phone, setPhone] = useState(employee?.phone)
  const [name, setName] = useState(employee?.name)
  const [surname, setSurname] = useState(employee?.surname)
  const [address, setAddress] = useState(employee?.address)
  const [photo, setPhoto] = useState(employee?.photo)
  const [middleName, setMiddleName] = useState(employee?.middleName)
  const [secondSurname, setSecondSurname] = useState(employee?.secondSurname)
  const [profession, setProfession] = useState(employee?.profession)
  const [dob, setDob] = useState(employee?.dob)
  const [placeOfBirth, setPlaceOfBirth] = useState(employee?.placeOfBirth)
  const [identityNumber, setIdentityNumber] = useState(employee?.identityNumber)
  const [joinDate, setJoinDate] = useState(employee?.joinDate)
  const [resignDate, setResignDate] = useState(employee?.resignDate)
  const [company, setCompany] = useState(employee?.company)

  const onChangePhoto = (event) => {
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      setPhoto(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }
  const update = () => {
    // if (employee.identityNumber.size !== 11) {
    //   alert('TC can be 11 characters!')
    // } else {
    getUser()
    dispatch(
      updateAllUser({
        id: employee.id,
        authid: employee.authid,
        address: address == null ? employee.address : address,
        name: name == null ? employee.name : name,
        surname: surname == null ? employee.surname : surname,
        photo: photo == null ? employee.photo : photo,
        phone: phone == null ? employee.phone : phone,
        middleName: middleName == null ? employee.middleName : middleName,
        secondSurname: secondSurname == null ? employee.secondSurname : secondSurname,
        profession: profession == null ? employee.profession : profession,
        dob: dob == null ? employee.dob : dob,
        placeOfBirth: placeOfBirth == null ? employee.placeOfBirth : placeOfBirth,
        identityNumber: identityNumber == null ? employee.identityNumber : identityNumber,
        joinDate: joinDate == null ? employee.joinDate : joinDate,
        resignDate: resignDate == null ? employee.resignDate : resignDate,
        company: company == null ? employee.company : company,
      }),
    )
    // }
  }
  const getUser = () => {
    dispatch(findbyTokenwithAxios({ token }))
  }
  useEffect(() => {
    getUser()
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
                <Link to={`/profile`} className="col align-self-end">
                  <CButton
                    className="container align-self-end"
                    style={{ backgroundColor: 'black' }}
                    onClick={update}
                  >
                    Save
                  </CButton>
                </Link>
                <Link to={`/`} className="col align-self-end">
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
                  <CFormInput
                    placeholder={employee?.name == null ? 'empty' : employee.name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Middle Name</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={employee?.middleName == null ? 'empty' : employee.middleName}
                    type="text"
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Surname</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={employee?.surname == null ? 'empty' : employee.surname}
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Second Surname</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={employee?.secondSurname == null ? 'empty' : employee.secondSurname}
                    type="text"
                    onChange={(e) => setSecondSurname(e.target.value)}
                  />
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
                    maxLength="11"
                    minLength="11"
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
                  <CFormInput
                    placeholder={employee?.profession == null ? 'empty' : employee.profession}
                    type="text"
                    onChange={(e) => setProfession(e.target.value)}
                  />
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
                  <CFormInput
                    placeholder={employee?.dob == null ? 'empty' : employee.dob}
                    type="date"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </CCol>
              </CRow>

              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Place of Birth</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={employee?.placeOfBirth == null ? 'empty' : employee.placeOfBirth}
                    type="text"
                    onChange={(e) => setPlaceOfBirth(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">ID Number</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={
                      employee?.identityNumber == null ? 'empty' : employee.identityNumber
                    }
                    type="text"
                    onChange={(e) => setIdentityNumber(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Join Date</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={employee?.joinDate == null ? 'empty' : employee.joinDate}
                    type="date"
                    onChange={(e) => setJoinDate(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className=" mb-4">
                <CCol sm={3}>
                  <CFormLabel className="col col-form-label">Resign Date</CFormLabel>
                </CCol>
                <CCol sm={7} className=" mx-3 ">
                  <CFormInput
                    placeholder={employee?.resignDate == null ? 'empty' : employee.resignDate}
                    type="date"
                    onChange={(e) => setResignDate(e.target.value)}
                  />
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

export default Profile
