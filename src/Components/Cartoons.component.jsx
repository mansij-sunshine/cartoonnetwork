import './Cartoons.css';
import Modal from './Modal'
import { useState } from 'react';



export const cartoonsList=[
    {id:1,name:"The PowerPuff Girls",src:"ppg.png", alt:"ppg",seasons:1},
    {id:2,name:"Tom and Jerry",src:"tnj.jpg",alt:"ppg",seasons:2},
    {id:3,name:"The Flintstones",src:"flintstones.jpg",  alt:"ppg",seasons:3},
    {id:4,name:"The Jetsons",src:"jetsons.jpg",  alt:"ppg",seasons:2},
    {id:5,name:"Dexter's Laboratory",src:"dexter.jpg", alt:"ppg",seasons:1},
    {id:6,name:"Courage the Cowardly Dog",src:"courage.jpg",  alt:"ppg",seasons:3},
    {id:7,name:"Scooby Doo, where are you!",src:"scooby.jpg", alt:"ppg",seasons:3},
    {id:8,name:"The Mask",src:"mask.jpg", alt:"ppg",seasons:3},
    {id:9,name:"Johnny Bravo",src:"johnny.jpg", alt:"ppg",seasons:3},
    {id:10,name:"The Addams Family",src:"adams.jpg", alt:"ppg",seasons:3},
    {id:11,name:"The Looney Tunes",src:"looneytunes.jpg", alt:"ppg",seasons:3},
    {id:12,name:"Swat Kats",src:"swatkats.jpg", alt:"ppg",seasons:3},
    {id:13,name:"Captain Planet",src:"captainplanet.jpg", alt:"ppg",seasons:3},
    {id:14,name:"The Yogi Bear Show",src:"yogi.png", alt:"ppg",seasons:3},
    {id:15,name:"Richie Rich",src:"richie.jpg", alt:"ppg",seasons:3},
    {id:16,name:"Popeye The Sailor",src:"popeye.jpg", alt:"ppg",seasons:0}
];

export function Cartoon(props){
function handleClick(){
    props.onClick(props.id);
}

 return (   
    <div className='Cartoons'>
    <p>{props.name}</p>
    <img src={props.src} alt={props.alt} onClick={handleClick} />
    </div>    

)}

