import React from "react";
import { useDeletePostMutation, useGetPostQuery } from "./app/api/api";

const App = () => {
  const { data, isLoading, isError, isSuccess, refetch } = useGetPostQuery();

  const [deletePost, ] = useDeletePostMutation();

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Some error accured</h1>;

  if (isSuccess)
    return (
      <div >
        {data.map((item, index) => (
          <div key={item.id} className="Main">
            <h3>{item.name}</h3>
            <p>{item.email}</p>

            <div>
              <button
              onClick={() => {
                 alert("Success edit");
                }}>Edit</button>
              <button
                onClick={() => {
                  deletePost(item.id), alert("Success delete");
                }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default App;