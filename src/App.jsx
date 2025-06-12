import { Link } from 'react-router-dom'
import Button from './components/atoms/Button'

function App() {
  return (
    <>
      <div className='flex'>
        <h1>J O U R N A L</h1>
        <button>
          <Link to="/main"> <Button ButtonName="시작하기" /> </Link>

        </button>
      </div>
    </>

  )
}

export default App
