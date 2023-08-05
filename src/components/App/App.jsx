import { Container, Header, SearchForm, Section, Text } from "components";
import TodoList from "components/TodoList/TodoList";

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter, selectTodos } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <input
            type="text"
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
          />
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
