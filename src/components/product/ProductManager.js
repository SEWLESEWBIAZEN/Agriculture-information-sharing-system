import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material'
import Footer from '../Footer'
import NavBar from '../NavBar';


const ProductManagement = () =>
{
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const pros = [
        {
            name: 'wheat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            contact: '0912334455', price: 1000
        },
        {
            name: 'Teff', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            contact: '0912334455', price: 2000
        },
        {
            name: 'Maize', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            contact: '0912334455', price: 900
        },
        {
            name: 'wheat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            contact: '0912334455', price: 1000
        },
        {
            name: 'Teff', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            contact: '0912334455', price: 2000
        },
        {
            name: 'Maize', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            contact: '0912334455', price: 900
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
    const handleContactChange = (e) =>
    {
        setContact(e.target.value);
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
            contact: contact,
            description: description
        };
        if (editMode)
        {
            const updatedProducts = [...products];
            updatedProducts[editIndex] = newProduct;
            setProducts(updatedProducts);
            setEditMode(false);
            setEditIndex(null);
        } else
        {
            setProducts([...products, newProduct]);
        }
        setName('');
        setPrice('');
        setContact('');
        setDescription('');
    };

    const handleEditProduct = (index) =>
    {
        const productToEdit = products[index];
        setName(productToEdit.name);
        setPrice(productToEdit.price);
        setDescription(productToEdit.description);
        setContact(productToEdit.contact)
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
        setExpanded(!expanded)
        setProducts(expanded ? pros : pros.slice(0, 3))


    };


    return (
        <div>
            <div style={{
                position: 'fixed', top: '0px', left: '0px'
            }}>
                <NavBar />
            </div>

            <div style={{ display: 'flex', marginTop: '5rem' }}>


                <div style={{ display: 'block', margin: '1rem', backgroundColor: 'whitesmoke', maxHeight: '30rem' }}>
                    <h2>ADD PRODUCT</h2>
                    <div style={{ margin: '2rem' }}>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div style={{ margin: '2rem' }}>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={contact}
                            onChange={handleContactChange}
                        />
                    </div>


                    <div style={{ margin: '2rem' }}>
                        <input
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={handlePriceChange}
                        />
                    </div>

                    <div style={{ margin: '2rem' }}>
                        <textarea
                            type="text"
                            rows={5}
                            cols={23}
                            placeholder="Write the product description here...."
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>


                    <div style={{ margin: '2rem' }}>
                        <button className='btn btn-primary' onClick={handleAddProduct}>
                            {editMode ? 'Update Product' : 'Add Product'}
                        </button>
                    </div>
                </div>
                <div style={{ backgroundColor: 'whitesmoke', margin: '1rem' }}>
                    <h2>Product List</h2>
                    {products.length === 0 ? (
                        <p>No products available.</p>
                    ) : (
                        <div>
                            <ul>
                                {products.map((product, index) => (
                                    <Paper elevation={6} sx={{ margin: '1rem' }} key={index}>
                                        <span style={{ marginRight: '0.5rem', color: 'red' }}>Product name: {product.name}</span><br />
                                        <span style={{ marginRight: '0.5rem' }}>{product.description}</span><br />
                                        <span style={{ marginRight: '1.0rem', color: 'green' }}>Phone Number: {product.contact}</span>
                                        <span style={{ backgroundColor: 'whitesmoke' }}> Price: ${product.price}</span>
                                        <button className='btn btn-warning' style={{ margin: '1rem' }} onClick={() => handleEditProduct(index)}>Edit</button>
                                        <button className='btn btn-danger' style={{ margin: '1rem' }} onClick={() => handleDeleteProduct(index)}>
                                            Delete
                                        </button>
                                    </Paper>
                                ))}
                            </ul>
                            <button className='btn btn-primary mb-3' onClick={handleExpand}>
                                {expanded ? 'Show More...' : 'Show Less...'}
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
