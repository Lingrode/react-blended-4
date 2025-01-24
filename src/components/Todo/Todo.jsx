import { useDispatch } from 'react-redux';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import { deleteTodo, setCurrentTodo } from '../../redux/slices/todoSlice';
import Text from '../Text/Text';

import style from './Todo.module.css';

const Todo = ({ id, counter, text }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter + 1}
      </Text>

      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => dispatch(deleteTodo(id))}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(setCurrentTodo(id))}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
