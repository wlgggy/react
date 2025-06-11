import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <h1>바오밥나무 일지</h1>
        <button>
          <Link to="/main">시작하기</Link>
        </button>
      </div>
    </>

  )
}

export default App
