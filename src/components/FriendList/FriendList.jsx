import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = props => {
  return (
    <ul className="friend-list">
      {props.friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
