import { FaUserCircle, FaRegBuilding } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBookAdd, BiStats, BiLogOut } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function ActionBar() {
  const navigate = useNavigate();

  return (
    <div class='bg-cyan text-gray-700 text-center font-light w-44 px-2 mt-2 px-2 py-10 rounded-r-3xl'>
      <FaUserCircle class='w-36 h-36 ml-2 rounded-full'/>
      <div class='mt-2'>Όνομα Παρόχου</div>
      <button onClick={() => navigate('/')} class='mt-10 w-full hover:bg-hover pt-2 font-light'>
        <AiOutlineHome class='w-12 h-12 mx-auto'/>
        <div class='w-full border-gray-300 border-b-2 mt-2'>Αρχική</div>
      </button>
      <button onClick={() => navigate('/activities')} class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <FiActivity class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 mt-2'>Δραστηριότητες</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <FaRegBuilding class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 mt-2'>Υποδομές</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <BiBookAdd class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 mt-2'>Νέα Δραστηριότητα</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <BiBookAdd class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 mt-2'>Νέα Υποδομή</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <BiStats class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 px-10 mt-2'>Στατιστικά</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <FaUserCircle class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 px-2 mt-2'>Προφίλ</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2 font-light'>
        <BiLogOut class='w-12 h-12 mx-auto'/>
        <div class='mt-2'>Αποσύνδεση</div>
      </button>
      </div>
  );
}
