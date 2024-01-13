import React from 'react'

const KalviumCard = () => {
    return (
        <div className=' p-5 max-w-md mx-auto  rounded-xl shadow-xl w-full items-center mt-36'>
            <div className='flex justify-items-center items-center '>
                <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium-Logo" className='w-40'/>
                <div className='ml-10'>
                    <h4 className='font-bold'>Kalvium Store</h4>
                    <p>You have a new course!</p>
                </div>
            </div>
        </div>
    )
}

export default KalviumCard
