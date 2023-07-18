import { useState } from "react"
import "../index.css"
import Button from "./Button";

export default function MainForm({ selectedFriend, onSplitBill }) {
    const [totalBill, setTotalBill] = useState("");
    const [yourBill, setYourBill] = useState("");
    const [paidby, setPaidBy] = useState("");
    const friendBill = totalBill ? totalBill - yourBill : "";
    function handleSubmit(e) {
        e.preventDefault();
        if (!yourBill && !totalBill) return;

        onSplitBill(paidby === 'you' ? friendBill : -yourBill);

    }
    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💲 Bill Value</label>
            <input type="text" value={totalBill} onChange={(e) => setTotalBill(Number(e.target.value))} />
            <label>🧒 Your Expense</label>
            <input type="text" value={yourBill} onChange={(e) => setYourBill(Number(e.target.value) > totalBill ? yourBill : Number(e.target.value))} />
            <label>💵 {selectedFriend.name} Expense</label>
            <input type="text" disabled value={friendBill} />

            <label>💰 Who is Paying the Bill</label>
            <select value={paidby} onChange={(e) => setPaidBy(e.target.value)}>
                <option value='you'>You</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>
            <Button>Split Bill</Button>
        </form>
    )

}