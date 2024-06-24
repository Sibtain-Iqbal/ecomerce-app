
import axios from 'axios';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';

function App() {

  let [finalcatogries ,setfinalcategorie] = useState([])


  let cato = ()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=> res.data)
    .then((finalres)=>{
      setfinalcategorie(finalres)
    })

  }
 


  useEffect(()=>{
    cato()
    console.log(finalcatogries);
  },[])










  return (
    <>
    <div className='py-[40px]'>
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-center font-bold mb-[30px] text-[40px]'>Our Products</h1>
      <div className='grid grid-cols-[30%_auto] gap-20'>
        <div >
          {finalcatogries.length}
          <Category   finalcatogries={finalcatogries} />
        </div>
        {/* products */}
        <div className='grid grid-cols-3 gap-4 '>
          <div className='shadow-lg text-center pb-4'>
            <img src='https://image.wedmegood.com/resized/1000X/uploads/images/2096ded6a96e48eeaacdbb0d6027a069realwedding/LONA2655.jpg'/>
            <h3>Samsung</h3>
            <b>RS 1000000</b>
          </div>
          <div className='shadow-lg text-center pb-4'>
            <img src='https://image.wedmegood.com/resized/1000X/uploads/images/2096ded6a96e48eeaacdbb0d6027a069realwedding/LONA2655.jpg'/>
            <h3>Samsung</h3>
            <b>RS 1000000</b>
          </div><div className='shadow-lg text-center pb-4'>
            <img src='https://image.wedmegood.com/resized/1000X/uploads/images/2096ded6a96e48eeaacdbb0d6027a069realwedding/LONA2655.jpg'/>
            <h3>Samsung</h3>
            <b>RS 1000000</b>
          </div><div className='shadow-lg text-center pb-4'>
            <img src='https://image.wedmegood.com/resized/1000X/uploads/images/2096ded6a96e48eeaacdbb0d6027a069realwedding/LONA2655.jpg'/>
            <h3>Samsung</h3>
            <b>RS 1000000</b>
          </div><div className='shadow-lg text-center pb-4'>
            <img src='https://image.wedmegood.com/resized/1000X/uploads/images/2096ded6a96e48eeaacdbb0d6027a069realwedding/LONA2655.jpg'/>
            <h3>Samsung</h3>
            <b>RS 1000000</b>
          </div>
          <div className='shadow-lg text-center pb-4'>
            <img src='https://image.wedmegood.com/resized/1000X/uploads/images/2096ded6a96e48eeaacdbb0d6027a069realwedding/LONA2655.jpg'/>
            <h3>Samsung</h3>
            <b>RS 1000000</b>
          </div>

        </div>
      </div>
      </div>
      
    </div>
    
    </>
  )
}

export default App;
