import React from 'react'
import { NextPageContext } from 'next'

function Index() {
  return <>Hello World!</>
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {},
  }
}

export default Index
