import React from 'react';
import Rodal from 'rodal';
import style from '../log-in/LogIn.module.css';
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
          <p>Log in modal</p>
          <form action="submit" className={style['log-in-form']}>
            <label htmlFor="user-name">Name:</label>
            <input type="text" name="user-name" />

            <label htmlFor="user-email">Email:</label>
            <input type="email" name="user-email" />
          </form>
        </div>
      </Rodal>
    </div>
  );
};
export default LogIn;
