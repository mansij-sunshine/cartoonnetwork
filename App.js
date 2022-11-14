import './App.css';
import React, {useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import {cartoonsList,Cartoon} from "./Components/Cartoons.component.jsx"
import Modal from './Components/Modal'

function App() {
  const [test,setTest] = useState('');
  const [rotate,setRotate]= useState(false)
  const [search, setSearch]=useState('');
  const [isOpen,setIsOpen]=useState(false);
  const [seasons,setSeasons]=useState(0);
  useEffect((rotate) => {
    setRotate(!rotate);
  },[]);
  
  const filteredCartoons = cartoonsList.filter((cartoon)=>{
    return cartoon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())  
  })

  function onSearchChange(e){
    
      setSearch(e.target.value);
      setTest(e.target.value);
  }

  function handleModal(id){
    setIsOpen(true);

  filteredCartoons.filter((c)=> {
      if(c.id ===id) {
        setSeasons(c.seasons)
        return 1}
      return 0;
    })

    console.log(seasons);

  }


    return (
        <div>
            <div className="container-1">
            <img src="main-img.jpg" id="main-img" alt="main"></img>
            <strong>Watch your childhood favourites from Cartoon Network!</strong>
            <img src="CartoonNetwork2.jpg" alt="second-img" id="second-img"/>
            </div>
            <motion.img src="cnlogo.png" alt="main" className="mainimage" animate={{rotate:rotate?360:0}}
                    transition={{type:"spring",duration:3}} onClick = {()=>{setRotate(!rotate)}}/>
            <div className="container-2">
              <strong>Find your favourite cartoons here!</strong>
              <input type="search" placeholder='Type the cartoon name' value={test} onChange={onSearchChange}></input>

<div>

{filteredCartoons.map((c) => <Cartoon onClick={handleModal} key={c.id} id={c.id} name={c.name} alt={c.alt} src={c.src} seasons={c.seasons} />
)}
{console.log(seasons)}
<Modal open={isOpen} onClose={()=>{setIsOpen(false)}}>
    Seasons:{seasons}    
    <br/>
    Watch on YouTube here:
    </Modal>
</div>
</div>

</div>
      
    );
}

export default App;
