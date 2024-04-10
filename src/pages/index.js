"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Weather from '@/components/Weather'
import Spinner from '@/components/Spinner'
import toast, { Toaster } from 'react-hot-toast';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdc5f9e36185f20bf29a3d4e1d178003`

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true)
    axios.get(url).then((response) => {
      if (response.cod == 404) {
        alert(response.message)
      } else {
        setWeather(response.data)
      }
    }).catch((error) => {
      toast.error("City not found")
    })
    setCity('')
    setLoading(false)
  }

  if (loading) {
    return <Spinner />
  } else {
    return (
      <>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <div className='absolute top-0 left-0 bottom-0 bg-black/40 z-[1]' />

        <Image className='object-cover' src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='background' layout='fill' />

        <div className='relative flex justify-between items-center max-w-[580px] w-full m-auto pt-4 text-white z-10'>
          <form onSubmit={fetchWeather} className=' flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
            <div>
              <input onChange={(e) => setCity(e.target.value)} className='bg-transparent border-none text-white focus:outline-none text-2xl' type='text' placeholder='Search city' />
            </div>
            <button onClick={fetchWeather}><BsSearch size={20} /></button>
          </form>
        </div>

        {weather.main && <Weather data={weather} />}

      </>
    )
  }


}
