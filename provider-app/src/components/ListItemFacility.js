import { useNavigate } from 'react-router-dom';

export default function ListItemFacility() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/facility')} class='bg-white hover:bg-gray-50 w-full px-10 py-2 mx-auto rounded-3xl mt-4 text-gray-700 font-light shadow-lg'>
      <div class='text-2xl font-normal'>Τίτλος Υποδομής</div>
      <div class='float-left'>Οδός:</div><br/>
      <div class='float-left'>Τ.Κ.:</div><br/>
      <div class='float-left'>Περιοχή:</div>
      <div class='text-xl float-right'>Δραστηριότητες:</div>
    </button>
  );
}
