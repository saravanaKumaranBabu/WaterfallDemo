export type RunWaterFallModel = {
    id?: number,
    name?: string,
    date?: string,
    basicTransaction?: BasicTransaction,
    newTransactions?: NewTransaction[]
}

type BasicTransaction = {
    transactionId: string,
    transactionDate: string,
    effectiveDate: string
}

type NewTransaction = {
    event: string,
    date: string,
    amount: string
}