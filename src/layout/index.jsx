import React,{useState} from 'react'
import { Layout } from 'antd';
import LeftNav from './components/LeftNav'
import Heade from './components/Header';

export default function Layouts() {
  const [zdstate,setzdstate] = useState(false)
  const folding = (value)=>{
    setzdstate(value)
  }
  return (
    <Layout>
      <LeftNav zdstate ={zdstate}/>
      <Heade folding={folding}/>
    </Layout>
  )
}
