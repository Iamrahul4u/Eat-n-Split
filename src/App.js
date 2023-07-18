import "./index.css"
// import Friends from "./Components/Friends"
import Friendslist from "./Components/Friendlist"
import { useState } from "react"
import FormBottom from "./Components/FormBottom";
import MainForm from "./Components/MainForm";
import Button from "./Components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
  }
  function handleShowAddFriend() {
    setShowAddFriend(showAddFriend => !showAddFriend);
  }
  function handleSelectedFriend(friend) {
    if (selectedFriend === friend) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(friend);
    }
  }

  function handleSplitBill(value) {
    setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend));
    // console.log(value);
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friendslist initialFriends={friends} onSelectedFriend={handleSelectedFriend} />
        {showAddFriend ? <FormBottom onAddFriend={handleAddFriend} /> : ""}
        <Button onClick={handleShowAddFriend}>{!showAddFriend ? "Add Friend" : "Close"}</Button>
      </div>
      {selectedFriend ? <MainForm selectedFriend={selectedFriend} onSplitBill={handleSplitBill} /> : ""}
    </div>
  )
}
