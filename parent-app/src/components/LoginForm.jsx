import React, { useState } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { loginWithCredentials } from "../api";
import { AppContext } from "../AppContext";
import { FormInputField } from "../shared/FormUtils";

// Temporary UI just to test functionality
export function LoginForm() {
    const context = useContext(AppContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const canLogin = useMemo(() => username.length > 0 && password.length > 0, [username, password])

    function submitForm(e) {
        e.preventDefault()
        setLoading(true)
        loginWithCredentials(username, password, (r) => {
            if (r.ok) {
                console.log('logged-in');
            }
            else {
                console.log('failed')
            }
            console.log((r));
            setLoading(false)
        })
    }
    
    return (
        <form
            method="POST"
            onSubmit={submitForm}
            className="w-full bg-cyan rounded-2xl flex flex-col gap-2 justify-center items-center py-3"
        >
            <FormInputField
                classExtra="w-max"
                type="text"
                value={username}
                setValue={setUsername}
                placeholder="Όνομα Χρήστη"
            />
            <FormInputField
                classExtra="w-max"
                type="password"
                value={password}
                setValue={setPassword}
                placeholder="Κωδικός"
            />
            <button
                type="submit"
                className="
                    rounded-xl
                    px-3 py-1
                    text-lg
                    bg-navbar-cyan
                    hover:bg-navbar-dark-cyan
                    disabled:bg-dark-cyan
                    disabled:text-gray-500
                "
                disabled={!canLogin}
            >
                Σύνδεση
            </button>
        </form>
    )
}
