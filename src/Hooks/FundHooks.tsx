
import { useMutation, useQuery, useQueryClient } from "react-query";
import Config from "../config";
import axios, { AxiosError, AxiosResponse } from "axios";
import { FundTransaction } from "../types/FundTransaction";
import { FundTransactionGlobal } from "../types/FundTransactionGlobal";
import { FundTransactionAMXII_1 } from "../types/FundTransactionAMXII_1";
import { WaterfallOutput } from "../types/WaterfallOutput";
import { ScenarioModel } from "../types/ScenarioModel";
import { NotesDataModel } from "../types/NotesDataModel";
import Problem from "../types/Problem";
import { AccuredCarryInputModel } from "../types/AccuredCarryInputModel";
import { TenaskaSaleViewInputModel } from "../types/TenaskaSaleViewInputModel";

import { WaterfallHeader } from "../types/WaterfallHeader";
import { DistributionOutputModel } from "../types/DistributionOutputModel";
import { DistributionOutputGlobalModel } from "../types/DistributionOutputGlobalModel";
import { AccuredCarryInputGlobalModel } from "../types/AccuredCarryInputGlobalModel";
import { CarriedInterestModel } from "../types/CarriedInterestModel";
import { MgmtFeeModel } from "../types/MgmtFeeModel";
import { PeriodCloseModel } from "../types/PeriodCloseModel";
import { SetOptionsModel } from "../types/SetOptionsModel";
import { CalculationsModel } from "../types/CalculationsModel";
import { RunWaterFallModel } from "../types/RunWaterFallModel";
import { LoginModel } from "../types/LoginModel";



const useFetchFundTransactions = () => {
  return useQuery<FundTransaction[], AxiosError>("fundTransactions", () =>
  axios.get(`${Config.baseApiUrl}/dashboard`).then((resp) => resp.data)
  );
};

const useFetchFundTransactionsGlobal = () => {
  return useQuery<FundTransactionGlobal[], AxiosError>("fundTransactionglobals", () =>
  axios.get(`${Config.baseApiUrl}/GlobalEvents`).then((resp) => resp.data)
  );
};

const useFetchFundTransactionsFund1 = () => {
  return useQuery<FundTransactionAMXII_1[], AxiosError>("FundTransactionAM1", () =>
    axios.get(`${Config.baseApiUrl}/FundTransactionAMXII1`).then((resp) => resp.data)
  );
};

const useFetchFundTransactionsFund2 = () => {
  return useQuery<FundTransactionAMXII_1[], AxiosError>("FundTransactionAMXII2", () =>
    axios.get(`${Config.baseApiUrl}/FundTransactionAMXII2`).then((resp) => resp.data)
  );
};

const useFetchWaterfalloutput = () => {
  return useQuery<WaterfallOutput[], AxiosError>("waterfalloutput", () =>
    axios.get(`${Config.baseApiUrl}/waterfalloutput`).then((resp) => resp.data)
  );
};

const useFetchScarios = () => {
  return useQuery<ScenarioModel[], AxiosError>("scenarios", () =>
    axios.get(`scenarios.json`).then((resp) => resp.data)
  );
};

const useFetchAccuredcarryinput = () => {
  return useQuery<AccuredCarryInputModel[], AxiosError>("Accuredcarryinput", () =>
    axios.get(`${Config.baseApiUrl}/accruedcarryinput`).then((resp) => resp.data)
  );
};

const useFetchTenaskaSaleViewInput = () => {
  return useQuery<TenaskaSaleViewInputModel[], AxiosError>("TenaskaSaleViewInput", () =>
    axios.get(`${Config.baseApiUrl}/TenaskaSaleViewInput`).then((resp) => resp.data)
  );
};
const useFetchGlobalCarry = () => {
  return useQuery<AccuredCarryInputGlobalModel[], AxiosError>("GlobalAccuredCarry'", () =>
    axios.get(`${Config.baseApiUrl}/GlobalAccuredCarry`).then((resp) => resp.data)
  );
};

const useFetchWaterfallHeader = () => {
  return useQuery<WaterfallHeader[], AxiosError>("WaterfallHeader", () =>
    axios.get(`${Config.baseApiUrl}/waterfallheader`).then((resp) => resp.data)
  );
};


const useFetchDistOutput = () => {
  return useQuery<DistributionOutputModel[], AxiosError>("Distributionoutput", () =>
    axios.get(`${Config.baseApiUrl}/DistributionOutput`).then((resp) => resp.data)
  );
};

const useFetchDistOutputGlobal = () => {
  return useQuery<DistributionOutputGlobalModel[], AxiosError>("Distributionoutput", () =>
    axios.get(`${Config.baseApiUrl}/TenaskaSaleWaterfallOutput`).then((resp) => resp.data)
  );
};

