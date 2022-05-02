import { Navbar } from 'react-bootstrap'

export default function Logobar() {

  return (
    <div class='bg-logobar h-15'>
      <Navbar class='flex'>
        <div class='h-12 p-1 bg-gray-100 rounded-full'>
          <a class='no-underline text-gray-700' href="/" id="a"><h2>Logo</h2></a>
        </div>
        <div class='px-4 py-1'>
          <input class='h-10 px-2 rounded-full' type="text" placeholder="Αναζητήστε κάποια δραστηριότητα.."></input>
        </div>
        <div class='text-gray-700 py-2 right-10 absolute flex'>
          <div class='px-1'>
            <button class='bg-gray-100 h-8 w-20 rounded-full' onclick="window.location.href = '/'">
              Είσοδος
            </button>
          </div>
          <div class='px-1'>
            <button class='bg-gray-100 h-8 w-20 rounded-full' onclick="window.location.href = '/'">
              Εγγραφή
            </button>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
