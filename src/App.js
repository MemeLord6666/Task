import React from 'react';
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const users = [
    {id: 1, name: 'Ertur', lastName: 'Karypov', age: 19},
    {id: 2, name: 'Alan', lastName: 'Berdibekov', age: 6},
    {id: 3, name: 'Nazar', lastName: 'Bakytbekov', age: 19},
    {id: 4, name: 'Aziya', lastName: 'Akimova', age: 18},
    {id: 5, name: 'Emir', lastName: 'Askerov', age: 19},
   ]
  return (
    <div>
      <Header/>
      {users.map((item)=>{
        return (
          <Section 
          id={item.id}
          name={item.name}
          lastName={item.lastName}
          age={item.age} />
        )
      })}
      <Footer/>
    </div>
  );
};

export default App;