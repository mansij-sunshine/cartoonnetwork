import './Cartoons.css';
export const cartoonsList=[
    {name:"The PowerPuff Girls",src:"ppg.png", alt:"ppg"},
    {name:"Tom and Jerry",src:"tnj.jpg",alt:"ppg"},
    {name:"The Flintstones",src:"flintstones.jpg",  alt:"ppg"},
    {name:"The Jetsons",src:"jetsons.jpg",  alt:"ppg"},
    {name:"Dexter's Laboratory",src:"dexter.jpg", alt:"ppg"},
    {name:"Courage the Cowardly Dog",src:"courage.jpg",  alt:"ppg"},
    {name:"Scooby Doo, where are you!",src:"scooby.jpg", alt:"ppg"},
    {name:"The Mask",src:"mask.jpg", alt:"ppg"},
    {name:"Johnny Bravo",src:"johnny.jpg", alt:"ppg"},
    {name:"The Addams Family",src:"adams.jpg", alt:"ppg"},
    {name:"The Looney Tunes",src:"looneytunes.jpg", alt:"ppg"},
    {name:"Swat Kats",src:"swatkats.jpg", alt:"ppg"},
    {name:"Captain Planet",src:"captainplanet.jpg", alt:"ppg"},
    {name:"The Yogi Bear Show",src:"yogi.png", alt:"ppg"},
    {name:"Richie Rich",src:"richie.jpg", alt:"ppg"},
    {name:"Popeye The Sailor",src:"popeye.jpg", alt:"ppg"}
];

export function Cartoon(props){
    let cartoonName=props.cartoons;
    
 return (   
    <div>
 {cartoonName.map((cartoon,index) => 
 {
    return (
    <div className='Cartoons' key={index}>
    <p>{cartoon.name}</p>
    <img src={cartoon.src} alt={cartoon.alt}></img>
    </div>
    )}
    )}</div>
    )

}

