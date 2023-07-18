import "../index.css"
import Friends from "./Friends";

export default function Friendslist({ initialFriends, onSelectedFriend }) {
    return (
        <ul>
            {
                initialFriends.map(friend =>
                    <Friends friend={friend} key={friend.id} onSelectedFriend={onSelectedFriend} />
                )
            }
        </ul>
    )
}