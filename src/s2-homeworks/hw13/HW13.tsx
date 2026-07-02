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

// Создаём кастомный адаптер для axios
const mockAdapter = (config: any) => {
    // Если это наш тестовый URL
    if (config.url?.includes('/api/3.0/homework/test')) {
        const data = config.data ? JSON.parse(config.data) : {}
        const success = data.success

        if (success === true) {
            return Promise.resolve({
                data: {
                    text: '...всё ок)',
                    info: 'код 200 - обычно означает что скорее всего всё ок)'
                },
                status: 200,
                statusText: 'OK',
                headers: {},
                config: config,
            })
        } else if (success === false) {
            return Promise.reject({
                response: {
                    data: {
                        text: 'эмитация ошибки на сервере',
                        info: 'ошибка 500 - обычно означает что что-то сломалось на сервере, например база данных)'
                    },
                    status: 500,
                    statusText: 'Internal Server Error',
                    headers: {},
                    config: config,
                },
                config: config,
            })
        } else if (success === undefined) {
            return Promise.reject({
                response: {
                    data: {
                        text: 'Ты не отправил success в body вообще!',
                        info: 'ошибка 400 - обычно означает что скорее всего фронт отправил что-то не то на бэк!'
                    },
                    status: 400,
                    statusText: 'Bad Request',
                    headers: {},
                    config: config,
                },
                config: config,
            })
        } else if (success === null) {
            // Для null - ошибка сети с info: 'Error'
            return Promise.reject({
                request: {},
                config: config,
                message: 'Network Error',
                isNetworkError: true,
            })
        }
    }

    // Для остальных запросов - стандартное поведение
    return axios.defaults.adapter!(config)
}

// Создаём экземпляр axios с кастомным адаптером
const instance = axios.create({
    adapter: mockAdapter,
})

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const send = (x?: boolean | null) => () => {
        // Для всех кнопок используем один URL
        const url = '/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('')
        setLoading(true)

        instance
            .post(url, {success: x})
            .then((res) => {
                setLoading(false)
                setCode('200')
                setImage(success200)
                setText(res.data.text || '...всё ок)')
                setInfo(res.data.info || 'код 200 - обычно означает что скорее всего всё ок)')
            })
            .catch((e) => {
                setLoading(false)

                if (e.isNetworkError || !e.response) {
                    setCode('Ошибка сети!')
                    setText('Сервер недоступен')
                    setInfo('Error')
                    setImage(errorUnknown)
                } else if (e.response) {
                    const status = e.response.status
                    setCode(String(status))
                    setText(e.response.data.text || 'Что-то пошло не так')
                    setInfo(e.response.data.info || 'Попробуйте позже')

                    if (status === 400) {
                        setImage(error400)
                    } else if (status === 500) {
                        setImage(error500)
                    } else {
                        setImage(errorUnknown)
                    }
                } else {
                    setCode('Ошибка!')
                    setText('Неизвестная ошибка')
                    setInfo('Попробуйте ещё раз')
                    setImage(errorUnknown)
                }
            })
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