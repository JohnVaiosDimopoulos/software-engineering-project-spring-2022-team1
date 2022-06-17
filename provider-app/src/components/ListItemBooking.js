const ListItemBooking = props => {
  return (
    <div className='bg-cyan flex mx-auto mt-2 px-10 justify-between rounded-full text-gray-700 font-light'>
      <div className=''>{props.activity}</div>
      <div className=''>{props.dateBook}</div>
      <div className=''>{props.dateOn}</div>
      <div className=''>{props.seats}</div>
      <div className=''>{props.user}</div>
      <div className=''>{props.cost}</div>
    </div>
  );
}

export default ListItemBooking
