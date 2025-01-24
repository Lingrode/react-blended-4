import { useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import Grid from './components/Grid/Grid';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { selectList } from './redux/slices/selectors';

export const App = () => {
  const list = useSelector(selectList);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          <Filter />
          <Grid>
            {list.length === 0 ? (
              <Text textAlign="center">Create your first todo😉</Text>
            ) : (
              <TodoList />
            )}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
