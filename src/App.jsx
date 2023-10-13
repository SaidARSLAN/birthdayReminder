import DeleteButton from './components/DeleteButton'
import Header from './components/Header'
import PeopleList from './components/PeopleList'
import './index.scss'

function App() {

  return (
   <main className='__main'>
    <Header />
    <PeopleList />
    <DeleteButton />
   </main>
  )
}

export default App
