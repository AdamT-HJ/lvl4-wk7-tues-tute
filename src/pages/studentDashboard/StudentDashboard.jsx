import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function StudentDashboard() {
  return (
    <>
        <div>StudentDashboard</div>

        <Navbar></Navbar>
        <br />
        <br />
        <Navbar
            projectTitle="Project"
            subTitle="Introduction"
            dotmap="⚫⚫⚫⚫⚫⚫⚫⚫⚫"
        />

        <Sidebar></Sidebar>
    
    </>
  )
}
