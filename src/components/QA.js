import React from 'react'
import NavBar from './farmer/NavBar'
import { Card, Typography, CardMedia, CardActions, CardContent, CardActionArea, } from '@mui/material'
import { useState } from 'react';
import samuel from './assets/samuel.jpg'
import sewlesew from './assets/sewlesew.jpg'
import yonas from './assets/Yonas.jpg'
import melkamu from './assets/melkamu.jpg'
import './qa.css'
import MyFooter from './farmer/Footer';




const QA = () =>
{
    const [title, setTitle] = useState();
    const [photo, setPhoto] = useState();
    const [ph_number, setPh_number] = useState();
    const [link, setLink] = useState();

    const da = [
        { name: 'melkamu zinabu', photo: { melkamu }, ph_number: '0900631287', link: 'https://t.me/Mzzw2012' },
        { name: 'samuel kibret', photo: { samuel }, ph_number: '0970220583', link: 'https://t.me/samuelKibret' },
        { name: 'Sewlesew Biazen', photo: { sewlesew }, ph_number: '0961718044', link: 'https://t.me/u_and_me_1' },
        { name: 'Yonas Kebede', photo: { yonas }, ph_number: '0953055202', link: 'https://t.me/yonas_k_g' },
        { name: 'Yonas Kebede', photo: { yonas }, ph_number: '0953055202', link: 'https://t.me/yonas_k_g' },
        { name: 'Yonas Kebede', photo: { yonas }, ph_number: '0953055202', link: 'https://t.me/yonas_k_g' },
        { name: 'Yonas Kebede', photo: { yonas }, ph_number: '0953055202', link: 'https://t.me/yonas_k_g' },
        { name: 'Yonas Kebede', photo: { yonas }, ph_number: '0953055202', link: 'https://t.me/yonas_k_g' },
        { name: 'Yonas Kebede', photo: { yonas }, ph_number: '0953055202', link: 'https://t.me/yonas_k_g' },
    ]

    return (
        <div>
            <NavBar />
            <div style={{ marginTop: '5rem' }}>
                <h5> click one of links listed below to ask any question.</h5>
            </div>
            <div className='wrapper' style={{ margin: '10% auto' }}>

                {da.map(item => (

                    <div className='item' style=
                        {{
                            border: 'solid 1px black', minWidth: '220px',
                            minHeight: '160px', marginRight: '10px', padding: '3px',
                            backgroundColor: 'whitesmoke',
                        }}>
                        <img src={item.photo} alt="image" width='80px' height='80px' style={{ borderRadius: '35px' }} />
                        <h6>{item.name}</h6>
                        <p>{item.ph_number}</p>
                        <a href={item.link}>Chat Link</a>
                    </div>


                ))}
            </div>
            <MyFooter />

        </div>
    )
}

export default QA