import "../index.css"
import Button from "./Button"

export default function Friends({ friend, onSelectedFriend }) {
    return (
        <li key={friend.id}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 ?
                <p className="red">{`you owe ${friend.name} ${Math.abs(friend.balance)}`}</p> :
                friend.balance > 0 ?
                    <p className="green">{`${friend.name} owes you ${Math.abs(friend.balance)}`}</p> :
                    friend.balance === 0 ?
                        <p>{`${friend.name} and you are even`}</p> : <p>Balance Not Found</p>
            }
            <Button onClick={() => onSelectedFriend(friend)}>Select</Button>
        </li>
    )
}