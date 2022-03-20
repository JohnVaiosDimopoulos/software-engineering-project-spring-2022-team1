import './index.css';
import { Navbar, Dropdown } from 'react-bootstrap'
import {getToken} from '../../utils/Common'
import SearchInput from '../SearchInput/index'
import LoginBut from '../Buttons/LoginBut'
import LogoutBut from '../Buttons/LogoutBut'

export default function Logobar() {

  const token = getToken()

  return (
    <Navbar className='logobar'>
      <div className="logo">
        <a href="/" id="a"><h2>e - Parent </h2></a>
      </div>
      <div className="group">
        <SearchInput />
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Language
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Greek</Dropdown.Item>
            <Dropdown.Item>English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div id="login">
          {
            token && ( <LogoutBut/>)
          }
          {
            !token && ( <LoginBut/> )
          }
        </div>
      </div>
    </Navbar>
  );
}
