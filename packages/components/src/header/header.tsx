import React from 'react'

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Book Recommendations</h1>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search books..."
                    className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </header>
    )
}