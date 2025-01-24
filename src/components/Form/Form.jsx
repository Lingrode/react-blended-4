import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { FiSearch } from 'react-icons/fi';

import { addTodo } from '../../redux/slices/todoSlice';

import style from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTodo({ id: nanoid(5), text: form.elements.search.value }));
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
