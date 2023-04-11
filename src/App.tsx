
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
  const personName = {
    first: "Anurag",
    last: "Bakode"
  }

  const nameList = [
    {
      first: "Satyam",
      last: "Gupta"
    },
    {
      first: "Manish",
      last: "Jha"
    },
    {
      first: "Mujeeb",
      last: "Tarry"
    }
  ]

  // const handleClick = (event) => {
  //   console.log("Button Clicked" , event)
  // }

  return (
    <div className="App">
      <Greet name="Anurag" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList nameList={nameList} />
      <Status status='Loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar >
        <Heading>Oscar goes to me</Heading>
      </Oscar>
      <Button handleClick={(event) => console.log("Button Clicked", event)} />
      <Input value ='' handleChange = {(event) => console.log(event.target.value)} />
      <Container styles = {{border : '1px solid black' , padding : '10px' }}/>
    </div>
  );
}

export default App;
