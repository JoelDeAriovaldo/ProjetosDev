import React from 'react';
import simple from '../../Assets/simple.png'

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
      O valor que nos mantém verdadeiros e responsáveis
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40]
            w-[40px] flex items-center justify-center ">
              <img src={simple} alt="" />

              <span className='font-semibold text-textColor text-[18px]'>
               Simplicidade
              </span>
              <div>
                <p className="text-[25px] text-textColor opacity-[.7] py[1rem]">
                Tornar as coisas bonitas e simples está no centro de tudo o que fazemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Value