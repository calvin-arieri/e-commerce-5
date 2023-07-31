import {useFormik} from 'formik'
import * as Yup from 'yup'
import './UpdateProfile.css'

function UpdateProfile () {
    const formSchema = Yup.object().shape(
        {
            username: Yup.string()
            .min(5, 'Username consist of more than five characters')
            .max(10, 'Username must not exceed ten characters'),
            email: Yup.string()
            .min(2, 'Invalid email'),
            password: Yup.string()
            .min(8, 'A good password must consist of eight characters'),
            address: Yup.string()
            .min(3, 'invalid address'),
            phone_number: Yup.string()
            .min(9, 'Invalid phone number')
            .max(13, 'Number does not exist')
        }
    )
    const formik = useFormik(
        {
            initialValues:{
                username: '',
                email: '',
                password: '',
                address: '',
                phone_number: '',
            },
            validationSchema:formSchema,
            onSubmit:(values)=>{
                console.log('hello world')
                console.log(values)
                fetch('' , {
                    method: 'PATCH',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(values)
                })
                .then((r)=>console.log(r.statusText))
            }
        }
    )

    return(
        <div className='update-profile-container'>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='username'>Username</label><br />
                <input
                value={formik.values.username}
                placeholder='Username'
                onChange={formik.handleChange}
                name='username'
                type='text'
                />
                <p>{formik.errors.username}</p>

                <label htmlFor='email'>Email</label><br />
                <input
                value={formik.values.email}
                placeholder='Email'
                onChange={formik.handleChange}
                name='email'
                type='email'
                />
                <p>{formik.errors.email}</p>

                <label htmlFor='address'>Address</label><br />
                <input
                value={formik.values.address}
                placeholder='Address'
                onChange={formik.handleChange}
                name='address'
                type='text'
                />
                <p>{formik.errors.address}</p>

                <label htmlFor='phone_number'>Phone</label><br />
                <input
                value={formik.values.phone_number}
                name='phone_number'
                onChange={formik.handleChange}
                type='number'
                placeholder='Phone number'
                />
                <p>{formik.errors.phone_number}</p> 
                
                <label htmlFor='password'>Password</label><br />
                <input
                value={formik.values.password}
                placeholder='Password'
                onChange={formik.handleChange}
                name='password'
                type='password'
                />
                <p>{formik.errors.password}</p>

                <div>
                    <input 
                    type='submit'
                    value='Update details'
                    className='accept-button'
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile;