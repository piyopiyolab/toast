//Imports
import "../App/App.css"
import Toast from '../Toast/Toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>

      <div className="App">
        <h1>Notification Component</h1>
        <ToastContainer />
        <Toast message={"info"} />
      </div>
    </>
  )
}

export default App
