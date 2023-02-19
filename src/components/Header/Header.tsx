import React, { Dispatch, SetStateAction } from 'react'
import { IData } from '../../Models/DataModel'
import { AppContext } from '../App/App'
import song from '../../../public/music.wav'
import song2 from '../../../public/music2.mp3'
import {Howl} from 'howler'
import Slider from '../Slider/Slider'

interface HeaderProps{
    langData: IData[],
    activeIndex: number,
    setActiveIndex: Dispatch<SetStateAction<number>>,
}

export const Header = ({ langData, activeIndex, setActiveIndex }: HeaderProps) => {

    const [hideVolume, setHideVolume] = React.useState(false)
    const [volume, setVolume] = React.useState<number>(0)
    const songList = ['song', 'song2']
    const ringIcon = ['images/bell.png', 'images/bell2.png', '3']
    const [songIndex, setSongIndex] = React.useState(0)
    const [ringHide, setRingHide] = React.useState(false)

  const soundPlay = () => {
    const Sounds = new Howl({
        src: songIndex === 0 ? song : song2,
        volume: volume / 100
      })
      Sounds.play()
      console.log("sound")
  }

  const soundPlay2 = () => {
    const Sounds = new Howl({
        src: song2,
        volume: volume / 100
      })
      Sounds.play()
  }

  const soundPlay3 = () => {
    const Sounds = new Howl({
        src: song,
        volume: volume / 100
      })
      Sounds.play()
  }


  const onClickIndex1 = () => {
    setSongIndex(0)
    setRingHide(false)
    soundPlay3()
}
const onClickIndex2 = () => {
    setSongIndex(1)
    setRingHide(false)
    soundPlay2()
}


  const languages = ['Ru', 'En', 'Ua']
  const [hide, setHide] = React.useState(false)
  const [hide1, setHide1] = React.useState(false)
  const [hide2, setHide2] = React.useState(false)
  const [hide3, setHide3] = React.useState(false)
  const [hide4, setHide4] = React.useState(false)
  const [hide5, setHide5] = React.useState(false)
  const [hide6, setHide6] = React.useState(false)
  const [hide7, setHide7] = React.useState(false)
  const [hide8, setHide8] = React.useState(false)
  const [hide9, setHide9] = React.useState(false)
  const [hide10, setHide10] = React.useState(false)
  const [hide11, setHide11] = React.useState(false)
  const [hide12, setHide12] = React.useState(false)
  const [hide13, setHide13] = React.useState(false)
  const [hide14, setHide14] = React.useState(false)
  const [count, setCount] = React.useState(20)
  const [onBack, setOnBack] = React.useState(false)

  
  let [seconds, setSeconds] = React.useState(0)
  let [secondsTwo, setSecondsTwo] = React.useState(0)
  let [minutes, setMinutes] = React.useState(0)
  let [minutesTwo, setMinutesTwo] = React.useState(0)
  let [hours, setHours] = React.useState(0)
  let [hoursTwo, setHoursTwo] = React.useState(0)


  const onClickStart = () => {
    setHide(true)
    setHide1(true)
  }

  const onClickStart2 = () => {
    setHide1(false)
    setHide14(false)
    setHide2(true)
    setCount(20)
    setInterval(() => {
        setCount(prev => prev - 1)
    }, 1000)
    let first = setInterval(show1, 20000)
    let second = setInterval(show2, 40000)
    let third = setInterval(show3, 60000)
    let forth = setInterval(show4, 80000)
    let fifth = setInterval(show5, 100000)
    let six = setInterval(show6, 120000)
    let seven = setInterval(show7, 140000)
    let eight = setInterval(show8, 160000)
    let nine = setInterval(show9, 180000)
    let ten = setInterval(show10, 200000)
    let eleven = setInterval(show11, 220000)
    let twelve = setInterval(show12, 230000)

    function show1(){
        setHide2(false)
        setHide3(true)
        console.log('1')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(first)
            soundPlay()
        }
        if(count === 0){
            clearInterval(first)
        }
    }
    function show2(){
        setHide3(false)
        setHide4(true)
        console.log('2')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(second)
            soundPlay()
        }
        if(count === 0){
            clearInterval(second)
        }
    }
    function show3(){
        setHide4(false)
        setHide5(true)
        console.log('3')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(third)
            soundPlay()
        }
        if(count === 0){
            clearInterval(third)
        }
    }
    function show4(){
        setHide5(false)
        setHide6(true)
        console.log('4')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(forth)
            soundPlay()
        }
        if(count === 0){
            clearInterval(forth)
        }
    }
    function show5(){
        setHide6(false)
        setHide7(true)
        console.log('5')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(fifth)
            soundPlay()
        }
        if(count === 0){
            clearInterval(fifth)
        }
    }
    function show6(){
        setHide7(false)
        setHide8(true)
        console.log('6')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(six)
            soundPlay()
        }
        if(count === 0){
            clearInterval(six)
        }
    }
    function show7(){
        setHide8(false)
        setHide9(true)
        console.log('7')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(seven)
            soundPlay()
        }
        if(count === 0){
            clearInterval(seven)
        }
    }
    function show8(){
        setHide9(false)
        setHide10(true)
        console.log('8')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(eight)
            soundPlay()
        }
        if(count === 0){
            clearInterval(eight)
        }
    }
    function show9(){
        setHide10(false)
        setHide11(true)
        console.log('9')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(nine)
            soundPlay()
        }
        if(count === 0){
            clearInterval(nine)
        }
    }
    function show10(){
        setHide11(false)
        setHide12(true)
        console.log('10')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(ten)
            soundPlay()
        }
        if(count === 0){
            clearInterval(ten)
        }
    }
    function show11(){
        setHide12(false)
        setHide13(true)
        console.log('11')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
            clearInterval(eleven)
        }
        if(count === 0){
            clearInterval(eleven)
        }
    }
    function show12(){
        setHide13(false)
        setHide14(true)
        console.log('12')
        setCount(20)    
        setInterval(() => {
            setSeconds(seconds += 1)
            if(seconds === 60){
                setSeconds(seconds = 0)
                setMinutes(minutes += 1)
                clearInterval(twelve)
            }
            if(minutes === 60){
                setHours(hours += 1)
            }
        }, 1000)
    }
}


  const onClickLanguage = () => {
    switch (activeIndex) {
        case 0:
            setActiveIndex(activeIndex + 1)
            break;
        case 1:
            setActiveIndex(activeIndex + 1)
            break;
        case 2:
            setActiveIndex(activeIndex - 2)
            break;
    
        default:
            break;
    }
  }

