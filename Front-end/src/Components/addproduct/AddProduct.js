import {useFormik} from 'formik'
import * as Yup from 'yup'
import './AddProduct.css'
import Cookies from 'js-cookie';
function AddProduct(){
    let id = Cookies.get('user_id')
    const formSchema = Yup.object().shape(
        {
           image_url: Yup.string().required('Field must be filled'),
           name: Yup.string()
           .required('Product name must be entered')
           .min(5, 'A name must have more than 5 characters')
           .max(20, 'A name should not exceed 20 characters'),
           price: Yup.string().required('Price must be entered'),
           quantity:Yup.string().required('The quantity of the product must be fllled'),
           category:Yup.string().required('You must choose the category'),
           description:Yup.string()
           .required('Description or the features of the product must be added')
           .min(20 , 'The description should be more than 20 characters')
           .max(200, 'The description must not exceed 200 characters'),
           specs: Yup.string()
           .required('Must no be left empty')
           .min(20 , "Add more info")
           .max(400, "Enough info")
        }
    )
    const formik = useFormik(
        {
            initialValues:{
                image_url: "",
                name:"",
                price: 0,
                quantity: 0,
                category: '',
                description:'',
                specs: '' ,
                user_id: id
            },
            validationSchema:formSchema,
            onSubmit:(values)=>{
                console.log(values)
                fetch('http://127.0.0.1:5555/products', {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(values)
                })
                .then((r)=>{
                    if(r.ok){
                        alert(`${values.name} added successfully`)
                    }
                })                
            }
        }
    )
    let categories = ['Choose category','Televisions' , 'Laptops', 'Smartphones', 'Tablets', 'Cameras']

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className='flex-container'>
                <div className='flex-container2'>
                    <label htmlFor='image_url'>Image</label>
                    <input
                    type='url'
                    value={formik.values.image_url}
                    onChange={formik.handleChange}
                    name='image_url'
                    className='adjust-height'
                    />
                    <p>
                        {formik.errors.image_url}
                    </p>

                    <label htmlFor='name'>Name</label>
                    <input
                    type='text'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name='name'
                    className='adjust-height'
                    />
                    <p>
                        {formik.errors.name}
                    </p>

                    <label htmlFor='price'>Price</label>
                    <input
                    type='number'
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    name='price'
                    className='adjust-height'
                    />
                    <p>
                        {formik.errors.price}
                    </p>
                    <div className='flex-container3'>
                        <div >
                            <label htmlFor='quantity'>Quantity</label>
                            <input
                            type='number'
                            value={formik.values.quantity}
                            onChange={formik.handleChange}
                            name='quantity'
                            className='quantity-input'
                            />
                            <p>
                                {formik.errors.quantity}
                            </p>
                        </div>
                        <div>
                            <label htmlFor='category'>category</label>
                            <select onChange={formik.handleChange} className='select-changes' value={formik.values.category} name='category'>
                                {
                                categories.map((oneCategory)=>{
                                    return(
                                        <option value={oneCategory} label={oneCategory}>{oneCategory}</option>
                                    )
                                })
                                }
                            </select>
                            <p>{formik.errors.category}</p>
                        </div>
                    </div>

                    
                    <label htmlFor='description'>Description</label>
                    <textarea
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    name='description'
                    className='text-area-height'
                    placeholder='Describe here ......'
                    >
                    </textarea>    
                    <p>
                        {formik.errors.description}
                    </p>

                    <label htmlFor='specs'>Specifications</label>
                    <textarea
                    value={formik.values.specs}
                    onChange={formik.handleChange}
                    name='specs'
                    className='text-area-height'
                    placeholder='Specifications here'
                    >
                    </textarea>    
                    <p>
                        {formik.errors.specs}
                    </p>

                    <input
                    type='submit'
                    value='Add'
                    className='submit-button'
                    />
                </div>
            </div>
        </form>
    )
}

export default AddProduct;