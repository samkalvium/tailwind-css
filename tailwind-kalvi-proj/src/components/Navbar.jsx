import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav >
                <div className='flex  items-center justify-between bg-red-500'>
                    <div className="flex items-center  p-5   ">
                        <div>
                            <h2 className="text-white text-3xl font-bold">Kalvium</h2>
                        </div>
                        <span className='flex  mx-10 '>
                            <h4 className='text-white mx-5'>About us</h4>
                            <h4 className='text-white mx-5'>Contacts</h4>
                            <h4 className='text-white mx-5'>Courses</h4>
                        </span>
                    </div>
                    <div>
                    <button className='mx-5 px-3 text-white border border-white rounded'>Login</button>
                    </div>
                </div>
            </nav>
            <div>
                <button className='mt-6 ml-48 bg-blue-500 text-white p-2 font-bold text-xs rounded-md'>Button One</button>
            </div>
        </div>
    )
}

export default Navbar
