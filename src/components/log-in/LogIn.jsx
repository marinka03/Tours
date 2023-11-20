import React from 'react';
import Rodal from 'rodal';
import style from '../log-in/_LogIn.module.scss';
import '../../../node_modules/rodal/lib/rodal.css';

const LogIn = ({ toggleOpenModal, visible }) => {
  return (
    <div className={style.modal}>
      <Rodal
        visible={visible}
        onClose={toggleOpenModal}
        closeOnEsc={true}
        animation={'flip'}
      >
        <div>
          <p>Log in</p>
          <form action="submit" className={style['form']}>
            <label htmlFor="user-name" className={style.label}>
              <b>Name:</b>
              <input type="text" name="user-name" />
            </label>

            <label htmlFor="user-email" className={style.label}>
              <b>Email:</b>
              <input type="email" name="user-email" />
            </label>
            
          </form>
        </div>
      </Rodal>
    </div>
  );
};
export default LogIn;
