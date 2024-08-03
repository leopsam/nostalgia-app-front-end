import Link from 'next/link'
import { ChevronLeft, Pencil, Trash2 } from 'lucide-react'
import MemoryDetails from '@/components/MemoryDetails'

export default function FetchMemory() {
  return (
    <div className="flex flex-col flex-1 gap-4 p-16">
      <Link
        href={'/'}
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-500"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href={'/'}
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-500"
        >
          <Pencil className="h-4 w-4" />
          Editar
        </Link>

        <Link
          href={'/'}
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-500"
        >
          <Trash2 className="h-4 w-4" />
          Excluir
        </Link>
      </div>

      <MemoryDetails />
    </div>
  )
}
