
import './App.css'
import { useGetPostQuery } from './services/jsonPlaceholderApi'



function App() {
  const {data,error,isLoading}=useGetPostQuery()

  if(isLoading)return <p>loading...</p>;

  if(error) return <p>There was an error:</p>
  console.log(data)
  return (
    <>
      hello RTK homepage
    </>
  )
}

export default App
