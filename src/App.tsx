
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
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContext, UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import Counter from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './restriction/RandomNumber';
import { Toast } from './components/templateliteral/Toast';
import CustomButton from './components/html/Button'
import { Text } from './components/polymorphic/Text';

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
      {/* <Greet name="Anurag" isLoggedIn={true} />
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
      <Counter />
      <ThemeContextProvider >
          <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <Counter message = "Counter message" />
      <Private isLoggedIn = {true} Component = {Profile}  /> */}
      {/* <List  items={['Batman' , 'Spiderman','Superman']} onClick={(item) => console.log(item)}/>
      <List items={[1 , 2, 3]} onClick={(item) => console.log(item)}/> */}
      {/* <List items={[
        {
          id : 1,
          first : "Anurag",
          last : "Bakode"
        },
        {
          id : 2,
          first : "Satyam",
          last : "Gupta"
        }
      ]} onClick={(item) => console.log(item)}/> */}

      {/* <RandomNumber  value = {10} isPositive /> */}
      {/* <Toast position='center'/> */}
      {/* <CustomButton variant="primary">
          Primary Button 
      </CustomButton> */}
    <Text as = 'h1' size = 'lg'>Heading</Text>
      <Text as = 'p' size='md' >Paragraph </Text>
      <Text  as = 'label' htmlFor = 'someid' size='lg' color='secondry'>Label</Text>


    </div>
  );
}

export default App;
