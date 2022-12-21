import React from 'react'
import { CFooter, CLink } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter color="black">
      <div>
        <CLink href="https://coreui.io">HR MANAGEMENT SYSTEM</CLink>
        <span>&copy; 2022 creativeLabs.</span>
      </div>
      <div>
        <span>Powered by: </span>
        <span>Sinem İlkiz Sezer Çağdaş Saad</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
