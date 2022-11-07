import './Cartoons.css';
export const cartoonsList=[
    {name:"PowerPuff Girls",src:"ppg.png",width:"200", height:"300", alt:"ppg"},
    {name:"Tom and Jerry",src:"tnj.jpg", width:"200", height:"300", alt:"ppg"},
    {name:"The Flintstones",src:"flintstones.jpg",width:"200", height:"300", alt:"ppg"}];

export function Cartoon(props){
    let cartoonName=props.cartoons;
    
 return (   
    <div>
 {cartoonName.map((cartoon,index) => 
 {
    return (
    <div className='Cartoons' key={index}>
    <p>{cartoon.name}</p>
    <img src={cartoon.src} width={cartoon.width} height={cartoon.height} alt={cartoon.alt}></img>
    </div>
    )}
    )}</div>
    )

}

