import {useFormik} from 'formik'
import * as YUP from 'yup'
import './SignUp.css'
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp(){
    const navigate = useNavigate();
    const formSchema = YUP.object().shape(
        {
            username: YUP
            .string()
            .min(5 ,'Too short!')
            .max(7 ,'Too long!')
            .required('Must be filled'),
            first_name:YUP
            .string()
            .min(2 , 'Too short!')
            .max(13, 'Too long')
            .required('First name required'),
            second_name: YUP
            .string()
            .required('Second name required'),
            email:YUP
            .string()
            .required('Email required')
            .email('Invalid email'),            
            phone_number: YUP
            .string()
            .required('Phone number required')
            .min(10, 'Invalid phone number')
            .max(13, 'Phone number does not exist'),
            password: YUP
            .string()
            .required('Password required')
            .min(8 , 'Password must be 8 characters long')
            .max(15 , 'Password should not exceed 15 characters')
            .matches(/[A-Z]/, 'password must have atleast one uppercase')
            .matches(/[0-9]/, 'Password must have atleast one number')
            .matches(/[a-z]/, 'Password must have atleast one lowercase')
            .matches(/[^\w]/, 'Password requires a symbol'),
            address: YUP
            .string()
            .required('Address must be added'),
            confirm_password: YUP
            .string()
            .required('Required to re-enter the password!')
            .oneOf([YUP.ref('password'), null], 'Password does not match'),
            role:YUP.string().required('Must choose role')
        }
    )
    const formik = useFormik(
        {
            initialValues:{
                username: '',
                first_name: '',
                second_name: '',
                email: '',
                phone_number: '',
                address: '',
                password: '',
                role: '',      
            },
            validationSchema: formSchema,
            onSubmit:(values)=>{
                console.log('hello world')
                console.log(values)
                fetch('http://127.0.0.1:5555/signup',{
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify(values)
                })
                .then((r)=>{
                    if(r.ok){
                        navigate('/LogIn', { replace: true });
                    }
                    else {
                        alert ("Sign up unsuccessfully")
                    }
                    
                })
            }
        }
    )
    return(
        <form onSubmit={formik.handleSubmit}>
            <div className='top'>
            <div className='card'>
                <div class="card_title">
                    <h2>Create Account</h2>
                    <span>Already have an account? <NavLink to="/LogIn">Sign In</NavLink></span>
                </div>
                <div className='form-field'>
                    <div className='scrollable scroll'>
                        <label htmlFor='first_name'>Full names<span className='color-red'>*</span></label>
                        <div className='display-flex'>
                            <div className='flex-column'>
                                <input
                                onChange={formik.handleChange}
                                value={formik.values.first_name}
                                name='first_name'
                                placeholder='First name'
                                type='text'
                                className='reduce-size'
                                />
                                <p>{formik.errors.first_name}</p>
                            </div>

                            <div className='flex-column'>
                                <input
                                onChange={formik.handleChange}
                                value={formik.values.second_name}
                                name='second_name'
                                placeholder='Second name'
                                type='text'
                                className='reduce-size'
                                />
                                <p>{formik.errors.second_name}</p>
                            </div>
                        </div>

                        <label htmlFor='username'>Username<span className='color-red'>*</span></label>
                        <input
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        name='username'
                        placeholder='username'
                        type='text'
                        />
                        <p>{formik.errors.username}</p>
                        
                        <div className='display-flex'>
                            <div>
                                <label htmlFor='email'>Email<span className='color-red'>*</span></label>
                                <input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                name='email'
                                placeholder='Email'
                                type='email'
                                />
                                <p>{formik.errors.email}</p>
                            </div>

                            <div>
                                <label htmlFor='phone_number'>Phone number<span className='color-red'>*</span></label>
                                <input
                                onChange={formik.handleChange}
                                value={formik.values.phone_number}
                                name='phone_number'
                                placeholder='Phone number'
                                type='text'
                                />
                                <p>{formik.errors.phone_number}</p>
                            </div>
                        </div>

                        
                        <label htmlFor='address'>Address<span className='color-red'>*</span></label>
                        <input
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        name='address'
                        placeholder='Address'
                        type='text'
                        />
                        <p>{formik.errors.address}</p>

                        <label htmlFor='role'>Role<span className='color-red'>*</span></label>
                        <br />
                        <select
                        onChange={formik.handleChange}
                        value={formik.values.role}
                        name='role'
                        placeholder='choose role'
                        >
                            <option>Choose Role</option>
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>

                        <p>{formik.errors.role}</p>

                        <br />
                        <label htmlFor='password'>Password</label>
                        <input
                        value={formik.values.password}
                        name='password'
                        onChange={formik.handleChange}
                        type='password'
                        />
                        <p>{formik.errors.password}</p>

                        <label htmlFor='confirm_password'>Re-enter password<span className='color-red'>*</span></label>
                        <input
                        onChange={formik.handleChange}
                        name='confirm_password'
                        placeholder='Re-enter password'
                        type='password'
                        />
                        <p>{formik.errors.confirm_password}</p>
                    </div>    

                    <input 
                    type='submit'
                    value='Sign up'
                    id='submit'
                    />
                </div>    
            </div>
            </div>
        </form>
    )
}

export default SignUp;





