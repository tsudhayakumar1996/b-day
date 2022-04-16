import {useState} from 'react'

export default function Home() { 
  const [count,setcount] = useState(0)
  const [trueState,settrueState] = useState(false)
  const [loginState,setloginstate] = useState(false)
  const [loginkey,setloginkey] = useState('')
  const password = "dinesh2022biruntha"
  const bg = ["bgm","bgm2","bgm3","bgm4","bgm5",'bgm6']
  const im = ['im','im2','im3','im4','im5']
  const content = ['At Gandhi Memorial', 'At saravan stores', 'Your pick', 'At temple', 'Final foot prints on we met last']
  const tamilcontent = ['கனவினிலே நான் பேச கன்னத்தில் இதழ் பதிவாள்....',"துயர் துடைக்க நீ இருக்க உயிர் கொடுக்க நான் இருப்பேன்....",
                        "நீ பெயரில் மட்டுமல்ல நிஜத்திலும் என் பிருந்தாவனம் தான்...",'என்னவளே !!!.... நிலம் தொட்ட  உன் பாதம்  முதல் என் மனம் தொட்ட உன் பார்வை வரை நினைவுகளாய்  உனக்காக..... '
                      ,"கோபமாக நான் நடித்தால் குழந்தையாக இவள் துடிப்பாள்...... கொஞ்சிடவே நான் சிரித்தால் அன்னையாக  இவள் இருப்பாள்...","இன்பமதை நான் சுமக்க இனியவளாய் வரம் கொடுப்பாள்..... கண்ணீரை நான்  கதைக்க இனியவளாய் வரம் கொடுப்பாள் ....."]
  const logincontent = ["வார்த்தை இல்லை எனக்கு வாழ்த்து சொல்ல உனக்கு,,,, பேரழகே பிறந்தநாள் வாழ்த்துகள்....",""]
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
  const setkey = (e) => {
    setloginkey(e)
  }  
const loginHandler = () => { 
  if(loginkey === password) {
    setloginstate(true)
  }   
}
  return (
    <div className="top_container">
      {!loginState ?
        <div className='d-flex align-items-center justify-content-center loginBg' style={{flexDirection:'column', height:'100vh '}}>
          <div className='text-center'>
            <input placeholder='Password' onChange={(e)=>setkey(e.target.value)} style={{border:'none',borderRadius:5,padding:5}}></input>
          </div>
          <div className='text-center'>            
            <button className='btnns' onClick={()=>loginHandler()} style={{marginTop:30}}>Login</button>
          </div>
          <p className='no-margin text-center' style={{padding:5,fontWeight:600}}>{logincontent}</p>
        </div>
        :
        <>
          {trueState &&
            <audio autoPlay>
              <source src="img/naanpizhai.mp3" type="audio/mpeg" />  
            </audio> 
          }   
          {trueState ?
            <div className={`w-100 ${bg[count]}`}>        
              <div style={{position:'relative',height:'100vh'}}>
                <div className='img-pos'>
                  {count < 5 ?
                  <div>
                    <img className='img-fluid img-pad' style={{maxHeight:475}} src={`img/${im[count]}.jpeg`}></img> 
                  </div> : <div>
                      <video className='w-100' autoPlay style={{padding:10}}>
                        <source src='img/bdaycelebration.mp4' type="video/mp4"></source>
                      </video>
                      <p className='no-margin p-style'>At your Bday celebration</p>
                      <p className='no-margin' style={{padding:5,fontWeight:600}}>{tamilcontent[count]}</p> 
                    </div>
                  }
                  {count < 5 &&
                    <>
                      <p className='no-margin p-style'>{content[count]}</p> 
                      <p className='no-margin' style={{padding:5,fontWeight:600}}>{tamilcontent[count]}</p>
                    </>
                  }                    
                </div>            
                <div className='d-flex align-items-center justify-content-around left-pos' style={{position:'absolute',height:100,width:100}}>
                  <p className='no-margin' onClick={()=>clickHandler("sub")}>Click</p>
                </div>
                <div className='d-flex align-items-center justify-content-around right-pos' style={{position:'absolute',height:100,width:100}}>
                  <p className='no-margin' onClick={()=>clickHandler("add")}>Click</p>
                </div>                               
              </div>          
            </div> : 
            <div className='linear' style={{position:"relative",height:'100vh'}}> 
              <div className='initial_pos'>
                <p className='no-margin text-center hbdayfont' style={{paddingBottom:20,fontSize:32, fontWeight:600}}>Happy Bday Biruntha</p>
                <div className='init_click' onClick={()=>settrueState(true)}>
                  <p className='no-margin text-center'>Click</p>
                </div>  
              </div>
            </div> 
          }  
        </>         
      }               
    </div>            
  )
}
