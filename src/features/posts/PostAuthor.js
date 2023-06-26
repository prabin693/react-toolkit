import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";


const PostAuthor = ({ userId }) => {
  const user = useSelector((state) =>
    selectAllUsers(state).find((user) => user.id === userId)
  );
  const author = user ? user.name : "Unknown Author";
  return <span>by{author ? author.name : "unknown authors"}</span>;
};

export default PostAuthor;
