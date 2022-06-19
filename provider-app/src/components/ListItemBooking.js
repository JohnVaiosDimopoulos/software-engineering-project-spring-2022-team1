const ListItemBooking = ({data}) => {
  return (
    <div className='bg-cyan flex mx-auto mt-2 px-6 justify-between rounded-full text-gray-700 font-light'>
      <div className=''>{data.activity}</div>
      <div className='ml-4'>{data.dateBook}</div>
      <div className='ml-4'>{data.dateOn}</div>
      <div className='ml-4'>{data.seats}</div>
      <div className='ml-4'>{data.user}</div>
      <div className='ml-4'>{data.cost}</div>
    </div>
  );
}

export default ListItemBooking
