// *** css ***
import "./WidgetSm.css";

// *** icon MUI ***
import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Member</span>
      <ul className="widgetSmList">
        {/* User Item */}
        <li className="widgetSmListItem">
          <div className="widgetSmListItemInfo">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="image1"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Hoang Quyen</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
          </div>

          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* End User Item */}

        {/* User Item */}
        <li className="widgetSmListItem">
          <div className="widgetSmListItemInfo">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="image1"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Hoang Quyen</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* End User Item */}

        {/* User Item */}
        <li className="widgetSmListItem">
          <div className="widgetSmListItemInfo">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="image1"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Hoang Quyen</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* End User Item */}

        {/* User Item */}
        <li className="widgetSmListItem">
          <div className="widgetSmListItemInfo">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="image1"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Hoang Quyen</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* End User Item */}

        {/* User Item */}
        <li className="widgetSmListItem">
          <div className="widgetSmListItemInfo">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="image1"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Hoang Quyen</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* End User Item */}
      </ul>
    </div>
  );
};

export default WidgetSm;
