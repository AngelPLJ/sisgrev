'use client'

import LoginForm from "../../components/LoginForm"
import { useState } from "react"
import fetchJson, {FetchError} from "../../handlers/fetchUser"
import useUser from "../../hook/useUser"


export default function Login() {
    //Checamos si ya inicio sesion el usuario
    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true,
    })

    const [errorMsg, setErrorMsg] = useState('')

    return (
        <>
        <div className="flex justify-center">
            <div className="border-4 rounded-lg border-rosaPastel bg-cafeTransparente2 p-10 mt-8 text-rojoOscuro font-semibold">
                <LoginForm 
                    errorMessage={errorMsg}
                    onSubmit={async function handleSubmit(event) {
                        event.preventDefault()

                        const body = {
                            email: event.currentTarget.email.value,
                            password: event.currentTarget.password.value,
                        }

                        try {
                            mutateUser(
                                await fetchJson('/api/login', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json'},
                                    body: JSON.stringify(body),
                                })
                            )
                        } catch(error) {
                            if(error instanceof FetchError) {
                                setErrorMsg(error.data.message)
                            } else {
                                console.error(`Ocurrio un error inesperado:${error}`);
                                
                            }
                        }
                        
                    }}
                />
            </div>
        </div>
        </>
    )
}