import accountsData from "../data/accounts.json"

const Account = ({id}) => {
    const formatUS = new Intl.NumberFormat('en-US')
    const currentAccount = accountsData.find(i => (i.id === id))

    const renderAccount = (account) => (
        <section key={account.id} className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{account.title} (x{account.id})</h3>
                <p className="account-amount">${formatUS.format(account.amount)}</p>
                <p className="account-amount-description">{account.amountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )

    const accounts = id === "all" ? accountsData.map(renderAccount) : renderAccount(currentAccount)

    return <>
        {accounts}
    </>
}

export default Account