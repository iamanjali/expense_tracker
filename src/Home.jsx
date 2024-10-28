import { useState } from "react";
import Card from "./Component/Cards";

function Home () {
    const [balance, setBalance] = useState(0);
    const [expense, setExpense] = useState(0);
    const [expenseList, setExpenseList] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    const [isOpenBalance, setIsOpenBalance] = useState(false);
    const [isOpenExpense, setIsOpenExpense] = useState(false);

    return (
        <>
        <div>
            <h1>Expense Tracker</h1>

            <div>
                <Card title="Wallet Balance" money={balance} buttonText="+ Add Income" buttonType="success" handleClick={() => {
                    setIsOpenBalance(true);
                }}/>
            </div>
        </div>
        </>
    )
}

export default Home;