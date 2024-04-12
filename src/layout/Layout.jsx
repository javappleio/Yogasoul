import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <main className='relative pt-14 md:pt-20'>
            {children}
        </main>
    </>
  )
}

export default Layout