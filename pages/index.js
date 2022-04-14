import {useState} from 'react'

export default function Home() { 
  const [count,setcount] = useState(0)
  const bg = ["bgm","bgm2","bgm3","bgm4","bgm5",'bgm6']
  const im = ['im','im2','im3','im4','im5']
  const content = ['At Gandhi Memorial', 'At saravan stores', 'We both', 'At temple', 'Final foot prints on we met last']
  const clickHandler = (key) => {     
      if(key === "add"){
        if(count < 5){
          setcount(count => count +1)
        }else {
          setcount(0)
        }       
      }
      else{
        if(count > 0){
          setcount(count => count -1)
        }else {
          setcount(5)
        }
        
      }
    }    

  console.log("count",count)
  return (
    <div className="top_container">      
      <div className={`w-100 ${bg[count]}`}>        
        <div style={{position:'relative',height:'100vh'}}>
          <div className='img-pos'>
            {count < 5 ?
            <div>
              <img className='img-fluid img-pad' src={`img/${im[count]}.jpeg`}></img> 
            </div> : <div>
                <video className='w-100' controls autoPlay style={{padding:10}}>
                  <source src='img/bdaycelebration.mp4' type="video/mp4"></source>
                </video>
                <p className='no-margin p-style'>At your Bday celebration</p>
              </div>
            }
            {count < 5 &&
              <p className='no-margin p-style'>{content[count]}</p> 
            }                          
          </div>            
          <div className='d-flex align-items-center justify-content-around left-pos' style={{position:'absolute',height:100,width:100}}>
            <p className='no-margin' onClick={()=>clickHandler("sub")}>Click</p>
          </div>
          <div className='d-flex align-items-center justify-content-around right-pos' style={{position:'absolute',height:100,width:100}}>
            <p className='no-margin' onClick={()=>clickHandler("add")}>Click</p>
          </div>          
          <p className='no-margin p-style' style={{fontSize:28}}>Happy Bday Brintha</p>          
        </div>          
      </div>                    
    </div>            
  )
}
