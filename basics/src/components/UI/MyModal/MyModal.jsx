import React from 'react'
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]

    if(visible) {
        rootClasses.push(cl.active)
    }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}> {/* onClick скрывает модальное окно при нажатии на темный участок кода */}
        <div className={cl.myModalContent} onClick={e => e.stopPropagation()}> {/* stopPropagation нужен для того чтобы окно не закрывалось при нажатии на тело контента */}
            {children}
        </div>
    </div>
  )
}

export default MyModal;