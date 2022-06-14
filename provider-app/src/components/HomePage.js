import ListItemBooking from "./ListItemBooking.js";
import ListItemCritic from "./ListItemCritic.js";

export default function HomePage() {
  return (
    <div class='mx-auto mt-10 px-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden font-light'>
      <div class='flex space-x-16 justify-center text-center text-2xl '>
        <span class='bg-white w-96 px-2 py-6 rounded-3xl shadow'>
          <div class=''>Συνολικές Δραστηριότητες</div>
          <div class=''>30</div>
        </span>
        <span class='bg-white w-96 px-2 py-6 rounded-3xl shadow'>
          <div class=''>Συνολικές Υποδομές</div>
          <div class='text-center'>10</div>
        </span>
      </div>
      <div class='bg-white px-4 h-80 mt-10 mx-auto rounded-3xl overflow-hidden shadow'>
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
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
          <ListItemBooking activity='Όνομα Δραστηριότητας' dateBook='05/06/2022' dateOn='05/06/2022' seats='5' user='user101' cost='3000' />
        </div>
      </div>
      <div class=''>
        <div class='mt-20 mb-10 text-2xl text-center'>Πρόσφατες Κριτικές</div>
        <ListItemCritic activity='Δραστηριότητα' user='Χρήστης' comment='Αυτή είναι μια κριτική' />
        <ListItemCritic activity='Δραστηριότητα' user='Χρήστης' comment='Αυτή είναι μια κριτική' />
        <ListItemCritic activity='Δραστηριότητα' user='Χρήστης' comment='Αυτή είναι μια κριτική' />
      </div>
    </div>
  );
}
