import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findbyTokenwithAxios } from '../../store/features/UserSlice'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CLink,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { logout } from '../../store/features/AuthSlice'
import { Link } from 'react-router-dom'
const AppHeaderDropdown = () => {
  const myuser = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.auth.token)
  const isAuthanticated = useSelector((state) => state.auth.isAuthanticated)

  const dispatch = useDispatch()

  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios({ token }))
  }
  const mylogout = () => {
    dispatch(logout())
    console.log(isAuthanticated)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon icon={cilUser} className="me-8" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Hello {myuser.name} {myuser.surname}
        </CDropdownHeader>
        <Link to={`/profile`} className="my-dropdown col align-self-end">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </Link>
        <CDropdownDivider />
        <Link to={`/`} className="my-dropdown col align-self-end" onClick={mylogout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </Link>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
