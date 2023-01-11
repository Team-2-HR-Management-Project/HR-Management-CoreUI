import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CImage,
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import { findbyTokenwithAxios, userSeeDetail } from '../../../store/features/UserSlice'
import { getAllMyExpenses } from '../../../store/features/ExpensesSlice'

import { Link } from 'react-router-dom'

import {
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
  cilUserFollow,
} from '@coreui/icons'

const AllMyExpenses = () => {
  const data = useSelector((state) => state.expenses.myExpensesList)
  const token = useSelector((state) => state.auth.token)
  const authid = useSelector((state) => state.auth.authid)
  const status = useSelector((state) => state.expenses.changeStatus)

  const dispatch = useDispatch()
  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios({ token }))
  }
  const getUsers = () => {
    getUser()
    dispatch(getAllMyExpenses(authid))
  }

  useEffect(() => {
    getUsers()
  }, [data.size, status])

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CContainer>
                <CRow>
                  <CCol xs="auto" className="me-auto">
                    <h5 className="card-title fs-4 fw-semibold m-2"> My Expenses</h5>
                  </CCol>
                </CRow>
              </CContainer>
              <CRow>
                <CCol></CCol>
              </CRow>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>Index</CTableHeaderCell>
                    <CTableHeaderCell>Expense Type</CTableHeaderCell>
                    <CTableHeaderCell>Amount</CTableHeaderCell>
                    <CTableHeaderCell>Currency</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((type, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.type}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.amount}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{type?.currency}</div>
                      </CTableDataCell>
                      {/* <CTableDataCell>
                        <Link
                          to={`/expenses/expensedetail/${type.id}`}
                          className="col align-self-end"
                        >
                          <CButton
                            className="container align-self-end"
                            style={{ backgroundColor: 'black' }}
                          >
                            Show Details
                          </CButton>
                        </Link>
                      </CTableDataCell> */}
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AllMyExpenses
