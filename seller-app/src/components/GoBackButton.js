import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


export default function GoBackButton() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)} class='flex hover:text-gray-500'>
      <BiArrowBack className='w-6 h-6'/>
      <div className='ml-2'>Επιστροφή στην Αναζήτηση</div>
    </button>
  );
}
