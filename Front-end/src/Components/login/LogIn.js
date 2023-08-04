import { useFormik } from "formik";
import * as Yup from 'yup'
import './LogIn.css'
function LogIn(){
    const formSchema = Yup.object().shape(
        {
            email:Yup.string().required('Must be filled'),
            password: Yup.string().required('Must be filled').min(8,'Invalid password').max(15, 'Invalid password')
        }
    )
    const formik = useFormik(
        {
            initialValues:{
                email: "",
                password: "",
            },
            validationSchema: formSchema,
            onSubmit:(values)=>{
                console.log(values)
                fetch('/session' , 
                {
                    method : 'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(values)
                })
                .then((r)=>{
                    if(r.ok){
                        alert('Successfuly logged in')
                        r.json()
                    }
                })
                .then((data)=>{
                    console.log(data)
                })
            }
        }
    )
    return(
        <div className="top-most">
        <div className="form-container" >
            <div className="card-title">
                <h1>Log in</h1>
                <p>
                    Do not have account? <a href="#signup">get started</a>
                </p>
            </div>
            <form onSubmit={formik.handleSubmit} className='form-styling'>
                <label htmlFor="email">Email</label>
                <input
                type="email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
                placeholder="Email"
                />
                <p>{formik.errors.email}</p>
                <label htmlFor="password">Password </label>
                <input
                type="password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                placeholder="password"
                />
                <p>{formik.errors.password}</p>
                <div className='bottom-Icons'>
                    <input
                    type="submit"
                    value= 'log in'
                    id="submit"
                    /> 
                </div>                
            </form>
        </div>        
        </div>
    )
}
export default LogIn;