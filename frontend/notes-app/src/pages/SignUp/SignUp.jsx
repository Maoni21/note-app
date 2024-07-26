import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import PasswordInput from '../../components/Input/PasswordInput';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';



const SignUp = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  




  const handleLogin = async (e) => {
    e.preventDefault();

    if(!name) {
      setError("S'il vous plaît, mettez votre nom.")
    }

    if(!validateEmail(email)) {
      setError("S'il vous plaît, mettez une adresse email valide.");
      return;
    }

    if (!password) {
        setError("S'il vous plaît, mettez votre mot de passe.");
        return;
    }

    setError('')



  };





  return (
        <>
            <Navbar />

            <div className='flex items-center justify-center mt-28'>
                <div className='w-96 border rounded bg-white px-7 py-10'>
                    <form onSubmit={handleLogin}>

                        <h4 className='text-2xl mb-7'>S'inscrire</h4>
                        <input 
                        type="text" 
                        placeholder='Nom' 
                        className='input-box' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        />

                        <input 
                        type="text" 
                        placeholder='Email' 
                        className='input-box' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput value={password}
                        onChange={(e) => setPassword(e.target.value)}/>

                        {error && <p className='text-red-500 text-xs pb-1'>{error} </p>}

                        <button type='submit' className='btn-primary'>
                            Créer un compte
                        </button>

                        <p className='text-sm text-center mt-4'>
                              Vous avez déjà un compte ?{" "}
                            <Link to="/login" className="font-medium text-primary underline">
                              Se Connecter
                            </Link>
                        </p>

                      </form>
                </div>
            </div>
        </>

              
            
                        
  )
}

export default SignUp