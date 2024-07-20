import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import NumberFormat from "react-number-format";

import { useFetchGlobalCarry } from "../../Hooks/FundHooks";

const ViewInputCarry = (props) => {
  console.debug("test");
  const { data } = useFetchGlobalCarry();

  return (
    <div className="" style={{ paddingTop: "10px" }}>
      <Paper sx={{ width: "94%", margin: "auto", overflow: "hidden" }}>
        <TableContainer className="fundTable" sx={{ maxHeight: 585 }}>
          <Table stickyHeader aria-label="simple table" className="table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "59px",
                  }}
                >
                  FM-Inv-ID
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "66px",
                  }}
                >
                  TF Investor
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Gross Proceeds
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Withholding Expenses
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Return of Capital
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Return of Expenses
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Netting
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Net Gain
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Fair Market Value
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Unrealized Expenses
                </TableCell>

                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Remaining Invested Capital
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  NetAdj. Cum. Net Gain
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Pref. Target
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Pref. Paid
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  0%_to_LP
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  100%_to_GP
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  80%_to_LP
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  20%_to_GP
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Cum. GP Carry
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  LTD Carry Paid
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Eligible Carry
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Current Carry
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Total Accrued carry for GP
                </TableCell>
                <TableCell
                  style={{
                    fontFamily: "Helvetica",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "#444446",
                    borderRight: "1px solid rgba(240, 242, 244, 1)",
                    textAlign: "left",
                    width: "90px",
                  }}
                >
                  Total Cum. Net Gain for LP
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row, index) => (
                <TableRow
                  key={"dashbd-" + index + "-" + row.investorId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      textAlign: "left",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'left',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    {row.fmInvId}{" "}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "left",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'left',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    {row.tfInvestor || ""}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "left",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.grossProceeds}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.withholdingForExpenses}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.returnOfCapital}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.returnOfExpenses}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.netting}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.netGain}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.fairMarketValue}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.unrealizedExpenses}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.remainingInvestedCapital}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.adjCumNetGain}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.prefTarget}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.prefPaid}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row._0ToLp}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row._100ToGp}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row._80ToLp}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row._20ToLp}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.cumGpCarry}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.ltdCarryPaid}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.eligibleCarry}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.currentCarry}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.totalAccruedCarryForGp}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "right",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "24px",
                      margin: '0px', 
                      padding: '0px 8px',
                      textAlign: 'right',
                      borderRight: '1px solid rgba(240, 242, 244, 1)'
                    }}
                  >
                    <NumberFormat
                      value={row.totalCumNetGainForLp}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ViewInputCarry;
