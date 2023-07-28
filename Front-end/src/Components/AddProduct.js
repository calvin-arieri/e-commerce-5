import {useFormik} from 'formik'
import * as Yup from 'yup'
function AddProduct(){
    let id = 1
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
           .max(200, 'The description must not exceed 200 characters')
        }
    )
    const formik = useFormik(
        {
            initialValues:{
                image_url: " ",
                name:" ",
                price: ' ',
                quantity: ' ',
                category: ' ',
                description:' ', 
                rating: 0,
                mp: 0,
                cp:0,
                user_id: id
            },
            validationSchema:formSchema,
            onSubmit:(values)=>{
                console.log(values)
                fetch('http://localhost:3000/products', {
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

    return(
        <form>
            <div>
                <h3>ADD NEW PRODUCT</h3>
            </div>
            <div>
                
            </div>
        </form>
    )
}