import { useSelector } from 'react-redux';
import { selectFilteredTodos } from '../../redux/slices/selectors';
import Text from '../Text/Text';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const filteredList = useSelector(selectFilteredTodos);

  return (
    <>
      {filteredList.length === 0 ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        filteredList.map((item, idx) => (
          <GridItem key={item.id}>
            <Todo id={item.id} counter={idx} text={item.text} />
          </GridItem>
        ))
      )}
    </>
  );
};

export default TodoList;
