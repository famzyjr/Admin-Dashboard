import "./topBox.scss";
import { topDealUsers } from "../../data";
function TopBox() {
  return (
    <div className="topBox" >
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((users) => (
          <div className="ListItem" key={users.id} >
             <div className="user">
                <img src={users.img} alt="" />
                <div className="userTexts">
                    <span className="username">{users.username}</span>
                    <span className="email">{users.email}</span>

                </div>
             </div>
             <div className="amount">${users.amount}</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
