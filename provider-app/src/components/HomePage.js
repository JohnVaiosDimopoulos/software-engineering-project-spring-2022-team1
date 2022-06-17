import ListItemBooking from "./ListItemBooking.js";
import ListItemCritic from "./ListItemCritic.js";
import { useState, useEffect } from "react";
import { fetchHomePageData } from './api.js'

export default function HomePage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchHomePageData( (response) => {
      if(response.ok){
        setData(response.data)
      }
      else{
        console.log('failed to fetch data');
      }
      setLoading(false)
    })
  }, [])

  return (
    <div className='mx-auto p-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden font-light'>
      {
        loading ? 
        <span>loading</span>
        :
        <>
          <div className='flex space-x-16 justify-center text-center text-2xl '>
            <span className='bg-white w-96 px-2 py-6 rounded-3xl shadow'>
              <div className=''>Συνολικές Δραστηριότητες</div>
              <div className=''>{data.totalActivities}</div>
            </span>
            <span className='bg-white w-96 px-2 py-6 rounded-3xl shadow'>
              <div className=''>Συνολικές Υποδομές</div>
              <div className='text-center'>{data.totalFacilities}</div>
            </span>
          </div>
          <div className='bg-white px-6 h-80 mt-10 mx-auto rounded-3xl overflow-hidden shadow'>
            <div className='text-2xl text-center'>Τελευταίες Κρατήσεις</div>
            <div className='mx-6 mt-4 flex justify-between font-normal'>
              <div className=''>Όνομα Δραστηριότητας</div>
              <div className='ml-4'>Ημ/νια Κράτησης</div>
              <div className='ml-4'>Ημ/νια Διεξαγωγής</div>
              <div className='ml-4'>Αριθμός Θέσεων</div>
              <div className='ml-4'>Όνομα Χρήστη</div>
              <div className='ml-4'>Αριθμός Πόντων</div>
            </div>
            <div className='h-52 mt-2 overflow-y-scroll'>
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
          <div className=''>
            <div class='mt-16 mb-6 text-2xl text-center'>Πρόσφατες Κριτικές</div>
            <ListItemCritic activity='Δραστηριότητα' user='Χρήστης' comment='Αυτή είναι μια κριτική' />
            <ListItemCritic activity='Δραστηριότητα' user='Χρήστης' comment='Αυτή είναι μια κριτική' />
            <ListItemCritic activity='Δραστηριότητα' user='Χρήστης' comment='Αυτή είναι μια κριτική' />
          </div>
        </>
      }
    </div>
  );
}
