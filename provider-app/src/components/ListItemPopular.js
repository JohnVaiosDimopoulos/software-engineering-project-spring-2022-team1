const ListItemPopular = props => {
  return (
    <div class='bg-cyan flex mx-auto px-10 py-4 mt-2 justify-between rounded-full text-gray-700 font-normal'>
      <div class='text-lg'>{props.activity}</div>
      <div>
        <div class='inline'>Σύνολο Κρατήσεων:</div>
        <div class='ml-1 font-light inline'>{props.bookCount}</div><br/>
      </div>
      <div>
        <div class='inline'>Κέρδη:</div>
        <div class='ml-1 font-light inline'>{props.earnings}</div><br/>
      </div>
    </div>
  );
}

export default ListItemPopular
