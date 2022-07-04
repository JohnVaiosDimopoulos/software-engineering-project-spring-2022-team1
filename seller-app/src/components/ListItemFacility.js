import { AiFillEdit } from 'react-icons/ai';

const ListItemFacility = ({clicked, data}) => {
  return (
    <button onClick={() => clicked()} className='bg-white relative hover:bg-gray-50 w-full px-10 pb-6 pt-4 rounded-3xl mt-4 font-normal shadow-lg'>
      <div className='text-2xl'>{data.name}</div>
      <div className='flex absolute right-4 top-3 text-normal'>
        <AiFillEdit className='mt-1'/>
        <div className='underline'>Επεξεργασία</div>
      </div>
      <div className='mt-4'>
        <div className='float-left'>Οδός:</div>
        <div className='float-left ml-1 font-light'>{data.street}</div><br/>
        <div className='float-left'>Περιοχή:</div>
        <div className='float-left ml-1 font-light'>{data.location}</div>
        <div className='float-right ml-1 text-lg font-light'>{data.activityCount}</div>
        <div className='float-right text-lg'>Δραστηριότητες:</div>
      </div>
    </button>
  );
}

export default ListItemFacility
