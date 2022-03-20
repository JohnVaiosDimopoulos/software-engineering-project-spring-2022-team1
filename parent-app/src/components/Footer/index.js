import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='column'>
        <b>Επικοινωνία</b>
        <br/>Διεύθυνση:
        <br/><br/>Τηλέφωνο:
      </div>
      <div className='column'>
        <b>Ενημέρωση</b><br />
        <a href="/">Συχνές Ερωτήσεις</a><br />
        <a href="/">Φόρμα επικοινωνίας - Σχολίων -<br /> Υποδείξεων</a>
      </div>
      <div className='column'>
        <b>Όροι & Ιδιωτικότητα</b><br />
        <a href="/">Όροι Χρήσης - Δήλωση Απορρήτου<br /></a><br />
        <a href="/">Πολιτική  Cookies</a>
      </div>
    </div>
  );
}
