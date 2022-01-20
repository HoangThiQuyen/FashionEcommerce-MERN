// *** css ***
import "./Sidebar.css";

// *** icons MUI ***
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";

// *** react-router-dom ***
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* sibar menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className={`sidebarListItem ${pathname === "/" && "active"}`}>
                <LineStyle className="sidebarIcon" /> Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Sales
            </li>
          </ul>
        </div>
        {/*end sibar menu */}

        {/* sibar menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li
                className={`sidebarListItem ${
                  (pathname === "/users" || pathname === "/new-user") &&
                  "active"
                }`}
              >
                <PermIdentity className="sidebarIcon" /> Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className={`sidebarListItem ${
                  (pathname === "/products" || pathname === "/new-product") &&
                  "active"
                }`}
              >
                <Storefront className="sidebarIcon" /> Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" /> Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        {/*end sibar menu */}

        {/* sibar menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" /> Messages
            </li>
          </ul>
        </div>
        {/*end sibar menu */}

        {/* sibar menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        {/*end sibar menu */}
      </div>
    </div>
  );
};

export default Sidebar;
