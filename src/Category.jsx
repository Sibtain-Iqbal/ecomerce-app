import React from 'react'

function Category({ finalcatogries }) {

let finalcategory = finalcatogries.map((value,index) =>{
  return(
    <li className='p-[10px] bg-slate-500 cursor-pointer text-[20px] font-serif font-[500] mb-2 '>{value}</li>
  )
})

  return (
    <div>
      <h3 className='text-[35px] font-[500] p-[10px]'>Product Category</h3>
      <ul>
        {finalcategory}

      </ul>
    </div>
  )
}
 
export default Category
