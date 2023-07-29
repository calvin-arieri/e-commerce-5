import { useFormik } from "formik";
import * as Yup from 'yup'
import { useState, useEffect } from "react";
function UpdateProduct(){
    const [products , setProducts] = useState([])
    const [product_number, setproduct_number] = useState(0) 

    let id  
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then((r)=>r.json())
        .then ((data)=>setProducts(data)
        )
    }, [])
 
    let delProduct = products.filter((product)=>{
            if(product.id == product_number && product.user_id == id){
                return(product)
            }
        }
        )
        let categories = ['Choose category','Televisions' , 'Laptops', 'Smartphones', 'Tablets', 'Cameras']  
    const formSchema = Yup.object().shape(
        {
            name:Yup.string()
            .min(3 , 'Name must exceed three characters')
            .max(20, 'Name must not exceed 20 characters'),
            quantity:Yup.string()
            .max(3, 'Must not exceed three characters'),
            desciption: Yup.string()
            .min(10, 'Product description must exceed 20 characters')            
        }
    )

    const formik = useFormik(
        {
            initialValues:{
                name: delProduct[0]== undefined ? '' : delProduct[0].name,
                quantity: delProduct[0]== undefined ? '' : delProduct[0].quantity,
                description: delProduct[0]== undefined ? '' : delProduct[0].desciption,
                category: delProduct[0]== undefined ? '' : delProduct[0].category,
            },
            validationSchema:formSchema,
            onSubmit:(values)=>{
                console.log(values)
                fetch(`http://localhost:3000/products/${delProduct[0].id}`,{
                    method: 'PATCH',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(values)
                })
                .then((r)=>console.log(r))
            }
        }
    )
    
    return(
        <div>
            <div>
                <h4>Update product details</h4>
            </div>
            <div>
                <input 
                onChange={(e)=>{
                    setproduct_number(e.target.value)
                }}
                type="text"
                required
                />
            </div>
            {delProduct[0]== undefined ? product_number.length < 1 ? 'Enter product number' : 'searching' :<form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                placeholder={delProduct[0].name}
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                />
                <p>{formik.errors.name}</p>

                <label htmlFor="quantity">Quantity</label>
                <input
                type="text"
                placeholder={delProduct[0].quantity}
                onChange={formik.handleChange}
                value={formik.values.quantity}
                name="quantity"
                />
                <p>{formik.errors.quantity}</p>

                <label htmlFor='category'>category</label>
                        <select onChange={formik.handleChange} value={formik.values.category} name='category'>
                            {
                            categories.map((oneCategory)=>{
                                return(
                                    <option key={oneCategory} value={oneCategory} label={oneCategory}>{oneCategory}</option>
                                )
                            })
                            }
                        </select>
                <p>{formik.errors.category}</p>

                <label htmlFor='description'>Description</label>
                <textarea
                value={formik.values.description}
                onChange={formik.handleChange}
                name='description'
                placeholder= {delProduct[0].desciption}
                >
                </textarea>    
                <p>
                    {formik.errors.description}
                </p>

                <input
                type="submit"
                value='Update product'
                />
                </form>}
        </div>
    )
}
 export default UpdateProduct;