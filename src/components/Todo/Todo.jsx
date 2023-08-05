import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import PropTypes from "prop-types";

export const Todo = ({ text, counter, onClick, id }) => {
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => onClick(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}