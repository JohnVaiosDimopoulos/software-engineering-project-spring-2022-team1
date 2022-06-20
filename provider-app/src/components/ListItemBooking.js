const ListItemBooking = ({data}) => {
  return (
    <div className='bg-cyan flex mx-auto mt-2 px-6 justify-between rounded-full text-gray-700 font-light'>
      <div className='w-26'>{data.activity}</div>
      <div className='ml-4 w-24'>{data.dateBook}</div>
      <div className='ml-4 w-28'>{data.dateOn}</div>
      <div className='ml-4 w-10'>{data.seats}</div>
      <div className='ml-4 w-20'>{data.user}</div>
      <div className='ml-4 w-8'>{data.cost}</div>
    </div>
  );
}

export default ListItemBooking
