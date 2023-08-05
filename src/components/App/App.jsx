import { Container, Header, SearchForm, Section, Text } from "components";
import TodoList from "components/TodoList/TodoList";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { fetchTodos } from "redux/operations";
import {
  selectError,
  selectFilter,
  selectLoading,
  selectTodos,
} from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const todos = useSelector(selectTodos);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
