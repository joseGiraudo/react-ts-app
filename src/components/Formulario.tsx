import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    nombre: string;
    edad: number
}

export const Formulario = () => {

    // todo esto lo envuelvo en un custom hook
    /* 

    const [formulario, setFormulario] = useState({
        email: '',
        nombre: '',
        edad: 0
    });

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target; //destructuring

        setFormulario({
            ...formulario,
            [name]: value
        });
    } 
    */

    // consumo el custom Hook useForm para manejar los cambios en el formulario y mostrarlos
    // el useForm extiende el tipo de dato que le pase, para poder reutilizarlo en otros forms
    const { formulario, handleChange } = useForm<FormData>({
        email: 'jose@correo.com',
        nombre: 'Jose',
        edad: 23
    });

    // lo desestructuro para pasarselos como los values de los input
    const { email, nombre, edad } = formulario;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" name="email" value={email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" name="nombre" value={nombre} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input type="number" className="form-control" name="edad" value={edad} onChange={handleChange} />
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>
        </form>
    )

}