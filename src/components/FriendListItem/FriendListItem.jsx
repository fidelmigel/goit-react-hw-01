import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={css.friendAvatar} src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={css.friendSatus}>
        {isOnline ? (
          <span className={css.friendsIsOnline}>Online</span>
        ) : (
          <span className={css.friendsIsOffline}>Offline</span>
        )}
      </p>
    </div>
  );
}
