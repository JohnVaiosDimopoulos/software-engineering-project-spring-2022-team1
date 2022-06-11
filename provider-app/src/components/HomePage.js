import ListItemBooking from "./ListItemBooking.js";
import ListItemCritic from "./ListItemCritic.js";

export default function HomePage() {
  return (
    <div class='mx-auto mt-10 px-10 w-9/12 text-gray-700 overflow-hidden font-light'>
      <div class='flex space-x-16 justify-center text-center text-2xl '>
        <span class='bg-white w-96 px-2 py-6 rounded-3xl'>
          <div class=''>Συνολικές Δραστηριότητες</div>
          <div class=''>30</div>
        </span>
        <span class='bg-white w-96 px-2 py-6 rounded-3xl'>
          <div class=''>Συνολικές Υποδομές</div>
          <div class='text-center'>10</div>
        </span>
      </div>
      <div class='bg-white px-4 h-80 mt-10 mx-auto rounded-3xl overflow-hidden'>
        <div class='text-2xl text-center'>Τελευταίες Κρατήσεις</div>
        <div class='mx-6 mt-4 flex justify-between font-normal'>
          <div class=''>Όνομα Δραστηριότητας</div>
          <div class='ml-4'>Ημ/νια Κράτησης</div>
          <div class='ml-4'>Ημ/νια Διεξαγωγής</div>
          <div class='ml-4'>Αριθμός Θέσεων</div>
          <div class='ml-4'>Όνομα Χρήστη</div>
          <div class='ml-4'>Αριθμός Πόντων</div>
        </div>
        <div class='h-52 mt-2 overflow-y-scroll'>
          <ListItemBooking />
          <ListItemBooking />
          <ListItemBooking />
          <ListItemBooking />
          <ListItemBooking />
          <ListItemBooking />
          <ListItemBooking />
          <ListItemBooking />
          <ListItemBooking />
        </div>
      </div>
      <div class=''>
        <div class='mt-20 mb-10 text-2xl text-center'>Πρόσφατες Κριτικές</div>
        <ListItemCritic />
        <ListItemCritic />
        <ListItemCritic />
      </div>
    </div>
  );
}
