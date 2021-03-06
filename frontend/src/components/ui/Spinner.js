import React from 'react'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
            <span className="m-2 text-sm text-gray-600">Cargando...</span>
        </div>
    )
}

export default Spinner
