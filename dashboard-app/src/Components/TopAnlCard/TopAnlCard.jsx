import { FaHeart } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";

const TopAnlCard = () => {
  return (
    <div className="relative w-[1162px] h-[116px]">
    <div className="fixed w-[1162px] h-[116px] top-0 left-60">
      <div className="absolute w-[268px] h-[116px] top-0 left-[596px] bg-white rounded-[10px]">
        <div className="absolute w-[97px] h-[48px] top-[33px] left-[112px]">
          <div className="relative w-[93px] h-[48px]">
            <div className="absolute top-0 left-0 opacity-70  font-extrabold text-[#030229] text-[22px] tracking-[0] leading-[normal]">
              190+
            </div>
            <div className="absolute top-[29px] left-0 opacity-70  font-normal text-[#030229] text-[14px] tracking-[0] leading-[normal]">
              Produtos de vendas
            </div>
          </div>
        </div>
        <div className="absolute w-[60px] h-[60px] top-[28px] left-[29px]">
          <div className="relative h-[60px] rounded-[38px]">
            <div className="bg-[#ff8f6b] opacity-10 absolute w-[60px] h-[60px] top-0 left-0 rounded-[38px]" />
            <IoBagCheckSharp className="absolute w-[24px] h-[24px] top-[18px] left-[18px]"/>
          </div>
        </div>
      </div>
      <div className="absolute w-[268px] h-[116px] top-0 left-[298px]">
        <div className="relative w-[272px] h-[116px]">
          <div className="absolute w-[272px] h-[116px] top-0 left-0">
            <div className="relative w-[268px] h-[116px] bg-white rounded-[10px]">
              <div className="absolute top-[33px] left-[111px] opacity-70  font-extrabold text-[#030229] text-[22px] tracking-[0] leading-[normal]">
                20+
              </div>
              <div className="absolute top-[62px] left-[111px] opacity-70  font-normal text-[#030229] text-[14px] tracking-[0] leading-[normal]">
                Produtos em estoque
              </div>
            </div>
          </div>
          <div className="left-[28px] absolute w-[60px] h-[60px] top-[28px]">
            <div className="relative h-[60px] rounded-[38px]">
              <div className="bg-[#ffd56b] opacity-20 absolute w-[60px] h-[60px] top-0 left-0 rounded-[38px]" />
              <FaStore className="absolute w-[24px] h-[24px] top-[18px] left-[18px]"/>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[268px] h-[116px] top-0 left-0 bg-white rounded-[10px]">
        <div className="absolute w-[94px] h-[50px] top-[33px] left-[111px]">
          <div className="absolute top-0 left-0 opacity-70  font-extrabold text-black text-[22px] tracking-[0] leading-[normal]">
            178+
          </div>
          <div className="absolute top-[31px] left-0 opacity-70  font-normal text-[#030229] text-[14px] tracking-[0] leading-[normal]">
            Salvar produtos
          </div>
        </div>
        <div className="left-[28px] absolute w-[60px] h-[60px] top-[28px]">
          <div className="relative h-[60px] rounded-[38px]">
            <div className="bg-[#5b92ff] opacity-10 absolute w-[60px] h-[60px] top-0 left-0 rounded-[38px]" />
            <FaHeart className="absolute w-[24px] h-[24px] top-[18px] left-[18px]" />
          </div>
        </div>
      </div>
      <div className="absolute w-[268px] h-[116px] top-0 left-[894px] bg-white rounded-[10px]">
        <div className="absolute w-[99px] h-[48px] top-[33px] left-[111px]">
          <div className="relative w-[95px] h-[48px]">
            <div className="absolute top-0 left-0 opacity-70  font-extrabold text-[#030229] text-[22px] tracking-[0] leading-[normal]">
              12+
            </div>
            <div className="absolute top-[29px] left-0 opacity-70  font-normal text-[#030229] text-[14px] tracking-[0] leading-[normal]">
              Candidatura de Trabalho
            </div>
          </div>
        </div>
        <div className="left-[34px] absolute w-[60px] h-[60px] top-[28px]">
          <div className="relative h-[60px] rounded-[38px]">
            <div className="bg-[#605bff] opacity-10 absolute w-[60px] h-[60px] top-0 left-0 rounded-[38px]" />
            <MdOutlineWork className="absolute w-[24px] h-[24px] top-[18px] left-[18px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopAnlCard