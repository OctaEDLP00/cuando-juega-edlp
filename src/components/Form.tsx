import { useState } from 'react'

export default function Form() {

  const [responseMessage, setResponseMessage] = useState('')

  async function changeSubmit(e: SubmitEvent) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const response = await fetch('/api/2023/partidos', {
      method: 'POST',
      body: formData
    })
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message)
    }
  }

  return (
    <form>
      <div className='mb-6'>
        <label htmlFor='versus' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Versus</label>
        <input type='text' id='versus' name='versus' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' placeholder='' required />
      </div>
      <div className='mb-6'>
        <label htmlFor='copa' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Copa</label>
        <input type='text' id='copa' name='copa' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' required />
      </div>
      <div className='mb-6'>
        <label htmlFor='timestamp' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Timestamp</label>
        <input type='text' id='timestamp' name='timestamp' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' required />
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='img'>Img</label>
        <input className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' type='file' id='img' name='img' accept='image/png, image/svg+xml' required />
        <p className='mt-1 text-sm text-gray-500 dark:text-gray-300' id='file_input_help'>PNG or SVG</p>
      </div>
      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Agregar</button>
    </form>
  )
}