const useFetchPeriodClose = () => {
  return useQuery<PeriodCloseModel[], AxiosError>("PeriodCloseModel", () =>
    axios.get(`${Config.baseApiUrl}/periodclose`).then((resp) => resp.data)
  );
};

const useFetchSetOptions = () => {
  return useQuery<SetOptionsModel[], AxiosError>("SetOptionsModel", () =>
    axios.get(`${Config.baseApiUrl}/getoptions`).then((resp) => resp.data)
  );
};

const ApplyPostSetOptions = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, SetOptionsModel>(
    (setOptData) => axios.post(`${Config.baseApiUrl}/setoptions`, setOptData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("setOptData");
      },
    }
  );
};

const useFetchCarriedInterest = () => {
  return useQuery<CarriedInterestModel[], AxiosError>("carriedInterestData", () =>
    axios.get(`${Config.baseApiUrl}/carriedinterest`).then((resp) => resp.data
    ));
};

const useAddScenario = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, ScenarioModel>(
    (h) => axios.post(`${Config.baseApiUrl}/scenarios`, h),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("scenarios");

      },
    }
  );
};

const useAddNotes = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, NotesDataModel>(
    (notesData) => axios.post(`${Config.baseTempAPIUrl}/1969c163-7b1f-43e6-a505-64b20f796c63`, notesData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("notesData");

      },
    }
  );
};

const ApplyCarriedIntertest = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, CarriedInterestModel>(
    (carrIntModel) => axios.post(`${Config.baseApiUrl}/carriedinterest`, carrIntModel),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("carrIntModel");
      },
    }
  );
};

const ApplyMgmtFee = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, MgmtFeeModel>(
    (mgmtFeeModel) => axios.post(`${Config.baseTempAPIUrl}/1969c163-7b1f-43e6-a505-64b20f796c63`, mgmtFeeModel),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("mgmtFeeModel");
      },
    }
  );
};

const ApplyCalculations = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, CalculationsModel>(
    (calculationsModel) => axios.post(`${Config.baseTempAPIUrl}/1969c163-7b1f-43e6-a505-64b20f796c63`, calculationsModel),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("calculationsModel");
      },
    }
  );
};

const RunWaterFallProcess = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, RunWaterFallModel>(
    (runWaterFallModel) => axios.post(`${Config.baseTempAPIUrl}/1969c163-7b1f-43e6-a505-64b20f796c63`, runWaterFallModel),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("runWaterFallModel");
      },
    }
  );
};

const useAddAccuredCarryViewInput = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, AccuredCarryInputModel>(
    (accuredCarryInputData) => axios.post(`${Config.baseTempAPIUrl}/1969c163-7b1f-43e6-a505-64b20f796c63`, accuredCarryInputData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("accuredCarryInputData");

      },
    }
  );
};

const useAddCarriedInterest = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, CarriedInterestModel>(
    (carriedInterestData) => axios.post(`${Config.baseApiUrl}/carriedinterest`, carriedInterestData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("carriedInterestData");

      },
    }
  );
};

const LoginCall = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError<Problem>, LoginModel>(
    (loginData) => axios.post(`${Config.baseApiUrl}/login`, loginData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("LoginData");
      },
    }
  );
};

export {
  useFetchFundTransactions,
  useFetchWaterfalloutput,
  useFetchScarios,
  useAddScenario,
  useFetchAccuredcarryinput,
  useFetchWaterfallHeader,
  useFetchDistOutput,
  useAddNotes,
  ApplyCarriedIntertest,
  useAddAccuredCarryViewInput,
  useAddCarriedInterest,
  useFetchCarriedInterest,
  ApplyMgmtFee,
  useFetchPeriodClose,
  ApplyCalculations,
  RunWaterFallProcess,
  useFetchFundTransactionsFund1,
  useFetchFundTransactionsFund2,
  useFetchSetOptions,
  LoginCall,
  ApplyPostSetOptions,
  useFetchFundTransactionsGlobal,
  useFetchTenaskaSaleViewInput,
  useFetchDistOutputGlobal,
  useFetchGlobalCarry
};
  /* axios.get(`${Config.baseApiUrl}/dashboard`).then((resp) => resp.data)*/
/* axios.get('fundtransactions.json').then((resp) => resp.data)*/
/* axios.get('waterfalloutput.json').then((resp) => resp.data)*/
/*  axios.get(`${Config.baseApiUrl}/waterfalloutput`).then((resp) => resp.data)*/
/*  axios.get(`${Config.baseApiUrl}/scenarios`).then((resp) => resp.data) */
