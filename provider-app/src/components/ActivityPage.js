export default function ActivityPage() {
  return (
    <div class='mx-auto mt-10 w-9/12 text-gray-700'>
      <div class='text-3xl align-center text-center'>Τίτλος Δραστηριότητας</div>
      <img class='w-full h-64 rounded-3xl mt-10' src='' alt='' />
      <div class='flex mt-10 font-medium justify-center'>
        <div class='mr-20'>
          <div class=''>Κατηγορία:</div>
          <div class=''>Ηλικιακή Κατηγορία:</div>
          <div class=''>Αριθμός Κρατήσεων:</div>
        </div>
        <div class='mr-20'>
          <div class=''>Τιμή:</div>
          <div class=''>Ποσοστό Ακυρώσεων:</div>
          <div class=''>Διαθέσιμες Θέσεις:</div>
        </div>
        <div class='mr-20'>
          <div class=''>Υποδομή:</div>
          <div class=''>Αριθμός Ακυρώσεων:</div>
          <div class=''>Μέση Αξιολόγηση:</div>
        </div>
      </div>
      <div class='mt-4'>
        <label for='description'>Περιγραφή:</label><br/>
        <input class='w-full h-32 'type='text' id='description' name='description'/>
      </div>
    </div>
  );
}
