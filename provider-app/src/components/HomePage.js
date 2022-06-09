import ListItemBooking from "./ListItemBooking.js";
import ListItemCritics from "./ListItemCritics.js";

export default function HomePage() {
  return (
    <div class='mx-auto mt-10 w-9/12 text-gray-700'>
      <div class='text-2xl flex font-light text-center justify-center'>
        <div class='bg-white w-80 p-4 rounded-3xl'>
          <div class=''>Συνολικές Δραστηριότητες</div>
          <div class=''>30</div>
        </div>
        <div class='bg-white w-80 ml-20 p-4 rounded-3xl'>
          <div class=''>Συνολικές Υποδομές</div>
          <div class='text-center'>10</div>
        </div>
      </div>
      <div class='bg-white w-11/12 px-4 h-80 mt-10 mx-auto rounded-3xl'>
        <div class='text-2xl text-center font-light'>Τελευταίες Κρατήσεις</div>
        <div class='text-l mx-6 mt-4 flex justify-center'>
          <div class=''>Όνομα Δραστηριότητας</div>
          <div class='ml-4'>Ημ/νια Κράτησης</div>
          <div class='ml-4'>Ημ/νια Διεξαγωγής</div>
          <div class='ml-4'>Αριθμός Θέσεων</div>
          <div class='ml-4'>Όνομα Χρήστη</div>
          <div class='ml-4'>Αριθμός Πόντων</div>
        </div>
        <ListItemBooking />
        <ListItemBooking />
        <ListItemBooking />
        <ListItemBooking />
        <ListItemBooking />
        <ListItemBooking />
        <ListItemBooking />
      </div>
      <div class='w-11/12 mx-auto'>
        <div class='mt-20 mb-10 text-2xl text-center font-light'>Πρόσφατες Κριτικές:</div>
        <ListItemCritics />
        <ListItemCritics />
        <ListItemCritics />
      </div>
    </div>
  );
}
