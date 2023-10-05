
import React from 'react'

export default function Items({ children }) {
    return (
        <div className='flex border-b border-[color:var(--background-third)]'>
            {children}
        </div>
    )


}
