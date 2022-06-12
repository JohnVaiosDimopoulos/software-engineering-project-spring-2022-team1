export default function ProfilePage() {
  return (
    <div class='mx-auto mt-10 px-10 w-9/12 text-gray-700 overflow-hidden font-light'>
      <div class='text-3xl text-center'>Στοιχεία Λογαριασμού</div>
      <div class='flex justify-between'>
        <input type='text' class='mt-8 w-1/2 p-1 rounded-full shadow' id='name' placeholder='Όνομα Χρήστη'/><br/>
        <button class='bg-cyan w-1/3 h-10 mx-auto text-lg rounded-full shadow'>Επεξεργασία</button>
      </div>
      <div class='flex justify-between'>
        <input type='text' class='mt-8 w-1/2 p-1 rounded-full shadow' id='email' placeholder='Διεύθυνση Email'/><br/>
        <button class='bg-cyan w-1/3 h-10 mx-auto text-lg rounded-full shadow'>Επεξεργασία</button>
      </div>
      <div class='flex justify-between'>
        <input type='password' class='mt-8 w-1/2 p-1 rounded-full shadow' id='password' placeholder='Κωδικός'/>
        <button class='bg-cyan w-1/3 h-10 mx-auto text-lg rounded-full shadow'>Επεξεργασία</button>
      </div>
      <button class='bg-white w-full border-2 border-red-400 mt-8 rounded-full font-light text-xl shadow'>Διαγραφή Λογαριασμού</button>
      <div class='text-2xl mt-12 text-center'>Υδατογράφημα</div>
      <div class='flex justify-between'>
        <input type='watermark' class='mt-8 w-1/2 p-1 rounded-full shadow' id='text' placeholder='Μέχρι 30 χαρακτήρες'/>
        <button class='bg-cyan w-1/3 h-10 mx-auto text-lg rounded-full shadow'>Προσθήκη</button>
      </div>
      <div class='text-2xl mt-12 text-center'>Οι Πόντοι Μου</div>
      <div class='bg-white rounded-full w-96 p-1 mx-auto text-center text-2xl'>20.000 / 3000$</div>
      <div class='text-2xl mt-12 text-center'>Εξαργύρωση Πόντων</div>
      <input type='points' class='mt-8 w-1/2 p-1 rounded-full shadow' id='text' placeholder='Αριθμός Πόντων'/>
      <button class='bg-cyan w-full h-8 mt-4 mx-auto text-lg rounded-full shadow'>Εξαργύρωση</button>
      
      <div class='text-2xl mt-12 text-center'>Οι Λογαριασμοί Μου</div>
    
    </div>
  );
}
