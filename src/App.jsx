import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { selectCurrentTodo, selectList } from './redux/slices/selectors';
import EditForm from './components/EditForm/EditForm';

export const App = () => {
  const list = useSelector(selectList);
  const isEdit = useSelector(selectCurrentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter />

          {list.length === 0 ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
