import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>바오밥나무 일지</h1>
      <div className="card">
        <button>
          <Link to="/main">시작하기</Link>
        </button>
      </div>
    </>
  )
}

export default App
