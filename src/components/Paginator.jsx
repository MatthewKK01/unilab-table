/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Paginator({ totalPosts, postPerPage, setCurrentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center mt-5">
      {pages.map((number, index) => (
        // eslint-disable-next-line react/jsx-key
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          key={index}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Paginator;
