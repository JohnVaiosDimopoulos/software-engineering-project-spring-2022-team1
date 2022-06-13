const ListItemBooking = props => {
  return (
    <div class='bg-cyan flex mx-auto mt-2 px-10 justify-between rounded-full text-gray-700 font-light'>
      <div class=''>{props.activity}</div>
      <div class=''>{props.dateBook}</div>
      <div class=''>{props.dateOn}</div>
      <div class=''>{props.seats}</div>
      <div class=''>{props.user}</div>
      <div class=''>{props.cost}</div>
    </div>
  );
}

export default ListItemBooking
