import { ChangeEvent, useState } from 'react';


export const useForm = <T extends Object>( initialState: T ) => {
    
    const [formulario, setFormulario] = useState(initialState);

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target; //destructuring

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    return {
        formulario,
        handleChange
    }
    
}