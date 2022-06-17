import ListItemBankAccount from './ListItemBankAccount.js'
import { BsArrowRight } from 'react-icons/bs';
import { useEffect } from 'react';
import { sendProfileData } from './api.js'


export default function ProfilePage() {
  useEffect(() => {
    for (var obj of document.getElementById('profileInfo').getElementsByTagName('input')){
      obj.style.pointerEvents = 'none';
      obj.style.background = '#EEEEEE';
    }
  })
  
  function sendDataAndReset(button, data){
    sendProfileData(data)
    for (var obj of document.getElementById('profileInfo').getElementsByTagName('input')){
      obj.style.pointerEvents = 'none';
      obj.style.background = '#EEEEEE';
    }
    button.replaceChildren('Επεξεργασία')
  }

  function editProfile(){
    for (var obj of document.getElementById('profileInfo').getElementsByTagName('input')){
      obj.style.pointerEvents = '';
      obj.style.background = 'white';
    }
    var button = document.getElementById('edit')
    button.replaceChildren('Αποθήκευση')
    button.addEventListener('click', () => sendDataAndReset(button, 'data'))
  }

  function switchBankAccount(id){
    for (var obj of document.getElementById('bankAccounts').children){
      obj.style.border = '';
    }
    var el = document.getElementById(id);
    el.style.border = 'thick solid #D1E8E8'
  }

  return (
    <div className='mx-auto p-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden font-light'>
      <div className='text-3xl text-center'>Στοιχεία Λογαριασμού</div>
      <div className='relative flex justify-between'>
        <div id='profileInfo' className='w-full'>
          <div className='mt-8 font-normal'>Όνομα Χρήστη</div>
          <input type='text' class='bg-gray-200 w-11/12 h-8 px-4 rounded-full shadow' id='name' placeholder='Όνομα Χρήστη'/>
          <div className='mt-4 font-normal'>Διεύθυνση Email</div>
          <input type='text' className='bg-gray-200 w-11/12 h-8 px-4 rounded-full shadow' id='email' placeholder='Διεύθυνση Email'/>
          <div className='mt-4 font-normal'>Κωδικός</div>
          <input type='password' className='bg-gray-200 w-11/12 h-8 px-4 rounded-full shadow' id='password' placeholder='Κωδικός'/>
        </div>
        <div className='w-full mt-24'>
          <button id='edit' onClick={() => editProfile()} className='bg-cyan hover:bg-hover w-11/12 h-8 text-lg rounded-full shadow'>Επεξεργασία</button>
          <button className='bg-white hover:bg-red-400 hover:text-white w-11/12 mt-8 border-2 border-red-400 rounded-full font-light text-lg shadow'>Διαγραφή Λογαριασμού</button>
        </div>
      </div>
      <div className='text-2xl mt-12 text-center'>Υδατογράφημα</div>
      <div className='flex justify-between mt-6'>
        <input type='watermark' className='px-4 w-1/2 p-1 rounded-full shadow' id='text' placeholder='Μέχρι 30 χαρακτήρες'/>
        <button className='bg-cyan hover:bg-hover w-1/3 h-8 mx-auto text-lg rounded-full shadow'>Προσθήκη</button>
      </div>
      <div className='text-2xl mt-12 text-center'>Οι Πόντοι Μου</div>
      <div className='bg-white rounded-full w-96 p-1 mx-auto text-center text-3xl'>20.000 / 3000$</div>
      <div className='text-2xl mt-12 text-center'>Εξαργύρωση Πόντων</div>
      <div className='flex justify-between mt-8'>
        <input type='points' className='w-2/5 px-4 rounded-full shadow' id='text' placeholder='Αριθμός Πόντων'/>
        <BsArrowRight className='w-10 h-10'/>
        <input type='points' className='px-4 w-2/5 p-1 rounded-full shadow' id='text' placeholder='Αριθμός $'/>
      </div>
      <button className='bg-cyan hover:bg-hover w-full h-8 mt-4 mx-auto text-lg rounded-full shadow'>Εξαργύρωση</button>
      <div className='text-2xl mt-12 text-center'>Οι Λογαριασμοί Μου</div>
      <div id='bankAccounts' className='h-52 overflow-y-scroll overflow-hidden'>
        <ListItemBankAccount click={switchBankAccount} iban='IBAN ***125' number='Αριθμός' cardNumber='*****************125' />
        <ListItemBankAccount click={switchBankAccount} iban='IBAN ***742' number='Αριθμός' cardNumber='*****************125' />
        <ListItemBankAccount click={switchBankAccount} iban='IBAN ***543' number='Αριθμός' cardNumber='*****************125' />
        <ListItemBankAccount click={switchBankAccount} iban='IBAN ***114' number='Αριθμός' cardNumber='*****************125' />
      </div>
      <div className='text-center mt-4'>
        <button className='bg-white hover:bg-hover hover:text-white border-4 border-cyan w-16 h-16 pb-1 pl-1 text-5xl text-cyan rounded-full shadow'>+</button>
      </div>
    </div>
  );
}
