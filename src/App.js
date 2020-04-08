import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


const customers = [
  {
  'id': 1,
  'image':'https://placeimg.com/64/64/any1',
  'name': '김홍주',
  'number': '10101',
  'gender': '남자',
  'content': '안녕하세요'
  },
  {
  'id': 2,
  'image':'https://placeimg.com/64/64/any2',
  'name': '홍주김',
  'number': '10102',
  'gender': '남자',
  'content': '배고파~'
  }, 
  {
  'id': 3,
  'image':'https://placeimg.com/64/64/any3',
  'name': '홍홍',
  'number': '10103',
  'gender': '남자',
  'content': '점심에 머 먹지~~?'
  }

]
function App() {
  return (
      <div>
        {customers.map(c => {return(<Customer key={c.id} id={c.id} image={c.image} 
          name={c.name} number={c.number} gender={c.gender} content={c.content}/>)})
        /* <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          number={customers[0].number}
          gender={customers[0].gender}
          content={customers[0].content}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          number={customers[1].number}
          gender={customers[1].gender}
          content={customers[1].content}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          number={customers[2].number}
          gender={customers[2].gender}
          content={customers[2].content}
         /> */
         }
      </div>       
  );
}

export default App;
