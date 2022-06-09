export default function ActionBar() {
  return (
    <div class='bg-cyan text-gray-700 text-center font-light w-44 px-2 mt-2 px-2 py-10 rounded-r-3xl'>
      <img class='w-36 h-36 ml-2 rounded-full' src={require('../img/logo.svg')} />
      <div class='mt-2'>Όνομα Παρόχου</div>
      <button class='mt-10 w-full hover:bg-hover pt-2 font-light'>
        <img class='w-14 h-14 mx-auto' src='' alt='' />
        <div class='w-full border-gray-300 border-b-2 mt-2'>Αρχική</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <img class='w-14 h-14 mx-auto' src='' alt='' />
        <div class='border-gray-300 border-b-2 mt-2'>Δραστηριότητες</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <img class='w-14 h-14 mx-auto' src='' alt='' />
        <div class='border-gray-300 border-b-2 mt-2'>Υποδομές</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <img class='w-14 h-14 mx-auto' src='' alt='' />
        <div class='border-gray-300 border-b-2 mt-2'>Νέα Δραστηριότητα</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <img class='w-14 h-14 mx-auto' src='' alt='' />
        <div class='border-gray-300 border-b-2 mt-2'>Νέα Υποδομή</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <img class='w-14 h-14 mx-auto' src='' alt='' />
        <div class='border-gray-300 border-b-2 px-10 mt-2'>Στατιστικά</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <img class='w-14 h-14 mx-auto' src='' alt='' />
        <div class='border-gray-300 border-b-2 px-2 mt-2'>Προφίλ</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <img class='w-14 h-14 mx-auto' src='' alt='' />
        <div class='mt-2'>Αποσύνδεση</div>
      </button>
      </div>
  );
}
