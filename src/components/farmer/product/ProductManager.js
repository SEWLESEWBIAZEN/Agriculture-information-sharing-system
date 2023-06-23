import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material'
import Footer from '../Footer'
import NavBar from '../NavBar';
import img from '../../assets/wheat.jpg'
import img1 from '../../assets/teff.jpg'
import img2 from '../../assets/corn.jpg'

const ProductManagement = () =>
{
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState();
    const [category, setCategory] = useState('');
    const [selectedImg, setSelectedImg] = useState(null);
    const [description, setDescription] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [date, setDate] = useState('');


    const pros = [
        {
            name: 'wheat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            quantity: 3, category: 'category 1', price: 1000, selectedImg: img, date: '1/2/2000'
        },
        {
            name: 'Teff', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            quantity: 5, category: 'category 1', price: 2000, selectedImg: img1, date: '1/2/2000'
        },
        {
            name: 'Maize', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            quantity: 3, category: 'category 1', price: 1500, selectedImg: img2, date: '1/2/2000'
        },
        {
            name: 'wheat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            quantity: 2, category: 'category 1', price: 1000, selectedImg: img, date: '1/2/2000'
        },
        {
            name: 'teff', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            quantity: 1, category: 'category 1', price: 2000, selectedImg: img1, date: '1/2/2000'
        },
        {
            name: 'wheat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            quantity: 4, category: 'category 1', price: 1000, selectedImg: img, date: '1/2/2000'
        }

    ]


    useEffect(() =>
    {
        setProducts(pros.slice(0, 3))
    }, [])

    const handleNameChange = (e) =>
    {
        setName(e.target.value);
    };

    const handlePriceChange = (e) =>
    {
        setPrice(e.target.value);
    };
    const handleQuantityChange = (e) =>
    {
        setQuantity(e.target.value);
    };
    const handleCategoryChange = (e) =>
    {
        setCategory(e.target.value);
    };
    const handleSelectedImgChange = (e) =>
    {
        const file = e.target.files[0];
        setSelectedImg(URL.createObjectURL(file));
    };

    const handleDescriptionChange = (e) =>
    {
        setDescription(e.target.value);
    };

    const handleAddProduct = () =>
    {
        // if (name.trim() === '' || price.trim() === '' || contact.trim() === '' || description.trim())
        // {
        //     return;
        // }

        const newProduct = {
            name: name,
            price: price,
            category: category,
            quantity: quantity,
            description: description,
            selectedImg: selectedImg,
            date: date

        };
        if (editMode)
        {
            const updatedProducts = [...products];
            updatedProducts[editIndex] = newProduct;
            setProducts(updatedProducts);
            setEditMode(false);
            setEditIndex(null);
            setDate(new Date().toLocaleDateString());
        } else
        {
            setDate(new Date().toLocaleDateString());
            setProducts([...products, newProduct]);
        }
        setName('');
        setPrice('');
        setCategory('');
        setQuantity();
        setSelectedImg(null);
        setDescription('');
    };

    const handleEditProduct = (index) =>
    {
        const productToEdit = products[index];
        setName(productToEdit.name);
        setPrice(productToEdit.price);
        setDescription(productToEdit.description);
        setCategory(productToEdit.category)
        setSelectedImg(productToEdit.selectedImg);
        setDate(new Date().toLocaleDateString());
        setQuantity(productToEdit.quantity);
        setEditMode(true);
        setEditIndex(index);
    };

    const handleDeleteProduct = (index) =>
    {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };
    const handleExpand = () =>
    {
        setExpanded((prevExpanded) => !prevExpanded);
        setProducts((prevProducts) => (expanded ? pros.slice(0, 3) : pros));
    };



    return (
        <div>
            <div style={{
                position: 'fixed', top: '0px', left: '0px'
            }}>
                <NavBar />
            </div>

            <div style={{ display: 'flex', marginTop: '5rem' }}>

                {/* add and/or product form*/}
                <div style={{ display: 'block', margin: '1rem', backgroundColor: 'whitesmoke', maxHeight: '38rem' }}>

                    <h2>ADD PRODUCT</h2>
                    <div style={{ margin: '2rem 0.5rem' }}>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div style={{ margin: '2rem 0.5rem' }}>
                        <input
                            type="text"
                            placeholder="Product Category"
                            value={category}
                            onChange={handleCategoryChange}
                        />
                    </div>
                    <div style={{ margin: '2rem 0.5rem' }}>
                        <input
                            type="text"
                            placeholder="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>


                    <div style={{ margin: '2rem 0.5rem' }}>
                        <input
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </div>

                    <div style={{ margin: '2rem 0.5rem' }}>
                        <textarea
                            type="text"
                            rows={5}
                            cols={23}
                            placeholder="Write the product description here...."
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>

                    <div style={{ margin: '2rem 0.5rem' }}>
                        <input
                            type="file"
                            placeholder="select an image"
                            accept='image/*'
                            value={selectedImg}
                            onChange={handleSelectedImgChange}
                        />
                    </div>


                    <div style={{ margin: '2rem 0.5rem' }}>
                        <button className='btn btn-primary' onClick={handleAddProduct}>
                            {editMode ? 'Update Product' : 'Add Product'}
                        </button>
                    </div>
                </div>
                {/* product display section */}
                <div style={{ backgroundColor: 'whitesmoke', margin: '1rem' }}>
                    <h2>Product List</h2>
                    {products.length === 0 ? (
                        <p>No products available.</p>
                    ) : (
                        <div>
                            <ul>
                                {products.map((product, index) => (
                                    <Paper elevation={6} sx={{ margin: '1rem' }} key={index}>
                                        <span style={{ marginRight: '1.5rem', color: 'red' }}>Product name: {product.name}</span>
                                        <span style={{ marginLeft: '1.5rem', color: 'red' }}>Quantity: {product.quantity} Kuintel</span>
                                        <br />
                                        <span style={{ display: 'inline-flex', marginLeft: '2rem' }}>
                                            <img
                                                src={product.selectedImg}
                                                width='600rem'
                                                height='120rem'
                                                style={{ borderRadius: '2rem' }}

                                            />
                                            <div>
                                                <span style={{ marginRight: '0.5rem' }}>{product.description}</span>
                                                <br />
                                                <span style={{ marginRight: '1.0rem', color: 'green' }}>Product Category: {product.category}</span>
                                                <span style={{ backgroundColor: 'whitesmoke' }}> Price: ETB{product.price}</span>
                                            </div>
                                        </span>
                                        <br />
                                        <button className='btn btn-warning' style={{ margin: '1rem' }} onClick={() => handleEditProduct(index)}>Edit</button>
                                        <button className='btn btn-danger' style={{ margin: '1rem' }} onClick={() => handleDeleteProduct(index)}>
                                            Delete
                                        </button>
                                    </Paper>
                                ))}
                            </ul>
                            <button className='btn btn-primary mb-3' onClick={handleExpand}>
                                {expanded ? 'Show Less...' : 'Show More...'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductManagement;
