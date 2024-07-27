import Image from "next/image";
import icon from "./../../public/images/icon-w.png";

export function Hero() {
    return (
        <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <Image className="w-10 h-10" src={icon} alt="Icon nostalgia app" />  
              <h1 className="text-4xl font-alt text-gray-50">Nostalgia App</h1>
            </div> 
            <div className="max-w-[420px] space-y-1">
              <h1 className="text-xl mt-5 font-bold leading-tight">Cápsula do tempo</h1>
              <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe com quem quiser!</p>
            </div>
            <a href="" className="inline-block rounded-full bg-green-500 px-5 py-5 font-alt text-sm uppercase leading-none text-black hover:bg-green-700">Cadastrar Lembrança</a>
          </div>    
    )
}