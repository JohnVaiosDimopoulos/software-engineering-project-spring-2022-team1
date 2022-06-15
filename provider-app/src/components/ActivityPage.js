import ListItemDate from "./ListItemDate.js";
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export default function ActivityPage() {
  const navigate = useNavigate();

  return (
    <div class='mx-auto p-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden'>
      <button onClick={() => navigate(-1)} class='flex hover:text-gray-500'>
        <BiArrowBack class='w-6 h-6'/>
        <div class='ml-2'>Επιστροφή στην Αναζήτηση</div>
      </button>
      <div class='text-3xl mt-10 text-center'>Τίτλος Δραστηριότητας</div>
      <img class='w-full h-64 rounded-3xl mx-auto mt-10 shadow' src=''/>
      <div class='flex mt-10 justify-between font-normal'>
        <div class=''>
          <div class=''>Κατηγορία:</div>
          <div class=''>Ηλικιακή Κατηγορία:</div>
          <div class=''>Αριθμός Κρατήσεων:</div>
        </div>
        <div class=''>
          <div class=''>Τιμή:</div>
          <div class=''>Ποσοστό Ακυρώσεων:</div>
          <div class=''>Διαθέσιμες Θέσεις:</div>
        </div>
        <div class=''>
          <div class=''>Υποδομή:</div>
          <div class=''>Αριθμός Ακυρώσεων:</div>
          <div class=''>Μέση Αξιολόγηση:</div>
        </div>
      </div>
      <div class='mt-10'>
        <div class='font-normal'>Περιγραφή:</div>
        <div class='bg-white w-full h-32 px-4 py-2 mt-2 shadow rounded-xl font-light'>
          Αυτή είναι μία περιγραφή
        </div>
      </div>
      <div class='mt-10 text-lg text-center font-normal'>Σύνολο Κερδών:</div>

      <button class='bg-cyan hover:bg-hover rounded-full w-full mt-10 font-light text-2xl shadow'>Εμφάνιση Κριτικών</button>

      <div class='mt-10 text-lg text-center font-normal'>Συχνότητα Διεξαγωγής:</div>

      <div class='mt-10 text-lg text-center font-normal'>Ημερομηνίες Διεξαγωγής:</div>
      <div class='bg-white w-full h-52 p-2 mt-2 font-light rounded-xl overflow-hidden shadow'>
        <div class='flex px-16 justify-between font-normal'>
          <div class=''>Ημερομηνία</div>
          <div class=''>Ώρα</div>
        </div>
        <div class='h-52 mt-2 overflow-y-scroll'>
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
          <ListItemDate date='05/06/2022' time='12:30' />
        </div>
      </div>
      <div class='mt-20 text-center text-2xl'>
        <button class='bg-cyan hover:bg-hover rounded-full w-full font-light shadow'>Επεξεργασία Δραστηριότητας</button>
        <button class='bg-white hover:bg-red-400 hover:text-white w-full border-2 border-red-400 my-4 rounded-full font-light shadow'>Ακύρωση Δραστηριότητας</button>
      </div>
    </div>
  );
}
