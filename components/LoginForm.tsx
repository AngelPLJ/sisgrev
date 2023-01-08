import { FormEvent } from 'react'

export default function LoginForm({
  errorMessage,
  onSubmit,
}: {
  errorMessage: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}) {
  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center'>
      <label className='flex flex-col'>
        <span className='mb-2'>Ingrese su correo:</span>
        <input type={'text'} name={'email'} required />
      </label>
      <label className='flex flex-col'>
        <span className='mt-2 mb-2'>Ingrese su contraseña:</span>
        <input type={'password'} name={'password'} required></input>
      </label>

      <button className='mt-9 bg-cafeClaro text-center py-1 px-5 rounded-full' type="submit">Login</button>

      {errorMessage && <p className="mt-2">{errorMessage}</p>}
    </form>
  )
}