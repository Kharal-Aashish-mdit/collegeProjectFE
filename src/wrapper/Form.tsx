import React from 'react'
import { ChildProp } from './Main'

const FormWrapper = ({children}:ChildProp) => {
  return (
    <div className='max-w-xl w-full mx-auto py-8'>{children}</div>
  )
}

export default FormWrapper