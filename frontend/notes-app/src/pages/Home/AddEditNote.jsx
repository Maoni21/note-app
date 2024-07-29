import React from 'react'

const AddEditNote = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
          <label className='input-label'>TITRE</label>
          <input 
            type="text"
            className='text-2xl text-slate-950 outline-none'
            placeholder='Aller à la Salle aprés Dohr'
             />
        </div>

        <div className='flex flex-col gap-2 mt-4'>
          <label className='input-label'>CONTENU</label>
          <textarea type="text"
          className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
          placeholder='Contenu'
          rows={10}/>

        </div>

        <div className='mt-3'>
          <label className='input-label'>TAGS</label>
        </div>

        <button className='btn-primary font-medium mt-5 p-3' onClick={() => {}}>
          AJOUTER
        </button>

    </div>
  )
}

export default AddEditNote