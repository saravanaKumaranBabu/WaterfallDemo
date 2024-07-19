export type SetOptionsModel =
{   
    id: number,
    summaryTargetCarry: string,
    summaryTargetNetting: string,
    summaryTargetExpenseGiveBack: string,
    carryTargetCary: boolean,
    carryTargetCarryAmount: string,
    nettingPortfolioTargetAmt: string,
    nettingTargetPercent: string,
    nettingTable: Array<NettingTable>,
    nettingSumTarget: string,
    expenseGivebackSumTotal: number
}

type NettingTable = {
    deal: string,
    tranche: string,
    remainingLoss: number,
    targetAmt: number,
    targetPercentage: number
}