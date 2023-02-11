import React, { Dispatch, SetStateAction } from 'react'
import { IData } from '../../Models/DataModel'
import { AppContext } from '../App/App'
import song from '../../../public/music.wav'
import {Howl} from 'howler'

interface HeaderProps{
    langData: IData[],
    activeIndex: number,
    setActiveIndex: Dispatch<SetStateAction<number>>,
}

export const Header = ({ langData, activeIndex, setActiveIndex }: HeaderProps) => {

  const soundPlay = () => {
    const Sounds = new Howl({
        src: [song]
      })
      Sounds.play()
      console.log("sound")
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

  

  const onClickStart = () => {
    setHide(true)
    setHide1(true)
  }

  const onClickStart2 = () => {
    setHide1(false)
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
    }
    function show11(){
        setHide12(false)
        setHide13(true)
        console.log('11')
        setCount(20)
        setCount(prev => prev - 1)
        if(count === 20){
        }
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
    setHide(false)
    setHide1(false)
  }



  return (
    <div className='container'>
        <div className="header">
            <div className="row">
                <div>
                    <img className={hide ? 'eye eye1' : 'eye eye3'} onClick={onClickBack} src="images/eye.png" alt="" />
                </div>
                <div className='row2'>
                    <h2 onClick={onClickLanguage}>{languages[activeIndex]}</h2>
                </div>
            </div>
            <div className={hide ? 'headerMiddle2Hide' : 'headerMiddle2'}>
                <img className='eye2' src="images/eye.png" alt="" />
                <button className='button' onClick={onClickStart}>Начать зарядку для глаз</button>
                <a href="">Рекомендации</a>
            </div>
            {/*  */}
            <div className={hide1 ? 'headerMiddle' : 'headerMiddleHide'}>
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
            {/*  */}
            
            <div className={hide2 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box4"></div>
                <h2 className='relax'>{langData[activeIndex].relax}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait}</p>
            </div>
            <div className={hide3 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].upDown}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait1}</p>
                <div className="box"></div>
            </div>
            <div className={hide4 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].eyes}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait2}</p>
            </div>
            <div className={hide5 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box2"></div>
                <h2 className='relax'>{langData[activeIndex].leftRight}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait3}</p>
            </div>
            <div className={hide6 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box3"></div>
                <h2 className='relax'>{langData[activeIndex].diagonal}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait4}</p>
            </div>
            <div className={hide7 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].eyes2}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait5}</p>
            </div>
            <div className={hide8 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box5"></div>
                <h2 className='relax'>{langData[activeIndex].clock}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait6}</p>
            </div>
            <div className={hide9 ? 'headerMiddle' : 'headerMiddleHide'}>
                <div className="box6"></div>
                <h2 className='relax'>{langData[activeIndex].spyral}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait7}</p>
            </div>
            <div className={hide10 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].eyes3}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait8}</p>
            </div>
            <div className={hide11 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].near}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait9}</p>
            </div>
            <div className={hide12 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].relax2}</h2>
                <p className='count'>{count}</p>
                <p className='wait'>{langData[activeIndex].wait10}</p>
            </div>
            <div className={hide13 ? 'headerMiddle' : 'headerMiddleHide'}>
                <h2 className='relax'>{langData[activeIndex].good}</h2>
            </div>
        </div>
    </div>
  )
}
