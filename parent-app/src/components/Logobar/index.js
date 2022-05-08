import { useRef } from 'react'
import { Navbar } from 'react-bootstrap'
import Login from '../Login'

export default function Logobar() {
  const loginRef = useRef();

  /*btn.onclick = function() {
    modal.style.display = "block";
  }
  //span.onclick = function() {
  //  modal.style.display = "none";
  //}

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }*/
  return (
    <div class='bg-logobar h-15'>
      <Navbar class='flex'>
        <div class='h-12 p-1 bg-gray-100 rounded-full'>
          <a class='no-underline text-gray-700' href='/' id="a"><h2>Logo</h2></a>
        </div>
        <div class='px-4 py-1'>
          <input type='text' class='h-10 w-96 px-2 rounded-full' placeholder="Αναζητήστε κάποια δραστηριότητα.."></input>
        </div>
        <div class='text-gray-700 py-2 right-10 absolute flex'>
          <button id='loginBtn'>Open Modal</button>
          <form class='px-1' action='/login'>
            <input type='submit' class='bg-gray-100 h-8 w-20 rounded-full' value='Είσοδος' />
          </form>
          <form class='px-1' action='/register'>
            <input type='submit' class='bg-gray-100 h-8 w-20 rounded-full' value='Εγγραφή' />
          </form>
        </div>
      </Navbar>
    </div>
  );
}
