import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Navbar />

            <div className='flex items-center justify-center mt-28'>
                <div>
                    <form onSubmit={() => { }}>

                        <h4 className='text-2xl mb-7'>Login</h4>


                        <input type="text" placeholder='Email' className='input-box' />

                        <button type='submit' className='btn-primary'>
                            Se connecter
                        </button>

                        <p className='text-sm text-center mt-4'>
                            Pas encore inscrit ?{" "}
                            <Link to="/signup" className="">
                            Create an Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login