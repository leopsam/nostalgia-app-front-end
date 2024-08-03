'use client'

import { api } from '@/lib/api'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import Image from 'next/image'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

const MemoryDetails = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [memory, setMemory] = useState<Memory>()

  useEffect(() => {
    const fetchMemory = async () => {
      const token = Cookie.get('token')
      try {
        const response = await api.get(`/memories/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setMemory(response.data)
      } catch (error) {
        console.error('Failed to fetch memories:', error)
      }
    }

    fetchMemory()
  }, [id])

  if (!memory) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Image
        src={memory.coverUrl}
        alt=""
        width={592}
        height={280}
        className="w-full aspect-video object-cover rounded-lg"
      />
      <time className="flex items-center gap-2 text-sm text-gray-100">
        {dayjs(memory.createdAt).format('D[ de ] MMMM[, ]YYYY')}
      </time>
      <p className="flex-1 p-0 text-lg leading-relaxed text-gray-100">
        {memory.content}
      </p>
    </>
  )
}

export default MemoryDetails
