import { useContext, useState } from "react"
import { AppContext } from "../AppContext"
import { FormActionButton } from "./FormActionButton"
import { FormInputField } from "./FormInputField"

export function FindUserForm() {

    const [inputText, setInputText] = useState('')
    const context = useContext(AppContext)

    function closeModalAndNavigate(dest) {
        context.setState({
            ...context.state,
            showModal: false,
            modalContent: null
        })
        // This might be risky...
        context.state.navigate('/users')
    }

    return (
        <div className="flex flex-col gap-2 text-2xl">
            <FormInputField
                value={inputText}
                setValue={setInputText}
                classExtra="bg-gray-200 font-thin"
            />
            <FormActionButton
                text='Αναζήτηση με Όνομα Χρήστη'
                action={() => closeModalAndNavigate('/users')}
            />
            <FormActionButton
                text='Αναζήτηση με ID Χρήστη'
                action={() => closeModalAndNavigate('/users')}
            />
        </div>
    )
}
