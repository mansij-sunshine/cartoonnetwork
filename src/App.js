import './App.css';
import React, {useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import {cartoonsList,Cartoon} from "./Components/Cartoons.component.jsx"

function App() {
  const [test,setTest] = useState('');
  const [rotate,setRotate]= useState(false)
  const [search, setSearch]=useState('');

  useEffect(() => {
    setRotate(!rotate);
  },[]);
  
  const filteredCartoons = cartoonsList.filter((cartoon)=>{
    return cartoon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())  
  })

  function onSearchChange(e){
    
      setSearch(e.target.value);
      setTest(e.target.value);
    
  }

    return (
        <div>
            

            <div className="container-1">
            <img src="main-img.jpg" id="main-img" alt="main"></img>
            <strong>Watch your childhood favourites from Cartoon Network!</strong>
            <img src="CartoonNetwork2.jpg" alt="second-img" id="second-img"/>
            </div>
            <motion.img src="cnlogo.png" alt="main" class="mainimage" animate={{rotate:rotate?360:0}}
                    transition={{type:"spring",duration:3}} onClick = {()=>{setRotate(!rotate)}}/>
            <div className="container-2">
              <strong>Find your favourite cartoons here!</strong>
              <input type="text" placeholder='Type the cartoon name' value={test} onChange={onSearchChange}></input>

<Cartoon cartoons={filteredCartoons} />
</div>

</div>
      
    );
}

export default App;
