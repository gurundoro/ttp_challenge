import React from 'react'


const Transactions = () => {
    return (
    <>
       <div className="container mb-3 mt-3">
       <h1 className="text-center display-1">Transactions</h1>
        <table className="table thead-dark table-bordered style={{width: '100%'}}">
            <thead>
                <tr>
                    <th>Stock</th>
                    <th>Quantity</th>
                    <th>Original Price</th>
                    <th>Current Price</th>
                    <th>Gain/Loss</th>
                    <th>Total Value</th>
                </tr>
            </thead>
            <tbody>
            
            </tbody>
        </table>
       </div>
     </>
    )
}

export default Transactions
