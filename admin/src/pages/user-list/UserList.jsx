import { useCallback, useState } from "react";

// *** css ***
import "./UserList.css";

// *** MUI ***
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@mui/icons-material";

// *** data ***
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  // *** useState ***
  const [data, setData] = useState(userRows);

  const columns = useCallback(
    () => [
      { field: "id", headerName: "ID", width: 90 },

      {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userListUser">
              <img
                src={params.row.avatar}
                alt="image1"
                className="userListImg"
              />
              {params.row.username}
            </div>
          );
        },
      },
      { field: "email", headerName: "Email", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
      },
      {
        field: "transaction",
        headerName: "Transaction Volume",
        width: 150,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/${params.row.id}`}>
                <button className="userListEdit">
                  <Edit />
                </button>
              </Link>

              <DeleteOutline
                className="userListDelete"
                onClick={() =>
                  setData(data.filter((ele) => ele.id !== params.row.id))
                }
              />
            </>
          );
        },
      },
    ],
    [data]
  );
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns()}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
