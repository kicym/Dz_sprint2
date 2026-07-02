// // import React, {useState} from 'react'
// // import s2 from '../../s1-main/App.module.css'
// // import s from './HW13.module.css'
// // import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
// // import axios from 'axios'
// // import success200 from './images/200.svg'
// // import error400 from './images/400.svg'
// // import error500 from './images/500.svg'
// // import errorUnknown from './images/error.svg'
// //
// // /*
// // * 1 - дописать функцию send
// // * 2 - дизэйблить кнопки пока идёт запрос
// // * 3 - сделать стили в соответствии с дизайном
// // * */
// //
// // const HW13 = () => {
// //     const [code, setCode] = useState('')
// //     const [text, setText] = useState('')
// //     const [info, setInfo] = useState('')
// //     const [image, setImage] = useState('')
// //     const [loading, setLoading] = useState(false)
// //
// //     const send = (x?: boolean | null) => () => {
// //         const url =
// //             x === null
// //                 ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
// //                 : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'
// //
// //         setCode('')
// //         setImage('')
// //         setText('')
// //         setInfo('...loading')
// //         setLoading(true)
// //
// //         axios
// //             .post(url, {success: x})
// //             .then((res) => {
// //                 setLoading(false)
// //                 setCode(`Код ${res.status}!`)
// //                 setImage(success200)
// //
// //                 // дописать
// //                 setText(res.data.text || 'Успешный запрос')
// //                 setInfo(res.data.info || 'Операция выполнена успешно')
// //
// //             })
// //             .catch((e) => {
// //                 // дописать
// //                 setLoading(false)
// //
// //                 if (e.response) {
// //                     const status = e.response.status
// //
// //                     setCode(`Ошибка ${status}!`)
// //                     setText(e.response.data.text || 'Что-то пошло не так')
// //                     setInfo(e.response.data.info || 'Попробуйте позже')
// //
// //                     // Выбор SVG в зависимости от статуса
// //                     if (status === 400) {
// //                         setImage(error400)
// //                     } else if (status === 500) {
// //                         setImage(error500)
// //                     } else {
// //                         setImage(errorUnknown)
// //                     }
// //                 } else if (e.request) {
// //                     // Запрос был сделан, но ответ не получен
// //                     setCode('Ошибка сети!')
// //                     setText('Сервер недоступен')
// //                     setInfo('Проверьте подключение к интернету')
// //                     setImage(errorUnknown)
// //                 } else {
// //                     // Произошла ошибка при настройке запроса
// //                     setCode('Ошибка!')
// //                     setText('Неизвестная ошибка')
// //                     setInfo('Попробуйте ещё раз')
// //                     setImage(errorUnknown)
// //                 }
// //             })
// //     }
// //
// //     return (
// //         <div id={'hw13'}>
// //             <div className={s2.hwTitle}>Homework #13</div>
// //
// //             <div className={s2.hw}>
// //                 <div className={s.buttonsContainer}>
// //                     <SuperButton
// //                         id={'hw13-send-true'}
// //                         onClick={send(true)}
// //                         xType={'secondary'}
// //                         // дописать
// //                         disabled={loading}
// //                     >
// //                         Send true
// //                     </SuperButton>
// //                     <SuperButton
// //                         id={'hw13-send-false'}
// //                         onClick={send(false)}
// //                         xType={'secondary'}
// //                         // дописать
// //                         disabled={loading}
// //
// //                     >
// //                         Send false
// //                     </SuperButton>
// //                     <SuperButton
// //                         id={'hw13-send-undefined'}
// //                         onClick={send(undefined)}
// //                         xType={'secondary'}
// //                         // дописать
// //                         disabled={loading}
// //                     >
// //                         Send undefined
// //                     </SuperButton>
// //                     <SuperButton
// //                         id={'hw13-send-null'}
// //                         onClick={send(null)} // имитация запроса на не корректный адрес
// //                         xType={'secondary'}
// //                         // дописать
// //                         disabled={loading}
// //                     >
// //                         Send null
// //                     </SuperButton>
// //                 </div>
// //
// //                 <div className={s.responseContainer}>
// //                     <div className={s.imageContainer}>
// //                         {image && <img src={image} className={s.image} alt="status"/>}
// //                     </div>
// //
// //                     <div className={s.textContainer}>
// //                         <div id={'hw13-code'} className={s.code}>
// //                             {code}
// //                         </div>
// //                         <div id={'hw13-text'} className={s.text}>
// //                             {text}
// //                         </div>
// //                         <div id={'hw13-info'} className={s.info}>
// //                             {info}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }
// //
// // export default HW13
//
// import React, {useState} from 'react'
// import s2 from '../../s1-main/App.module.css'
// import s from './HW13.module.css'
// import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
// import success200 from './images/200.svg'
// import error400 from './images/400.svg'
// import error500 from './images/500.svg'
// import errorUnknown from './images/error.svg'
//
// const HW13 = () => {
//     const [code, setCode] = useState('')
//     const [text, setText] = useState('')
//     const [info, setInfo] = useState('')
//     const [image, setImage] = useState('')
//     const [loading, setLoading] = useState(false)
//
//     const send = (x?: boolean | null) => () => {
//         setCode('')
//         setImage('')
//         setText('')
//         setInfo('...loading')
//         setLoading(true)
//
//         // Имитация запроса с задержкой
//         setTimeout(() => {
//             setLoading(false)
//
//             // В зависимости от параметра x возвращаем разные статусы
//             if (x === true) {
//                 setCode('Код 200!')
//                 setImage(success200)
//                 setText('...всё ок)')
//                 setInfo('Операция выполнена успешно')
//             } else if (x === false) {
//                 setCode('Ошибка 500!')
//                 setImage(error500)
//                 setText('Некорректный запрос')
//                 setInfo('Проверьте правильность введённых данных')
//             } else if (x === undefined) {
//                 setCode('Ошибка 400!')
//                 setImage(error400)
//                 setText('Внутренняя ошибка сервера')
//                 setInfo('Попробуйте позже')
//             } else if (x === null) {
//                 setCode('Ошибка сети!')
//                 setImage(errorUnknown)
//                 setText('Сервер недоступен')
//                 setInfo('Проверьте подключение к интернету')
//             }
//         }, 1000)
//     }
//
//     return (
//         <div id={'hw13'}>
//             <div className={s2.hwTitle}>Homework #13</div>
//
//             <div className={s2.hw}>
//                 <div className={s.buttonsContainer}>
//                     <SuperButton
//                         id={'hw13-send-true'}
//                         onClick={send(true)}
//                         xType={'secondary'}
//                         disabled={loading}
//                     >
//                         Send true
//                     </SuperButton>
//                     <SuperButton
//                         id={'hw13-send-false'}
//                         onClick={send(false)}
//                         xType={'secondary'}
//                         disabled={loading}
//                     >
//                         Send false
//                     </SuperButton>
//                     <SuperButton
//                         id={'hw13-send-undefined'}
//                         onClick={send(undefined)}
//                         xType={'secondary'}
//                         disabled={loading}
//                     >
//                         Send undefined
//                     </SuperButton>
//                     <SuperButton
//                         id={'hw13-send-null'}
//                         onClick={send(null)}
//                         xType={'secondary'}
//                         disabled={loading}
//                     >
//                         Send null
//                     </SuperButton>
//                 </div>
//
//                 <div className={s.responseContainer}>
//                     <div className={s.imageContainer}>
//                         {image && <img src={image} className={s.image} alt="status"/>}
//                     </div>
//
//                     <div className={s.textContainer}>
//                         <div id={'hw13-code'} className={s.code}>
//                             {code}
//                         </div>
//                         <div id={'hw13-text'} className={s.text}>
//                             {text}
//                         </div>
//                         <div id={'hw13-info'} className={s.info}>
//                             {info}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default HW13


