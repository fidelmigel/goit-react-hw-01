import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import {
  username,
  tag,
  location,
  avatar,
  stats,
} from "../../data/userData.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
