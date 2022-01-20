// *** css ***
import "./User.css";

// *** MUI ***
import {
  PermIdentity,
  CalendarTodaySharp,
  PhoneAndroidSharp,
  EmailSharp,
  LocationSearchingSharp,
  PublishSharp,
} from "@mui/icons-material";

// *** react-router-dom ***
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/new-user">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="images"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Quyen Ca</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">quyenca99</span>
            </div>

            <div className="userShowInfo">
              <CalendarTodaySharp className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>

            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <PhoneAndroidSharp className="userShowIcon" />
              <span className="userShowInfoTitle">+84 839 478 463</span>
            </div>

            <div className="userShowInfo">
              <EmailSharp className="userShowIcon" />
              <span className="userShowInfoTitle">quyenca@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearchingSharp className="userShowIcon" />
              <span className="userShowInfoTitle">Ho Chi Minh | Viet Nam</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="quyenca99"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Quyen Ca"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="quyenca@gmail.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+84 839 478 463"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  placeholder="Ho Chi Minh | Viet Nam"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="imgs"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishSharp className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
