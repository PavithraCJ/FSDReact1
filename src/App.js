import logo from './logo.svg';
import './App.css';
import Greet from './Greet.jsx';
import UIButton from './UIButton.jsx';
import ImageComponent from './ImageComponent.jsx';
import ListComponent from './ListComponent.jsx';
import ReusableList from './ReusableList.jsx';
import Parent from "./Parent.jsx";
import Counter from './Counter.jsx';
// import InputComponent from "./InputComponent.jsx";
import EvenorOdd from './EvenorOdd.jsx';
import Arithmetic from "./Arithmetic.jsx"
import Dropdown from './Dropdown.jsx';
import Namelist from './Namelist.jsx';
import Changecolor from './Changecolor.jsx';
import FilterNames from './FilterNames.jsx';
import Products from './Products.jsx';
import SideEffectsDemo from './SideEffectsDemo.jsx';
import FetchProducts from './FetchProducts.jsx';
import TableProducts from './TableProducts.jsx';
import Table from 'react-bootstrap/Table';
import BasicExample from './CardComponent.jsx';
import UserData from './UserData.jsx';
import Users from './UserDetails.jsx';
import Login from './loginlogout.js';
import PropsClass from './PropsClass.jsx';
import CounterClass from './CounterClass.jsx';
import DataSharingParent from './DataSharingParent.jsx';
import StudentDetails from './StudentDetails.jsx';
import ProductForm from './ProductForm.jsx';
import Todotasklist from './todotasklist.jsx';

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greet></Greet>
    </div>
  );*/
  let title = "List of Names"
  let names = ["John","Jacob","Smith","Clara",]

  let title1="List of Vegetables"
  let veggies = ["Carrot","Beans","Potato","Tomato"]

  let title2="List of Products"
  let prods = ["Pen","Pencil","Notebook"]
    return(
      <div className="App">
        <b>Hello World!!</b>
        <b>Joy!!</b>
        {/* <Greet></Greet>
        <UIButton></UIButton>
        <ImageComponent></ImageComponent> */}
        {/* <Counter></Counter> */}
        {/* <ReusableList heading={title} data={names}></ReusableList>
        <ReusableList heading={title1} data={veggies}></ReusableList>
        <ReusableList heading={title2} data={prods}></ReusableList> 

        <Parent></Parent>*/}
        {/* <InputComponent></InputComponent> */}
        {/* <EvenorOdd></EvenorOdd><br/>
        <Arithmetic></Arithmetic>
        <Dropdown></Dropdown>
        <Namelist></Namelist>
        <br></br><br></br>
        <Changecolor></Changecolor>
        <br></br><br></br>
        <FilterNames></FilterNames>

        <br></br><br></br>
        <Products></Products> */}
        {/* <SideEffectsDemo></SideEffectsDemo>
       <FetchProducts></FetchProducts> */}
        {/* <TableProducts></TableProducts> */}
        {/* <BasicExample></BasicExample> */}
        {/* <UserData></UserData> */}
        {/* <Users></Users> */}
        <Login></Login>
        <PropsClass name="John"></PropsClass>
        <CounterClass></CounterClass>
        <DataSharingParent></DataSharingParent>
        <StudentDetails></StudentDetails>
        <ProductForm></ProductForm>
        <Todotasklist></Todotasklist>
      </div>
    );
  }

export default App;
