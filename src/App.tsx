
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { User } from './components/state/User'

function App() {
  const personName ={
    first: "Adolf" ,
    last: "hitler"
  }
  const nameList = [
    {
      first :'Bruce' ,
      last: 'wayne'
    },
    {
      first : 'peter' ,
      last : 'parker'
    },
    {
      first :'steve',
      last : 'rogers'
    }

  ]

  return (
    <div className='App'>
      <Button
        handleClick={(event ,id ) => {
          console.log('button clicked' , event )
        }}
        />
        <Input value='Sup niger' handleChange={(event) => console.log(event)}/>
        <Container style={{border: '1px solid black' , padding : '1rem' , background :'green'}} />
        <User />
    </div>
  )
}

export default App
