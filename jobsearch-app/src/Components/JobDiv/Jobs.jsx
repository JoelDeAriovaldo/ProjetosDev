import React from 'react';
import{ BiTimeFive } from 'react-icons/bi'

const Jobs = () => {
  return (
    <div className="group group/item singleJob w-[250px] p-5 bg-white rounded
    [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

      <span className="flex justify-between items-center gap-4">
        <h1 className="text-b font-semibold text-textColor
        group-hover:text-white">Web Developer</h1>
        <span className='flex items-center text-[#ccc] gap-1'>
          <BiTimeFive/>Agora
        </span>
      </span>
      <h6 className="text-[#ccc] ">Moçambique</h6> 
      <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px]
      group-haver:text-white'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sunt quia exercitationem reprehenderit suscipit, neque dolor alias, culpa dolores earum voluptatem facilis et minus. Quas sit minima asperiores necessitatibus incidunt.
      </p>

      <div className="company flex items-center gap-2">
        <img src="" alt="" />
      </div>

    </div>
  )
}

export default Jobs