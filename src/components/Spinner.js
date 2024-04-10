import React from 'react'
import Spinner from '../../public/spinner.gif'
import Image from 'next/image'

const SpinnerCompo = () => {
  return (
    <><Image className='w-[200px] m-auto' src={Spinner} alt='loading..' /></>
  )
}

export default SpinnerCompo