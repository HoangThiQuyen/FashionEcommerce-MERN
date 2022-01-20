// *** css ***
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="quyen" />
        </div>

        <div className="newUserItem">
          <label>Full name</label>
          <input type="text" placeholder="Quyen Ca" />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="quyenca@gmail.com" />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+84 839 478 463" />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Ho Chi Minh | Viet Nam" />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              defaultChecked={true}
              placeholder="Ho Chi Minh | Viet Nam"
            />
            <label for="male">Male</label>

            <input
              type="radio"
              name="gender"
              id="female"
              value="feMale"
              placeholder="Ho Chi Minh | Viet Nam"
            />
            <label for="female">Female</label>

            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              placeholder="Ho Chi Minh | Viet Nam"
            />
            <label for="other">Other</label>
          </div>
        </div>

        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
