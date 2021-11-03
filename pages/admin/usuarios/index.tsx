import React from 'react'
import Link from 'next/link'

const index = () => {
    return (
        <div>
            <p>Pagina de admin de usuarios</p>
            <Link href='/'>
                <a>Ir al home</a>
            </Link>
        </div>
    )
}

export default index
