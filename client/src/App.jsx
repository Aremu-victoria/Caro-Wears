import axios from 'axios'

function App() {
  const url = 'http://localhost:5300/test'
  const getInfo = ()=>{
    axios.get(url)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
    <button onClick={getInfo}>Get Info</button>
    </>
  )
}

export default App
