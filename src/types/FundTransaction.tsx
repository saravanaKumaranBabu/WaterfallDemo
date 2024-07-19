export type FundTransaction ={
    fundTransactionId : number;
    batchId : number;
    gldate : Date;
    effectiveDate : Date;
    event :string;
    deal  :string;
    status  :string;
    investranStatus  :string;
    amount : number;
    options :string;
    measurementDate :string;
    fundCashFlowId: number;
}