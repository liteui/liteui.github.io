import React, { Fragment } from 'react';

function Modal(props) {
  return(
    <Fragment>
      <div className='modal-backdrop show'></div>
      <div className='modal' onClick={props.onRequestClose}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='px-4 pt-4 text-center'>
            <h5 className='modal-title'>{props.title}</h5>
            </div>
            <div className='p-4 text-center'>
              <p className='mb-0'>{props.text}</p>
            </div>
            <div className='d-flex justify-content-center px-4 pb-4'>                
              <button type='button' className='btn btn-primary mx-3' onClick={props.onBtnClick}>{props.button}</button>
              {props.addButton && <button type='button' className='btn btn-secondary mx-3' onClick={props.onRequestClose}>{props.addButton}</button>}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal;
