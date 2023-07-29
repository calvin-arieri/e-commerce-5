import {useFormik} from 'formik'
import * as Yup from 'yup'

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
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input
            value={formik.values.username}
            placeholder='username'
            onChange={formik.handleChange}
            name='username'
            type='text'
            />
            <p>{formik.errors.username}</p>

            <label htmlFor='email'>Email</label>
            <input
            value={formik.values.email}
            placeholder='email'
            onChange={formik.handleChange}
            name='email'
            type='email'
            />
            <p>{formik.errors.email}</p>

            <label htmlFor='address'>Address</label>
            <input
            value={formik.values.address}
            placeholder='address'
            onChange={formik.handleChange}
            name='address'
            type='text'
            />
            <p>{formik.errors.address}</p>

            <label htmlFor='phone_number'>Phone</label>
            <input
            value={formik.values.phone_number}
            name='phone_number'
            onChange={formik.handleChange}
            type='number'
            />
            <p>{formik.errors.phone_number}</p> 
            
            <label htmlFor='password'>password</label>
            <input
            value={formik.values.password}
            placeholder='password'
            onChange={formik.handleChange}
            name='password'
            type='password'
            />
            <p>{formik.errors.password}</p>

            <input 
            type='submit'
            value='Update details'
            />
        </form>
    )
}

export default UpdateProfile;