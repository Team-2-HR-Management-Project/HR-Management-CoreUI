import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findbyTokenwithAxios } from '../store/features/UserSlice'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { CBadge, CAvatar, CImage } from '@coreui/react'

export const AppSidebarNav = ({ items }) => {
  const location = useLocation()
  const myuser = useSelector((state) => state.user.user)
  const token = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios({ token }))
  }

  useEffect(() => {
    getUser()
  }, [])

  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }
  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item
    const Component = component
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </Component>
    )
  }

  return (
    <React.Fragment>
      <div className="mt-5 col text-center justify-content-center clearfix">
        <CImage className="mt-3 circularLandscape" align="center" src={myuser?.photo} />
        <p className="mt-2 text-center">
          <strong>
            {myuser?.name} {myuser?.surname}
          </strong>
        </p>
        <p className="text-center" style={{ color: 'gray' }}>
          {myuser?.profession}
        </p>
      </div>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
