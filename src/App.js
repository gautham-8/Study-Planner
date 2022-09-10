import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar1  from './Components/Navbar1'
import Navbar2  from './Components/Navbar2'
import 'bootstrap/dist/css/bootstrap.css';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function App() {
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className="">
      {
        isSuccess === true?
        (<><Navbar2 /></>)
        :(<><Navbar1 /></>)
      }
    </div>
  );
}

export default App;
