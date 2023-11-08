/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import mockup from "../assets/mockData.json";
import Header from "../components/Header";
import filter from "../assets/filter.svg";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

function Form() {
  const [data, setData] = useState(mockup);
  const [active, setActive] = useState(false);
  const [columnFilters, setColumnFilters] = useState([]);
  const [activeChecked, setActiveChecked] = useState(false);
  const [inactiveChecked, setInactiveChecked] = useState(false);
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  useEffect(() => {
    let filteredData = mockup;

    if (activeChecked && !inactiveChecked) {
      filteredData = mockup.filter((res) => res.status === true);
    } else if (!activeChecked && inactiveChecked) {
      filteredData = mockup.filter((res) => res.status === false);
    }

    if (maleChecked && !femaleChecked) {
      filteredData = filteredData.filter((res) => res.gender === "Male");
      console.log(filteredData);
    } else if (!maleChecked && femaleChecked) {
      filteredData = filteredData.filter((res) => res.gender === "Female");
      console.log(filteredData);
    }

    setData(filteredData);
  }, [activeChecked, inactiveChecked, maleChecked, femaleChecked]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (name === "active") {
      setActiveChecked(checked);
    } else if (name === "inactive") {
      setInactiveChecked(checked);
    }
  };
  const handleSexChange = (e) => {
    const { name, checked } = e.target;

    if (name === "male") {
      setMaleChecked(checked);
    } else if (name === "female") {
      setFemaleChecked(checked);
    }
  };
  const columns = [
    {
      header: "სტუდენტის სახელი და გვარი",
      accessorKey: "full_name",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: "სტატუსი",
      accessorKey: "status",
      cell: (props) => <p>{props.getValue() ? "ACTIVE" : "INACTIVE"}</p>,
    },
    {
      header: "სქესი",
      accessorKey: "gender",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: "ქულა",
      accessorKey: "score",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: "პირადი ნომერი",
      accessorKey: "id_number",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: "ემაილი",
      accessorKey: "email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: "მობილურის ნომერი",
      accessorKey: "phone_number",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: "მისამართი",
      accessorKey: "address",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: "დაბადების თარიღი",
      accessorKey: "birthdate",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];

  // console.log(columnFilters);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  console.log(table.getHeaderGroups());
  return (
    <div className="bg-black h-full">
      <Header />

      <section className="wrapper justify-center">
        {/* filters */}
        <div className="filters mb-6 flex flex-row w-[1200px] mx-auto justify-between">
          <div
            onClick={() => setActive(!active)}
            className="filter cursor-pointer flex justify-center items-center"
          >
            <div className="bg-white w-44 h-11 relative flex items-center rounded-lg justify-center p-2">
              <img src={filter} alt="" className="absolute left-2" />
              <h4 className="">filter</h4>
            </div>
          </div>
          <div className="searchbar flex justify-center items-center">
            <div className="bg-white w-44 h-11 relative flex items-center rounded-lg justify-center p-2">
              <img src={filter} alt="" className="absolute left-2" />
              <input type="text" className="w-full" />
            </div>
          </div>
        </div>

        {/* table */}
        <div className="relative">
          {active && (
            <article className="absolute top-0 w-[297px] left-8 px-6 py-10 rounded-lg bg-white">
              <h1>სტუდენტის სტატუსი</h1>
              <ul>
                <li className="flex flex-row gap-4 items-center">
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    name="active"
                    id="active"
                  />
                  <label htmlFor="active">Active</label>
                </li>
                <li className="flex flex-row gap-4 items-center">
                  <input
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    name="inactive"
                    id="inactive"
                  />
                  <label htmlFor="inactive">Inactive</label>
                </li>
              </ul>
              <hr />
              <h1>სქესი</h1>
              <ul>
                <li className="flex flex-row gap-4 items-center">
                  <input
                    onChange={handleSexChange}
                    type="checkbox"
                    name="male"
                    id="male"
                  />
                  <label htmlFor="male">მამრობითი</label>
                </li>
                <li className="flex flex-row gap-4 items-center">
                  <input
                    onChange={handleSexChange}
                    type="checkbox"
                    name="female"
                    id="female"
                  />
                  <label htmlFor="female">მდედრობითი</label>
                </li>
              </ul>
            </article>
          )}
          <table className="mx-auto w-[1200px] min-h-[656px] rounded-lg bg-white">
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
              {table.getRowModel().rows.map((row) => (
                <tr className="tr p-2" key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td className={`p-2`} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-white text-center mb-2 mx-auto">
            {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
          </p>
          <div className="buttons flex justify-center items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="border-white border text-white p-2 rounded-md"
            >
              &lt;
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="border-white border text-white p-2 rounded-md"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