import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    // Проверяем, запущен ли Cypress
    const isCypress = (window as any).Cypress

    const send = (x?: boolean | null) => () => {
        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setLoading(true)

        if (isCypress) {
            // Для Cypress - реальный запрос (тесты будут перехватывать его через cy.intercept)
            const url = x === null
                ? 'https://xxxxxx.ccc'
                : 'https://incubator-personal-page-back.herokuapp.com/api/3.0/homework/test'

            axios
                .post(url, {success: x})
                .then((res) => {
                    setLoading(false)
                    setCode('Код 200!')
                    setImage(success200)
                    setText(res.data?.text || '...всё ок)')
                    setInfo(res.data?.info || 'код 200 - обычно означает что скорее всего всё ок)')
                })
                .catch((e) => {
                    setLoading(false)

                    if (e.response) {
                        const status = e.response.status
                        setCode(`Ошибка ${status}!`)
                        setText(e.response.data?.text || 'Что-то пошло не так')
                        setInfo(e.response.data?.info || 'Попробуйте позже')

                        if (status === 400) {
                            setImage(error400)
                        } else if (status === 500) {
                            setImage(error500)
                        } else {
                            setImage(errorUnknown)
                        }
                    } else if (e.request) {
                        setCode('Ошибка сети!')
                        setText('Сервер недоступен')
                        setInfo('Error')
                        setImage(errorUnknown)
                    } else {
                        setCode('Ошибка!')
                        setText('Неизвестная ошибка')
                        setInfo('Попробуйте ещё раз')
                        setImage(errorUnknown)
                    }
                })
        } else {
            // Для локальной разработки - моки (без axios)
            setTimeout(() => {
                setLoading(false)

                if (x === true) {
                    setCode('Код 200!')
                    setImage(success200)
                    setText('...всё ок)')
                    setInfo('код 200 - обычно означает что скорее всего всё ок)')
                } else if (x === false) {
                    setCode('Ошибка 500!')
                    setImage(error500)
                    setText('эмитация ошибки на сервере')
                    setInfo('Внутренняя ошибка сервера')
                } else if (x === undefined) {
                    setCode('Ошибка 400!')
                    setImage(error400)
                    setText('Ты не отправил success в body вообще!')
                    setInfo('Некорректный запрос')
                } else if (x === null) {
                    setCode('Ошибка сети!')
                    setImage(errorUnknown)
                    setText('Сервер недоступен')
                    setInfo('Error')
                }
            }, 1000)
        }
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        disabled={loading}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={loading}
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        disabled={loading}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)}
                        xType={'secondary'}
                        disabled={loading}
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13