import { useState } from "react";


export default function AddFacilityPage() {
  return (
    <div className='mx-auto mt-10 px-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden font-normal'>
      <div className='text-3xl text-center font-light'>Νέα Υποδομή</div>
      <div className='mt-10 w-full'>
          <div className=''>Όνομα Υπηρεσίας*</div>
          <input type='text' className='bg-white w-full h-8 px-4 rounded-full shadow' id='name'/>
      </div>
      <div className='mt-8 w-full'>
        <div className=''>Οδός*</div>
        <input type='text' className='bg-white w-full h-8 px-4 rounded-full shadow' id='name'/>
      </div>
      <div className='flex mt-8 mx-auto justify-between'>
        <div className='w-full'>
          <div className=''>Αριθμός*</div>
          <input type='text' class='bg-white w-10/12 h-8 px-4 rounded-full shadow' id='name'/>
        </div>
        <div className='w-full'>
          <div className=''>Τ.Κ.*</div>
          <input type='text' className='bg-white w-full h-8 px-4 rounded-full shadow' id='name'/>
        </div>
      </div>
      <div className='mt-8 '>
          <div className=''>Περιοχή*</div>
          <input type='text' className='bg-white w-full h-8 px-4 rounded-full shadow' id='name'/>
      </div>
      <button className="bg-cyan w-full h-8 mt-12 hover:bg-hover h-12 rounded-full">Καταχώρηση Υποδομής</button>
    </div>
  );
}
