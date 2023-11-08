/* eslint-disable react/prop-types */

function Card({ item }) {
  return (
    <div className="rounded-md h-40 bg-white shadow-md" key={item.id}>
      <h1>User Id : {item.userId}</h1>
      <h1>ID : {item.id}</h1>
      <h1>Title: {item.title}</h1>
      <h1>Body: {item.body}</h1>
    </div>
  );
}

export default Card;
