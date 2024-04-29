import './App.css'
import img1 from './Images/spring.jpg'
import img2 from './Images/summer.jpg'
import img3 from './Images/fall.jpg'
import img4 from './Images/winter.jpg'


function App() {
 

  return (
    
    
    <div className='mother-Nature'>

      <h1>Welcome to my seasonal website !</h1>
      <div className='img_Container'>
        <div className='card'>
          <img src={img1} />
          <p>Spring Time</p>
        </div>
        <div className='card'>
          <img src={img2} />
          <p> Summertime </p>
        </div>
        <div className='card'>
          <img src={img3} />
          <p>/Falltime</p>
        </div>
        <div className='card'>
          <img src={img4} />
          <p>Wintertime</p>
        </div>
      </div>

      <div className='green-Card'>
          <h1>
            Some of my favorite seasonal activity
          </h1>

          <ul>
           <li> Hicking in the spring wildflowers</li>
           <li> Surfing in the summer sun</li>
           <li> playing in the leaves in the fall</li>
           <li> Building sonwman in the winter </li>
           </ul>

        </div>
    </div>


































































    
  )
}

export default App
