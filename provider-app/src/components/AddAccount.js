export default function AddAccount() {
  return (
    <div class='bg-background px-6 py-4 w-9/12 rounded-3xl text-gray-700'>
      <div class='text-center text-2xl'>Προσθήκη Λογαριασμού</div>
      <div class='mt-6'>
        <div class=''>IBAN</div>
        <input type='text' class='bg-gray-200 w-full px-2 rounded-full'/>
      </div>
      <div class='mt-4'>
        <div class=''>Αριθμός Λογαριασμού</div>
        <input type='text' class='bg-gray-200 w-full px-2 rounded-full'/>
      </div>
      <div class='mt-4'>
        <div class=''>Ονοματεπώνυμο Δικαιούχου</div>
        <input type='text' class='bg-gray-200 w-full px-2 rounded-full'/>
      </div>
      <button class='bg-cyan mt-6 rounded-full w-full text-2xl font-light'>Προσθήκη</button>
    </div>
  );
}
