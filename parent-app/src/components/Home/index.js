import { Carousel } from 'react-bootstrap'
import Card from '../Card/index.js'

export default function Home() {
  return (
    <div class='text-gray-700 p-2'><br/>
      <div class='bg-cyan rounded-3xl w-11/12 h-96 p-32 mx-auto'>
        <Carousel>
          <Carousel.Item>
            <h1>Καλωσήρθατε στο e-Parent</h1>
            <p>Το νέο site για γρήγορη εύρεση δραστηριοτήτων στην γειτονιά σου!</p>
          </Carousel.Item>
          <Carousel.Item class='text-center'>
            <h2>Βρείτε τώρα τη καλύτερη δραστηριότητα <br/> για εσάς και το παιδί σας από τις αμέτρητες επιλογές</h2>
            <p>Δεν ξέρεις από που να αρχίσεις; Δες όλες τις <a href="/">Κατηγορίες</a></p>
          </Carousel.Item>
        </Carousel>
      </div>
      <div class='pt-20'>
        <h2>Κατηγορίες</h2>
      </div>
      <div class='bg-cyan p-24 place-content-center flex'>
        <div class='relative bottom-16'>
          <div class='bg-blue-100 py-12 w-32 h-32 rounded-full shadow-lg'>
            -image-
          </div>
          <h5>Αθλητισμός</h5>
        </div>
        <div class='relative top-16'>
          <div class='bg-blue-100 py-12 px-2 w-32 h-32 rounded-full shadow-lg'>
            -image-
          </div>
          <h5>Εκδηλώσεις</h5>
        </div>
        <div class='relative bottom-16'>
          <div class='bg-blue-100 py-12 px-2 w-32 h-32 rounded-full shadow-lg'>
            -image-
          </div>
          <h5>Γυμναστήρια</h5>
        </div><div class='relative top-16'>
          <div class='bg-blue-100 py-12 px-2 w-32 h-32 rounded-full shadow-lg'>
            -image-
          </div>
          <h5>Χώροι</h5>
        </div>
        <div class='relative bottom-16'>
          <div class='bg-blue-100 py-12 px-2 w-32 h-32 rounded-full shadow-lg'>
            -image-
          </div>
          <h5>Χόμπι</h5>
        </div>
      </div>
      <div class='pt-20'>
        <h2>Δημοφιλέστερα</h2>
      </div>
      <div class='bg-cyan rounded-3xl mx-auto w-11/12 h-96 p-8 place-content-center flex'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
