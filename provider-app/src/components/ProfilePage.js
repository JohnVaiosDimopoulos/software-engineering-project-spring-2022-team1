import ListItemBankAccount from './ListItemBankAccount.js'
import AddAccount from './AddAccount.js'
import { BsArrowRight } from 'react-icons/bs';

export default function ProfilePage() {
  return (
    <div class='mx-auto mt-10 px-10 w-9/12 text-gray-700 overflow-hidden font-light'>
      <div class='text-3xl text-center'>Στοιχεία Λογαριασμού</div>
      <div class='flex justify-between mt-8'>
        <input type='text' class='bg-gray-200 w-1/2 px-4 rounded-full shadow' id='name' placeholder='Όνομα Χρήστη'/><br/>
        <button class='bg-cyan hover:bg-hover w-1/3 h-8 mx-auto text-lg rounded-full shadow'>Επεξεργασία</button>
      </div>
      <div class='flex justify-between mt-8'>
        <input type='text' class='bg-gray-200 w-1/2 px-4 rounded-full shadow' id='email' placeholder='Διεύθυνση Email'/><br/>
        <button class='bg-cyan hover:bg-hover w-1/3 h-8 mx-auto text-lg rounded-full shadow'>Επεξεργασία</button>
      </div>
      <div class='flex justify-between mt-8'>
        <input type='password' class='bg-gray-200 w-1/2 px-4 rounded-full shadow' id='password' placeholder='Κωδικός'/>
        <button class='bg-cyan hover:bg-hover w-1/3 h-8 mx-auto text-lg rounded-full shadow'>Επεξεργασία</button>
      </div>
      <button class='bg-white hover:bg-red-100 w-full border-2 border-red-400 mt-8 rounded-full font-light text-xl shadow'>Διαγραφή Λογαριασμού</button>
      <div class='text-2xl mt-12 text-center'>Υδατογράφημα</div>
      <div class='flex justify-between mt-8'>
        <input type='watermark' class='px-4 w-1/2 p-1 rounded-full shadow' id='text' placeholder='Μέχρι 30 χαρακτήρες'/>
        <button class='bg-cyan hover:bg-hover w-1/3 h-8 mx-auto text-lg rounded-full shadow'>Προσθήκη</button>
      </div>
      <div class='text-2xl mt-12 text-center'>Οι Πόντοι Μου</div>
      <div class='bg-white rounded-full w-96 p-1 mx-auto text-center text-2xl'>20.000 / 3000$</div>
      <div class='text-2xl mt-12 text-center'>Εξαργύρωση Πόντων</div>
      <div class='flex justify-between mt-8'>
        <input type='points' class='w-2/5 px-4 rounded-full shadow' id='text' placeholder='Αριθμός Πόντων'/>
        <BsArrowRight class='w-10 h-10'/>
        <input type='points' class='px-4 w-2/5 p-1 rounded-full shadow' id='text' placeholder='Αριθμός $'/>
      </div>
      <button class='bg-cyan hover:bg-hover w-full h-8 mt-4 mx-auto text-lg rounded-full shadow'>Εξαργύρωση</button>
      
      <div class='text-2xl mt-12 text-center'>Οι Λογαριασμοί Μου</div>
      <div class='h-52 overflow-y-scroll overflow-hidden'>
        <ListItemBankAccount selected={true}/>
        <ListItemBankAccount />
        <ListItemBankAccount />
        <ListItemBankAccount />
        <ListItemBankAccount />
      </div>
      <div class='text-center mt-8'>
        <button class='bg-white hover:bg-hover hover:text-white border-4 border-cyan w-16 h-16 pb-1 text-5xl text-cyan rounded-full shadow'>+</button>
      </div>


    </div>
  );
}