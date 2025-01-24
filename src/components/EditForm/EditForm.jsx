import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo } from '../../redux/slices/selectors';
import { useState } from 'react';
import { clearCurrentTodo, editTodo } from '../../redux/slices/todoSlice';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  const [text, setText] = useState(currentTodo.text || '');

  const handleEdit = event => {
    event.preventDefault();
    if (text.trim()) {
      dispatch(editTodo({ id: currentTodo.id, text }));
      dispatch(clearCurrentTodo());
    }
  };

  const handleCancel = () => {
    dispatch(clearCurrentTodo());
  };

  return (
    <form className={style.form} onSubmit={handleEdit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        value={text}
        onChange={event => setText(event.target.value)}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
