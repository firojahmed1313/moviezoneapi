import React from 'react'
import Addd from '../../crudSession/Addd'

import AdminUserSection from './AdminUserSection'

const Crud = () => {
  return (
    <>
    <div className='MainContaner'>

      <AdminUserSection/>
      <Addd />
    </div>
      
    </>
  )
}

export default Crud