import React from 'react'
import { IData } from '../../Models/DataModel'
import { Banner } from '../Banner/Banner'
import { Header } from '../Header/Header'
import './style.scss'

export const AppContext = React.createContext([])

export const App = () => {
    const langData = [
        {
            help: 'Поддержите мирных людей Украины, которые оказались втянуты в войну',
            helpTitle: 'Мы, как и многие другие, пытаемся помочь чем можем. Помогите и вы',
            guide: 'Рекомендации',
            guideTitle: `В комплексе набор упражнений, во время которых нужно смотреть в направления, указываемые точкой.`,
            guideTitle1: 'Точка показывает только направление — взгляд перемещайте до упора, но не сильно.',
            guideTitle2: 'В крайних точках задерживайте взгляд на секунду',
            guideTitle3: 'После выполнения каждого упражнения можно легонько зажмуриться или поморгать пару секунд – это помогает расслабиться глазам.',
            guideTitle4: 'Общее время упражнения: 3 минуты 25 секунд.',
            guideCheck: 'Больше не показывать',
            guideButton: 'Начать',
            guideButtonTwo: 'Начать зарядку для глаз',
            recom: 'Рекомендации',
            relax: 'Расслабтесь',
            wait: 'Закройте глаза до сигнала',
            upDown: 'Вверх вниз',
            wait1: 'На секунду задерживайте взгляд в верхней и нижней точках',
            eyes: 'Помигайте глазами',
            wait2: 'Помигайте глазами или прикройте ладонями до сигнала',
            leftRight: 'Влево вправо',
            wait3: 'До упора но без сильнего напряжения',
            diagonal: 'По диагонали',
            wait4: 'Смотрите по углам точка покажет как',
            eyes2: 'Помигайте глазами',
            wait5: 'Помигайте глазами или прикройте ладонями до сигнала.',
            clock: 'По часовой стрелке',
            wait6: 'По часовой делайте плавно',
            spyral: 'По спирали',
            wait7: 'Старайтесь делать не меньше четырех витков',
            eyes3: 'Помигайте глазами',
            wait8: 'Помигайте глазами или прикройте ладонями до сигнала',
            near: 'Вблизи вдали',
            wait9: 'Посмотрите на предмет вдали потом на монитор',
            relax2: 'Расслабтесь',
            wait10: 'Закройте глаза вы почти закончили',
            good: 'Вы молодец теперь немного отдохните от компютера'
        },
        {
            help: 'Support the peaceful people of Ukraine who are involved in wars',
            helpTitle: 'We, like many others, are trying to help in any way we can. Help you too',
            guide: 'Recommendations',
            guideTitle: 'This gymnastics includes the set of exercises. At run time your eyes need to follow the direction indicated by the dot.',
            guideTitle1: 'The dot shows only the direction - move your eyes all the way, but not much.',
            guideTitle2: 'At extreme points, hold your gaze for a second',
            guideTitle3: 'After completing each exercise, you can lightly close your eyes or blink for a couple of seconds - this helps to relax your eyes.',
            guideTitle4: 'Total exercise time: 3 minutes 25 seconds.',
            guideCheck: 'Don\'t show again',
            guideButton: 'Start',
            guideButtonTwo: 'Start exercising for the eyes',
            recom: 'Recommendations',
            relax: 'Relax',
            wait: 'Close your eyes before the signal',
            upDown: 'Up down',
            wait1: 'Hold your gaze for a second at the top and bottom points.',
            eyes: 'blink your eyes',
            wait2: 'Blink your eyes or cover your hands until the signal',
            leftRight: 'left right',
            wait3: 'Up to the stop but without strong tension',
            diagonal: 'Diagonally',
            wait4: 'Look at the corners the dot will show how',
            eyes2: 'blink your eyes',
            wait5: 'Blink your eyes or cover with your palms until the signal.',
            clock: 'Clockwise',
            wait6: 'Do it slowly clockwise',
            spyral: 'In a spiral',
            wait7: 'Try to make at least four turns',
            eyes3: 'blink your eyes',
            wait8: 'Blink your eyes or cover your hands until the signal',
            near: 'near far',
            wait9: 'Look at an object in the distance then at the monitor',
            relax2: 'Relax',
            wait10: 'Close your eyes you\'re almost done',
            good: 'Well done, now take a break from the computer'
        },
        {
            help: 'Підтримайте мирних людей України, які виявилися втягнутими у війну',
            helpTitle: 'Ми, як і багато інших, намагаємось допомогти чим можемо. Допоможіть і ви',
            guide: 'Рекомендації',
            guideTitle: `У комплексі набір вправ, під час яких потрібно дивитися у напрямки, що вказуються точкою.`,
            guideTitle1: 'Крапка показує лише напрямок — погляд переміщуйте до упору, але не сильно.',
            guideTitle2: 'У крайніх точках затримуйте погляд на секунду',
            guideTitle3: 'Після виконання кожної вправи можна легенько заплющити або поморгати пару секунд - це допомагає розслабитися очам.',
            guideTitle4: 'Загальний час вправи: 3 хвилини 25 секунд.',
            guideCheck: 'Більше не показувати',
            guideButton: 'Почати',
            guideButtonTwo: 'Почати зарядку для очей',
            recom: 'Рекомендації',
            relax: 'Розслабтеся',
            wait: 'Закрийте очі до сигналу',
            upDown: 'Вверх вниз',
            wait1: 'На секунду затримуйте погляд у верхній та нижній точках',
            eyes: 'Блимайте очима',
            wait2: 'Блимайте очима або прикрийте долонями до сигналу',
            leftRight: 'Ліворуч праворуч',
            wait3: 'До упору, але без сильної напруги',
            diagonal: 'По діагоналі',
            wait4: 'Дивіться по кутах крапка покаже як',
            eyes2: 'Блимайте очима',
            wait5: 'Блимайте очима або прикрийте долонями до сигналу.',
            clock: 'За годинниковою стрілкою',
            wait6: 'По годиннику робіть плавно',
            spyral: 'По спіралі',
            wait7: 'Намагайтеся робити не менше чотирьох витків',
            eyes3: 'Блимайте очима',
            wait8: 'Блимайте очима або прикрийте долонями до сигналу',
            near: 'Поблизу вдалині',
            wait9: 'Подивіться на предмет вдалині потім на монітор',
            relax2: 'Розслабтеся',
            wait10: 'Заплющіть очі ви майже закінчили',
            good: 'Ви молодець тепер трохи відпочиньте від комп\'ютера'
        }
    ]

    const [activeIndex, setActiveIndex]= React.useState(0)
    const [count, setCount] = React.useState(20)

   

    return (
        <div className='root'>
            <Banner langData={langData} activeIndex={activeIndex} />
            <Header langData={langData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
  )
}
