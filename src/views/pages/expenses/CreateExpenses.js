import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilDollar,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilLockLocked,
  cilMagnifyingGlass,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilLibrary,
} from '@coreui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createexpenses } from '../../../store/features/ExpensesSlice'
import { findbyTokenwithAxios } from '../../../store/features/UserSlice'

const Createexpenses = () => {
  const dispatch = useDispatch()
  const employeeId = useSelector((state) => state.user.currentUserId)
  const authId = useSelector((state) => state.auth.authid)
  const employee = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.auth.token)
  const list = useSelector((state) => state.expenses.myexpensesList)
  const [amount, setAmount] = useState(0)
  const [currency, setCurrency] = useState('')
  const [bill, setBill] = useState('')
  const [type, setType] = useState('')
  const onChangeBill = (event) => {
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      setBill(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }
  const expensestype = ['TRANSPORTATION', 'MEAL', 'ACCOMMODATION']

  const getUser = () => {
    dispatch(findbyTokenwithAxios({ token }))
  }

  const create = () => {
    if (bill === '') {
      alert('Please upload bill photo')
    } else if (amount === '') {
      alert('Please enter amount')
    } else if (currency === '') {
      alert('Please enter currency')
    } else if (type === '') {
      alert('Please enter the leave type!')
    } else {
      dispatch(
        createexpenses({
          authid: authId,
          amount: amount,
          employeeid: employeeId,
          currency: currency,
          file: bill,
          type: type,
        }),
      )
    }
  }
  console.log(list)

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <div className="bg-light  d-flex flex-row align-items-center ">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={7}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Create New expenses Request</h1>
                    <p className="text-medium-emphasis">Please fill in the information...</p>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        type="file"
                        id="inputGroupFile02"
                        accept="image/*"
                        onChange={onChangeBill}
                      />
                      <CInputGroupText
                        component="label"
                        htmlFor="inputGroupFile02"
                        placeholder="Please select photo"
                      ></CInputGroupText>
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilDollar} />
                      </CInputGroupText>
                      <CFormInput
                        type="date"
                        id="floatingInputInvalid"
                        floatingLabel="Amount"
                        placeholder="Amount"
                        autoComplete="amount"
                        onChange={(event) => {
                          setAmount(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilNotes} />
                      </CInputGroupText>
                      <CFormInput
                        type="date"
                        id="floatingInputInvalid"
                        floatingLabel="Currency"
                        placeholder="Currency"
                        autoComplete="currency"
                        onChange={(event) => {
                          setCurrency(event.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLibrary} />
                      </CInputGroupText>
                      <CFormSelect
                        aria-label="Default select example"
                        onChange={(event) => {
                          setType(event.target.value)
                        }}
                      >
                        <option>Select your leave type</option>
                        {expensestype.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </CFormSelect>
                    </CInputGroup>
                    <br></br>
                    <CRow className="d-grid gap-3 d-md-block ">
                      <Link to={'/expenses/allmyexpenses'}>
                        <CButton size="lg" color="success" onClick={create}>
                          Create Expenses
                        </CButton>
                      </Link>

                      <Link to={'/expenses/allmyexpenses'}>
                        <CButton size="lg" color="secondary" variant="outline">
                          Go back to Home
                        </CButton>
                      </Link>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default Createexpenses
