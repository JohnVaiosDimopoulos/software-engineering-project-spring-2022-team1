import ListItemPopular from "./ListItemPopular";

export default function StatisticsPage() {
  return (
    <div class='mx-auto p-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden font-light'>
      <div class='text-3xl text-center'>Κρατήσεις</div>
      <div class='bg-white rounded-3xl w-full h-60 mt-2 shadow-lg'>
      </div>
        <div class='text-3xl text-center mt-10'>Ακυρώσεις</div>
        <div class='bg-white rounded-3xl w-full h-60 mt-2 shadow-lg'>
      </div>
      <div class='text-3xl text-center mt-10'>Δημοφιλείς Δραστηριότητες</div>
      <div class='bg-white rounded-3xl w-full p-6 mt-2 shadow-lg'>
        <ListItemPopular activity='Όνομα Δραστηριότητας' bookCount='-' earnings='-'/>
        <ListItemPopular activity='Όνομα Δραστηριότητας' bookCount='-' earnings='-'/>
        <ListItemPopular activity='Όνομα Δραστηριότητας' bookCount='-' earnings='-'/>
        <ListItemPopular activity='Όνομα Δραστηριότητας' bookCount='-' earnings='-'/>
      </div>
    </div>
  );
}