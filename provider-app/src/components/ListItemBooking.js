const ListItemBooking = ({data}) => {
  return (
    <div className='bg-cyan flex mx-auto mt-2 px-10 justify-between rounded-full text-gray-700 font-light'>
      <div className=''>{data.activity}</div>
      <div className=''>{data.dateBook}</div>
      <div className=''>{data.dateOn}</div>
      <div className=''>{data.seats}</div>
      <div className=''>{data.user}</div>
      <div className=''>{data.cost}</div>
    </div>
  );
}

export default ListItemBooking
