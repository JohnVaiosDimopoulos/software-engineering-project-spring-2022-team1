import ListItemBankAccount from './ListItemBankAccount.js'
import { BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { sendProfileData } from './api.js'
import { fetchProfilePageData } from './api.js'


export default function ProfilePage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [canEdit, setCanEdit] = useState(false)
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')
  const [email, setEmail] = useState('')
  const [accounts, setAccounts] = useState([])
  const [selectedAccount, setSelectedAccount] = useState(-1)

  useEffect(() => {
    fetchProfilePageData( (response) => {
      if(response.ok){
        setData(response.data)
        setUsername(response.data.username)
        setPwd(response.data.password)
        setEmail(response.data.email)
        setAccounts(response.data.bankAccounts)
        for (const i in response.data.bankAccounts) {
          if (response.data.bankAccounts[i].isSelected) {
            setSelectedAccount(i)
            break
          }
        }
      }
      else{
        console.log('failed to fetch data');
      }
      setLoading(false)
    })
  }, [])
  
  function sendNewProfileInfo(){
    sendProfileData({
      username: username,
      email: email,
      password: pwd
    })
    setCanEdit(false)
  }

  function handleEditOrSave() {
    if (canEdit) {
      sendNewProfileInfo()
    }
    else {
      setCanEdit(true)
    }
  }

  function switchBankAccount(idx){
    setSelectedAccount(idx)
  }

  return (
    <div className='font-light'>
      {
        loading ? 
        <span>Φορτώνει...</span>
        :
        <>
          <div className='text-3xl text-center'>Στοιχεία Λογαριασμού</div>
          <div className='relative flex justify-between'>
            <div className='w-full'>
              <div className='mt-8 font-normal'>Όνομα Χρήστη</div>
              <input type='text' className={`w-11/12 h-8 px-4 rounded-full shadow ${canEdit ? 'bg-white' : 'bg-gray-200  outline-none'}`}
                placeholder='Όνομα Χρήστη' readOnly={!canEdit}
                value={username} onChange={(e) => setUsername(e.target.value)}
              />
              <div className='mt-4 font-normal'>Διεύθυνση Email</div>
              <input type='text' className={`w-11/12 h-8 px-4 rounded-full shadow ${canEdit ? 'bg-white' : 'bg-gray-200 outline-none'}`}
                placeholder='Διεύθυνση Email' readOnly={!canEdit}
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <div className='mt-4 font-normal'>Κωδικός</div>
              <input type='password' className={`w-11/12 h-8 px-4 rounded-full shadow ${canEdit ? 'bg-white' : 'bg-gray-200 outline-none'}`}
                placeholder='Κωδικός' readOnly={!canEdit}
                value={pwd} onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <div className='w-full mt-24'>
              <button onClick={() => handleEditOrSave()} className='bg-cyan hover:bg-hover w-11/12 h-8 text-lg rounded-full shadow'>
                {
                  canEdit ?
                  'Αποθηκευση'
                  :
                  'Επεξεργασία'
                }
              </button>
              <button className='bg-white hover:bg-red-400 hover:text-white w-11/12 mt-8 border-2 border-red-400 rounded-full font-light text-lg shadow'>Διαγραφή Λογαριασμού</button>
            </div>
          </div>
          <div className='text-2xl mt-12 text-center'>Υδατογράφημα</div>
          <div className='flex justify-between mt-6'>
            <input type='watermark' className='px-4 w-1/2 p-1 rounded-full shadow' placeholder='Μέχρι 30 χαρακτήρες'/>
            <button className='bg-cyan hover:bg-hover w-1/3 h-8 mx-auto text-lg rounded-full shadow'>Προσθήκη</button>
          </div>
          <div className='text-2xl mt-12 text-center'>Οι Πόντοι Μου</div>
          <div className='bg-white rounded-full w-96 p-1 mx-auto text-center text-3xl'>{data.totalPoints} / 3000$</div>
          <div className='text-2xl mt-12 text-center'>Εξαργύρωση Πόντων</div>
          <div className='flex justify-between mt-8'>
            <input type='points' className='w-2/5 px-4 rounded-full shadow' placeholder='Αριθμός Πόντων'/>
            <BsArrowRight className='w-10 h-10'/>
            <input type='points' className='px-4 w-2/5 p-1 rounded-full shadow' placeholder='Αριθμός $'/>
          </div>
          <button className='bg-cyan hover:bg-hover w-full h-8 mt-4 mx-auto text-lg rounded-full shadow'>Εξαργύρωση</button>
          <div className='text-2xl mt-12 text-center'>Οι Λογαριασμοί Μου</div>
          <div className='h-52 overflow-y-scroll overflow-hidden'>
            {
              accounts.map((acc, i) => <ListItemBankAccount key={i} clicked={() => switchBankAccount(i)} isSelected={i === selectedAccount} data={acc} />)
            }
          </div>
          <div className='text-center mt-4'>
            <button className='bg-white hover:bg-hover hover:text-white border-4 border-cyan w-16 h-16 pb-1 pl-1 text-5xl text-cyan rounded-full shadow'>+</button>
          </div>
        </>
      }
    </div>
  );
}
