import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '@/styles/Home.module.css'



function index() {
  return (
    <div>
      <Head>
        <title>Welcome to next js session 1</title>
      </Head>
      <h1>These is the normal tag</h1>
      <img src='https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg' alt='Elephant'/>
      <Image src={'https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg'} alt='Elephant' width={350} height={350} />
      <h1 className={`${style.flyhigh} border border-dark border-5 text-primary`} style={{backgroundColor:'yellow'}}>My web App</h1>
    </div>
  )
}

export default index