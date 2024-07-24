import React from 'react'
import Header from '../components/Header'
import Error404 from '../components/Error404'

export default function NotFound() {
  return (
    <>
    <Header title={"404 Error"}/>
    <Error404 />
    </>
  )
}
