import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_navEmployee'
import navAdmin from '../_navAdmin'
import navManager from '../_navManager'
import { findbyTokenwithAxios } from 'src/store/features/UserSlice'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const token = useSelector((state) => state.auth.token)
  const myuser = useSelector((state) => state.user.user)

  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios({ token }))
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <CSidebar
      className="blacktheme"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav
            items={
              myuser?.role === 'ADMIN'
                ? navAdmin
                : myuser?.role === 'MANAGER'
                ? navManager
                : navigation
            }
          />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
