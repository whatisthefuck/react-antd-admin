import { useState } from 'react'
import '@/App.css'
import {Button} from "antd";
import {Link, Route, Routes, useNavigate} from "react-router-dom";

const Home = (props: { name: string }) => {
    const { name } = props
    return (
        <div>{ name }</div>
    )
}

const About = () => {
    return (
        <div>about</div>
    )
}

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
        <div>
            <Link to='/'>home</Link>
            <Button type='primary' onClick={() => { navigate('/about') }}>about11</Button>
        </div>
        <Routes>
            <Route path='/' element={<Home name='home11' />} />
            <Route path='about' element={<About />} />
        </Routes>
    </div>
  )
}

export default App
