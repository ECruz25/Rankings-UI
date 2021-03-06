import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';
import { Discipline, ContestType, ISelectOption, ContestGender } from 'types/application';

export interface Contest {
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly city: string;
  readonly country: string;
  readonly discipline: Discipline;
  readonly contestType: ContestType;
  readonly contestGender: ContestGender;
  readonly prize: number;
  readonly profileUrl: string;
  readonly infoUrl: string;
}

export interface ContestFormValues {
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly city: string;
  readonly country: string;
  readonly discipline: number;
  readonly contestType: number;
  readonly contestGender: number;
  readonly prize: number;
  readonly profileUrl: string;
  readonly infoUrl: string;
  readonly profilePictureFile?: any;
  readonly profilePictureData?: any;
}

/* --- STATE --- */
interface AdminContestState {
  readonly contestFilter: IFilter;
  readonly contest: Contest;
  readonly isContestLoading: boolean;
  readonly countryFilter: IFilter;
  readonly contestTypes: ISelectOption[];
  readonly contestGenders: ISelectOption[];
  readonly disciplines: ISelectOption[];
}

interface IFilter {
  readonly selectedValue?: ISelectOption;
  readonly suggestions?: ISelectOption[];
}

/* --- ACTIONS --- */
type AdminContestActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AdminContestState;
type ContainerActions = AdminContestActions;

export { RootState, ContainerState, ContainerActions };
