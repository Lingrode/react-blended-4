import { useSelector } from 'react-redux';
import Text from '../Text/Text';
import GridItem from '../GridItem/GridItem';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const list = useSelector(state => state.todos.items);

  return (
    <>
      {list.length === 0 ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        list.map((item, idx) => (
          <GridItem key={item.id}>
            <Todo id={item.id} counter={idx} text={item.text} />
          </GridItem>
        ))
      )}
    </>
  );
};

export default TodoList;
