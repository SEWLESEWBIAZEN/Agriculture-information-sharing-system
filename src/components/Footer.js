import React from 'react'

const Footer = () =>
{
    return (
        <div style={{ color: '#fff', display: 'flex', bottom: '1px', marginTop: '4rem', minHeight: '12rem' }} className='bg-secondary '>

            <div style={{ position: 'absolute', left: '3px' }}>1</div>
            <div style={{ margin: '0 auto' }}>2</div>
            <div style={{ position: 'absolute', right: '3px' }}>3</div>
        </div>
    )
}

export default Footer