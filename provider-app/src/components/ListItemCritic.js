const ListItemCritic = props => {
  return (
    <div class='bg-cyan rounded-xl px-4 py-2 mx-auto mt-2 text-gray-700 font-light shadow'>
      <div class='flex justify-between'>
        <div class='text-xl'>{props.activity}</div>
        <div class='ml-80'>Από: {props.user}</div>
      </div>
      <div class=''>{props.comment}</div>
    </div>
  );
}

export default ListItemCritic