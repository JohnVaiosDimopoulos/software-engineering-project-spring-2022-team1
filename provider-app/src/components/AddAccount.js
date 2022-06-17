export default function AddAccount() {
  return (
    <div className='bg-background px-6 py-4 w-9/12 rounded-3xl text-gray-700'>
      <div className='text-center text-2xl'>Προσθήκη Λογαριασμού</div>
      <div className='mt-6'>
        <div className=''>IBAN</div>
        <input type='text' className='bg-gray-200 w-full px-2 rounded-full'/>
      </div>
      <div className='mt-4'>
        <div className=''>Αριθμός Λογαριασμού</div>
        <input type='text' className='bg-gray-200 w-full px-2 rounded-full'/>
      </div>
      <div className='mt-4'>
        <div className=''>Ονοματεπώνυμο Δικαιούχου</div>
        <input type='text' className='bg-gray-200 w-full px-2 rounded-full'/>
      </div>
      <button className='bg-cyan mt-6 rounded-full w-full text-2xl font-light'>Προσθήκη</button>
    </div>
  );
}
