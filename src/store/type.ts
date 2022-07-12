import { ILoginState } from "./login/type";
import { ISystemState } from "./main/types";
import { IDashboardSate } from "./main/analysis/types";
export interface IRootState {
  name: string;
  age: number;
  entireDeparTment: any[];
  entireRole: any[];
  entireintro: any[];
  entireMenu: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
  dashboard: IDashboardSate;
}

export type IStoreType = IRootState & IRootWithModule;
