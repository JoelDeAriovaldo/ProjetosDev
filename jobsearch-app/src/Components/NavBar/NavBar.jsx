import React from 'react'

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Work</strong>Finder</h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Trabalhos</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Empresas</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Sobre</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contato</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Cadastre-se</li>
      </div>

    </div>
  )
}

export default NavBar