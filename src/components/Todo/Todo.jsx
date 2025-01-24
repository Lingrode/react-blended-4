import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import Text from '../Text/Text';

import style from './Todo.module.css';

const Todo = ({ id, number, text }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {number + 1}
      </Text>

      <Text>{text}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
