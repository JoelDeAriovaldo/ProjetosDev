import logo1 from "../../assets/logo1.png";
import { FaHome } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { FaMessage } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="relative w-[218px] h-[1047px]">
      <div className="fixed w-[218px] h-[1047px] top-0 left-0 bg-white">
        <div className="absolute w-[193px] h-[887px] top-[130px] left-0">
          <div className="absolute w-[167px] h-[43px] top-[844px] left-[25px]">
            <div className="absolute w-[17px] h-[17px] top-[13px] left-[150px] opacity-40 bg-[url(logout.svg)] bg-[100%_100%]" />
          </div>
          <div className="absolute w-[101px] h-[24px] top-[390px] left-[28px]">
            <div className="absolute top-px left-[38px] opacity-50 font-semibold text-[#030229] text-[16px] tracking-[0] leading-[normal]">
              Configurações
            </div>
            <IoMdSettings className="w-[24px] h-[24px] mr-1" />
          </div>
          <div className="absolute w-[125px] h-[24px] top-[336px] left-[28px]">
            <div className="absolute top-px left-[38px] opacity-50 font-semibold text-[#030229] text-[16px] tracking-[0] leading-[normal]">
              Notificação
            </div>
            <IoMdNotifications className="w-[24px] h-[24px] mr-1" />
          </div>
          <div className="absolute w-[169px] h-[24px] top-[282px] left-[28px]">
            <div className="absolute top-px left-[38px] opacity-50 font-semibold text-[#030229] text-[16px] tracking-[0] leading-[normal]">
              Mensagens
            </div>
            <div className="absolute w-[22px] h-[15px] top-[6px] left-[143px]">
              <div className="absolute w-[22px] h-[14px] top-0 left-0 bg-[#d11a2a] rounded-[7px] opacity-10" />
              <div className="absolute top-px left-[5px]  font-semibold text-[#d11a2a] text-[10px] tracking-[0] leading-[normal]">
                49
              </div>
            </div>
            <FaMessage className="w-[24px] h-[24px] mr-1" />
          </div>
          <div className="absolute w-[106px] h-[24px] top-[228px] left-[28px]">
            <div className="absolute top-px left-[38px] opacity-50 font-semibold text-[#030229] text-[16px] tracking-[0] leading-[normal]">
              Calendário
            </div>
            <LuCalendarDays className="w-[24px] h-[24px] mr-1" />
          </div>
          <div className="absolute w-[108px] h-[24px] top-[174px] left-[28px]">
            <div className="absolute top-px left-[38px] opacity-50 font-semibold text-[#030229] text-[16px] tracking-[0] leading-[normal]">
              Agendar
            </div>
            <FaRegCalendarXmark className="w-[24px] h-[24px] mr-1" />
          </div>
          <div className="absolute w-[91px] h-[24px] top-[120px] left-[28px]">
            <div className="absolute top-px left-[38px] opacity-50 font-semibold text-[#030229] text-[16px] tracking-[0] leading-[normal]">
              Fatura
            </div>
            <FaFileInvoiceDollar className="w-[24px] h-[24px] mr-1" />
          </div>
          <div className="absolute w-[108px] h-[24px] top-[66px] left-[28px]">
            <div className="absolute top-px left-[38px] opacity-50 font-semibold text-[#030229] text-[16px] tracking-[0] leading-[normal]">
              Análise
            </div>
            <IoMdAnalytics className="w-[24px] h-[24px] mr-1" />
          </div>
          <div className="absolute w-[148px] h-[48px] top-0 left-0">
            <div className="absolute top-[13px] left-[66px] font-semibold text-[#605bff] text-[16px] tracking-[0] leading-[normal]">
              Dashboard
            </div>
            <div className="absolute w-[53px] h-[48px] top-0 left-0 rounded-[0px_5px_5px_0px]">
              <FaHome className="absolute w-[24px] h-[24px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-[53px] h-[48px] top-0 left-0 rounded-[0px_5px_5px_0px] [background:linear-gradient(180deg,rgb(171.56,168.94,255)_0%,rgba(171.56,168.94,255,0)_100%)] opacity-20" />
            </div>
          </div>
        </div>
        <div className="absolute w-[113px] h-[42px] top-[50px] left-[53px]">
          <div className="absolute w-[42px] h-[42px] top-0 left-0 bg-[url(subtract.svg)] bg-[100%_100%]">
            <img
              className="absolute w-[42px] h-[42px] top-0 left-0"
              alt="Subtract"
              src={logo1}
            />
          </div>
          <div className="absolute top-[5px] left-[57px] font-semibold text-[#030229] text-[24px] tracking-[0] leading-[normal]">
            Base
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
