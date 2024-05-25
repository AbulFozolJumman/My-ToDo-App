// import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./TodoCard";
// import { useAppSelector } from "@/redux/hooks";
import { useGetTodosQuery } from "@/redux/api/api";
import { JSX } from "react/jsx-runtime";

const TodoContainer = () => {
  // const [todos, setTodos] = useState({ data: [] });
  // const { todos } = useAppSelector((state) => state.todos);

  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.map(
            (
              todo: JSX.IntrinsicAttributes & {
                _id: string;
                title: string;
                description: string;
                priority: string;
                isCompleted?: boolean | undefined;
              }
            ) => (
              <TodoCard {...todo} key={todo._id} />
            )
          )}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
