import { User } from "lucide-react";
import Image from "next/image";
import icon from "./../../public/images/icon-w.png";


export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* -----------------------------------------------Left--------------------------------------------------- */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 border-r border-white/10">
          {/*---------------------------------------------------------------------------------------------------*/}
          <a href="" className="flex items-center gap-3 text-left hover:text-gray-300 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
              <User />                     
            </div>
            <p className="text-sm leading-snug max-w-[140px]"><span className="underline">Crie sua conte </span>e salve suas memorias</p>
          </a>
          {/*---------------------------------------------------------------------------------------------------*/}
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
          {/*---------------------------------------------------------------------------------------------------*/}
          <div className="text-sm leading-relaxed text-gray-200">
            <p>&copy; 2024 Leonardo Sampaio. Todos os direitos reservados.</p>
          </div>
          {/*---------------------------------------------------------------------------------------------------*/}
          <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />              
      </div>
      {/* rigth */}
      <div className="bg-black flex justify-center items-center flex-col">      
        <p className="w-[360px] text-center leading-relaxed">Nenhuma lembrança cadastrada ainda ainda! começe a {''}
          <a href="" className="underline hover:text-gray-50:">criar agora!</a>
        </p>
      </div>
    </main>
  )
}