const onClickBack = () => {
    window.location.reload()
}

    const rangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(e.target.value)
        console.log(volume)
    }

  return (
    <div className='container'>
        <div className="header">
            <div className="row">
                <div>
                    <div onClick={onClickBack} className={hide ? 'eyebackground eye1' : 'eyebackground eye3'}></div>
                    {/* <img className={hide ? 'eye eye1' : 'eye eye3'} onClick={onClickBack} src="images/eye.png" alt="" /> */}
                    <div className={hideVolume ? 'showVolume' : 'hideVolume'}>
                        <input className='volume' onChange={(e) => rangeChange(e)} value={volume} type="range"  min='0' max='99' />
                    </div>
                </div>
                <div className='row2'>
                    <h2 className='lgh2' onClick={onClickLanguage}>{languages[activeIndex]}</h2>
                    <div className='ring'>
                        <p onClick={() => setRingHide(!ringHide)}><img className='thirdbell' src={ringIcon[songIndex]} alt="" /></p>
                        {ringHide && <ul>
                            <li onClick={onClickIndex1}><img src="images/bell.png" alt="" /></li>
                            <li onClick={onClickIndex2}><img className='secondbell' src="images/bell2.png" alt="" /></li>
                        </ul>}
                    </div>
                    <div className="ring">
                        <p onClick={() => setHideVolume(!hideVolume)}><img className='thirdbell' src='images/volume.png' alt="" /></p>
                    </div>
                </div>
            </div>
            <div className={hide ? 'headerMiddle2Hide' : 'headerMiddle2'}>
                {/* <img className='eye2' src="images/eye.png" alt="" /> */}
                <div className='eyebackground'></div>
                <div className="startdiv">
                <button className='button' onClick={onClickStart}>{langData[activeIndex].guideButtonTwo}</button>
                <a href="">{langData[activeIndex].recom}</a>
                </div>
            </div>
            {/*  */}
            <div className={hide1 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="mini mini2">
                <h2>{langData[activeIndex].guide}</h2>
                <p>{langData[activeIndex].guideTitle}</p>
                <p>{langData[activeIndex].guideTitle1}</p>
                <p>{langData[activeIndex].guideTitle2}</p>
                <p>{langData[activeIndex].guideTitle3}</p>
                <p>{langData[activeIndex].guideTitle4}</p>
                <div className="checkButton row2">
                    <div className="row2">
                        <input className='check' type='checkbox' />
                        <p>{langData[activeIndex].guideCheck}</p>
                    </div>
                    <button onClick={onClickStart2} className='button'>{langData[activeIndex].guideButton}</button>
                </div>
                </div>
            </div>
            <div className={hide14 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className='row2 clocktime'>
                    <p>{hours} :</p>
                    {/* <p>{hoursTwo} :</p> */}
                    <p>{minutes} :</p>
                    {/* <p>{minutesTwo} :</p> */}
                    {/* <p>{secondsTwo}</p> */}
                    <p>{seconds}</p>
                </div>
                <button onClick={onClickBack} className='button timebutton'>{langData[activeIndex].guideButtonTwo}</button>
                <a href="" className='recomend-two'>{langData[activeIndex].recom}</a>
            </div>
            {/*  */}
            
            <div className={hide2 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box4"></div>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].relax}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait}</p>
                </div>
            </div>
            <div className={hide3 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].upDown}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait1}</p>
                </div>
                <div className="box"></div>
            </div>
            <div className={hide4 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].eyes}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait2}</p>
                </div>
            </div>
            <div className={hide5 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box2"></div>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].leftRight}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait3}</p>
                </div>
            </div>
            <div className={hide6 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box3"></div>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].diagonal}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait4}</p>
                </div>
            </div>
            <div className={hide7 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].eyes2}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait5}</p>
                </div>
            </div>
            <div className={hide8 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box5"></div>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].clock}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait6}</p>
                </div>
            </div>
            <div className={hide9 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box6"></div>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].spyral}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait7}</p>
                </div>
            </div>
            <div className={hide10 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].eyes3}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait8}</p>
                </div>
            </div>
            <div className={hide11 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].near}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait9}</p>
                </div>
            </div>
            <div className={hide12 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].relax2}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait10}</p>
                </div>
            </div>
            <div className={hide13 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="mini">
                <h2 className='relax'>{langData[activeIndex].good}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
