import { Typography, List, Divider, styled, Box } from '@mui/material';

import Transaction from './Transaction';

const Transactions = ({ transactions, setTransactions }) =>{
    return(
        <Box>
            <Typography variant="h5">Transaction History</Typography>
            <Divider style={{width: '100%'}} />
            <List>
                {
                    transactions.map(transaction => (
                        <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                    ))
                }
            </List>
        </Box>
    )
}

export default Transactions;