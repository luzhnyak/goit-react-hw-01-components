import css from './FriendListItem.module.css';

export const FriendListItem = props => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
};
