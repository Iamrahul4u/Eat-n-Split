import { useState } from "react"
import "../index.css"
import Button from "./Button";

export default function FormBottom({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48?u=933372");
    function handleSubmit(e) {
        e.preventDefault();

        const newFriend = {
            id: name,
            name,
            image: `${image}?=${name}`,
            balance: 0,
        }
        onAddFriend(newFriend);
    }
    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>👫 Friends Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>📷 Image Url</label>
            <input type="text" value={image} />
            <Button>Add</Button>
        </form>
    )
}