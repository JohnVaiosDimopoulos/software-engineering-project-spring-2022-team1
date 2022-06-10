export default function ActivityPage() {
  return (
    <div class='mx-auto mt-10 px-10 w-9/12 text-gray-700 overflow-hidden'>
      <div class='text-3xl font-light text-center'>Τίτλος Δραστηριότητας</div>
      <img class='w-full h-64 rounded-3xl mx-auto mt-10' src='' alt='' />
      <div class='flex mt-10 space-x-20 justify-center font-normal'>
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
        <div class='bg-white w-full h-32 px-4 py-2 mt-2 shadow font-light rounded-xl'>
          Αυτή είναι μία περιγραφή
        </div>
      </div>
      <button class='bg-cyan rounded-full w-full mt-10 font-light text-2xl'>Εμφάνιση Κριτικών</button>

      <div class='mt-10 text-xl text-center'>Σύνολο Κερδών: 2000 Πόντοι</div>
      <div class='mt-10 text-xl text-center'>Συχνότητα Διεξαγωγής:</div>

      <div class='mt-10 text-xl text-center'>Ημερομηνίες Διεξαγωγής:</div>
      <div class='bg-white w-full h-52 p-2 mt-2 shadow font-light rounded-xl overflow-hidden'>
        <div class='flex space-x-80 justify-center font-normal'>
          <div class=''>Ημερομηνία</div>
          <div class=''>Ώρα</div>
          </div>
      </div>
      <div class='mt-20 text-center'>
        <button class='bg-cyan rounded-full w-full font-light text-2xl'>Επεξεργασία Δραστηριότητας</button>
        <button class='bg-white w-full border-2 border-red-400 my-4 rounded-full font-light text-2xl'>Ακύρωση Δραστηριότητας</button>
      </div>
    </div>
  );
}
