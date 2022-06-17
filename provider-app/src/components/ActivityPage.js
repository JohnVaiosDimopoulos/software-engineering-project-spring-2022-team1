import ListItemDate from "./ListItemDate.js";
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export default function ActivityPage() {
  const navigate = useNavigate();

  return (
    <div className='mx-auto p-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden'>
      <button onClick={() => navigate(-1)} class='flex hover:text-gray-500'>
        <BiArrowBack className='w-6 h-6'/>
        <div className='ml-2'>Επιστροφή στην Αναζήτηση</div>
      </button>
      <div className='text-3xl mt-10 text-center'>Τίτλος Δραστηριότητας</div>
      <img className='w-full h-64 rounded-3xl mx-auto mt-10 shadow' src='' alt=''/>
      <div className='flex mt-10 justify-between font-normal'>
        <div className=''>
          <div className=''>Κατηγορία:</div>
          <div className=''>Ηλικιακή Κατηγορία:</div>
          <div className=''>Αριθμός Κρατήσεων:</div>
        </div>
        <div className=''>
          <div className=''>Τιμή:</div>
          <div className=''>Ποσοστό Ακυρώσεων:</div>
          <div className=''>Διαθέσιμες Θέσεις:</div>
        </div>
        <div className=''>
          <div className=''>Υποδομή:</div>
          <div className=''>Αριθμός Ακυρώσεων:</div>
          <div className=''>Μέση Αξιολόγηση:</div>
        </div>
      </div>
      <div className='mt-10'>
        <div className='font-normal'>Περιγραφή:</div>
        <div className='bg-white w-full h-32 px-4 py-2 mt-2 shadow rounded-xl font-light'>
          Αυτή είναι μία περιγραφή
        </div>
      </div>
      <div className='mt-10 text-lg text-center font-normal'>Σύνολο Κερδών:</div>
      <button className='bg-cyan hover:bg-hover rounded-full w-full mt-10 font-light text-2xl shadow'>Εμφάνιση Κριτικών</button>
      <div className='mt-10 text-lg text-center font-normal'>Συχνότητα Διεξαγωγής:</div>
      <div className='mt-10 text-lg text-center font-normal'>Ημερομηνίες Διεξαγωγής:</div>
      <div className='bg-white w-full h-52 p-2 mt-2 font-light rounded-xl overflow-hidden shadow'>
        <div className='flex px-16 justify-between font-normal'>
          <div className=''>Ημερομηνία</div>
          <div className=''>Ώρα</div>
        </div>
        <div className='h-52 mt-2 overflow-y-scroll'>
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
        </div>
      </div>
      <div className='mt-20 text-center text-2xl'>
        <button className='bg-cyan hover:bg-hover rounded-full w-full font-light shadow'>Επεξεργασία Δραστηριότητας</button>
        <button className='bg-white hover:bg-red-400 hover:text-white w-full border-2 border-red-400 my-4 rounded-full font-light shadow'>Ακύρωση Δραστηριότητας</button>
      </div>
    </div>
  );
}
