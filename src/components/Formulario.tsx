import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    nombre: string;
    edad: number
}

export const Formulario = () => {

    /* const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    });

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target; //destructuring

        setFormulario({
            ...formulario,
            [name]: value
        });
    } */

    const { formulario, handleChange } = useForm<FormData>({
        email: 'jose@correo.com',
        nombre: 'Jose',
        edad: 22
    });

    const { email, nombre, edad } = formulario;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} value={email}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text" className="form-control" name="nombre" onChange={handleChange} value={nombre}/>
            </div>

            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )

}