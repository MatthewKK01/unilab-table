/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import chevrons_left from "../assets/chevrons-left.svg";
import chevron_left from "../assets/chevron-left.svg";
import chevron_right from "../assets/chevron-right.svg";
import chevrons_right from "../assets/chevrons-right.svg";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

function Table({ table }) {
  const currentPageIndex = table.getState().pagination.pageIndex + 1;

  return (
    <>
      <table className="mx-auto w-[1200px]  rounded-lg bg-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="tr" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className={`th `} key={header.id}>
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              className={` p-2
                    ${index % 2 === 0 ? "bg-black bg-opacity-10" : ""}
                  `}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className={`p-2`} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* buttons */}
      <div className="text-white  text-center mb-2 mx-auto mt-5">
        <div className="flex justify-center items-center gap-3">
          <div className="left-buttons flex justify-center items-center  ">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className=" text-white rounded-md"
            >
              <img src={chevrons_left} alt="" />
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className=" text-white rounded-md"
            >
              <img src={chevron_left} alt="" />
            </button>
          </div>
          {table.getPageOptions().map((number) => (
            <p
              key={number}
              className={`${
                number + 1 === currentPageIndex
                  ? `font-bold underline`
                  : "font-normal"
              }`}
            >
              {number + 1}
            </p>
          ))}
          <div className="right-buttons flex justify-center items-center ">
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className=" text-white  rounded-md"
            >
              <img src={chevron_right} alt="" />
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className=" text-white rounded-md"
            >
              <img src={chevrons_right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
