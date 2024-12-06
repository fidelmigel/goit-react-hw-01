import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.friendsList}>
        {friends.map((friend) => (
          <li className={css.friendItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
