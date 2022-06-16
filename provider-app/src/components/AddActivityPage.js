import ListItemDate from "./ListItemDate.js";

export default function AddActivityPage() {

  return (
    <div class='mx-auto mt-10 px-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden font-light'>
      <div class='text-3xl text-center'>Νέα Δραστηριότητα</div>
      <div class='relative w-full mt-8'>
        <img class='w-full h-48 rounded-3xl'/>
        <button class='absolute bg-cyan hover:bg-hover rounded-full p-1 w-1/2 top-20 left-1/4 shadow'>Ανεβάστε μία Eικόνα</button>
      </div>
      <div class='flex mt-6 mx-auto justify-between font-normal'>
        <div class='w-full'>
          <div class=''>Όνομα Υπηρεσίας*</div>
          <input type='text' class='bg-white w-11/12 px-4 rounded-full shadow' id='name'/>
        </div>
        <div class='w-full'>
          <div class=''>Κατηγορία*</div>
          <input type='text' class='bg-white w-10/12 px-4 rounded-full shadow' id='name'/>
        </div>
        <div class='w-full'>
          <div class=''>Τιμή*</div>
          <input type='text' class='bg-white w-9/12 px-4 rounded-full shadow' id='name'/>
        </div>
      </div>
      <div class='flex justify-between mt-6 font-normal'>
        <div class='w-1/2'>
          <div class=''>Ηλικιακή Κατηγορία</div>
          <input type='text' class='bg-white w-11/12 px-4 rounded-full shadow' id='name'/>
        </div>
        <div class='w-1/3'>
          <div class=''>Αριθμός Θέσεων*</div>
          <input type='text' class='bg-white w-10/12 px-4 rounded-full shadow' id='name'/>
        </div>
      </div>
      <div class='flex mt-6 justify-between font-normal'>
        <div class='w-full'>
          <div class=''>Υποδομή*</div>
          <input type='text' class='bg-white w-1/2 px-4 rounded-full shadow' id='name'/>
        </div>
        <button class='bg-cyan hover:bg-hover w-1/2 h-12 rounded-full shadow'>Νέα Υποδομή</button>
      </div>
      <div class='mt-10 font-normal'>
        <div class=''>Περιγραφή*</div>
        <form>
          <textarea class='bg-white w-full h-32 px-2 py-1 mt-2 rounded-xl font-light resize-none shadow'></textarea>
        </form>
      </div>
      <div class='mt-10'>
        <div class='flex space-x-4'>
          <div class='font-medium'>Ημέρες και Ώρες Διεξαγωγής:</div>
          <div>
            <input type='radio' name='occurs' id='periodically' class=''/>
            <label for='monday'>Περιοδικά</label>
          </div>
          <div>
            <input type='radio' name='occurs' id='selective' class=''/>
            <label for='monday'>Επιλεκτικά</label>
          </div>
        </div>
        <div class='bg-white w-full mt-4 px-8 py-4 rounded-3xl'>
          <div class='font-medium text-center'>Εισαγωγή Ημερομηνίας</div>
          <div class='flex mt-2 justify-between'>
            <div class='font-medium'>Ημέρα:</div>
            <div>
              <input type='radio' id='mon' class=''/>
              <label for='monday'>ΔΕΥ</label>
            </div>
            <div>
              <input type='radio' id='tue' class=''/>
              <label for='monday'>ΤΡΙ</label>
            </div>
            <div>
              <input type='radio' id='wed' class=''/>
              <label for='monday'>ΤΕΤ</label>
            </div>
            <div>
              <input type='radio' id='thu' class=''/>
              <label for='monday'>ΠΕΜ</label>
            </div>
            <div>
              <input type='radio' id='fri' class=''/>
              <label for='monday'>ΠΑΡ</label>
            </div>
            <div class='flex w-3/12 space-x-2'>
              <div class='font-medium'>Ώρα</div>
              <input type='text' class='bg-gray-200 w-1/2 px-4 rounded-full shadow' id='time'/>
            </div>
          </div>
          <div class='flex mt-4 w-full justify-center space-x-6'>
            <div>
              <div class='font-medium inline'>Από</div>
              <input type='text' class='bg-gray-200 w-16 px-4 rounded-full shadow' id='from'/>
            </div>
            <div>
              <div class='font-medium inline'>Έως</div>
              <input type='text' class='bg-gray-200 w-16 px-4 rounded-full shadow' id='to'/>
            </div>
          </div>
          <div class='text-center mt-4'>
            <button class='bg-cyan hover:bg-hover w-1/3 h-8  rounded-full shadow'>Προσθήκη</button>
          </div>
        </div>
      </div>
      <div class='bg-white w-full h-52 p-2 mt-10 font-light rounded-xl overflow-hidden shadow'>
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
      <button class='bg-cyan w-full my-10 rounded-full h-14 hover:bg-hover text-lg shadow'>Καταχώρηση Δραστηριότητας</button>
    </div>
  );
}
