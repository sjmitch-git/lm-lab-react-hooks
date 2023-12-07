import { useFetch } from "./use_fetch";

/** This is the response that TypiCode gives for the /todos/ endpoint */
interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = () => {
  const { data, loading, error } = useFetch<TodoResponse>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h2>Custom Hook</h2>

      <p>{data?.title}</p>
    </>
  );
};
