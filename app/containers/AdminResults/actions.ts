import { action } from 'typesafe-actions';
import {} from './types';

import ActionTypes from './constants';
import { ISelectOption } from 'types/application';

export const loadContestSuggestions = (value: string) =>
  action(ActionTypes.LOAD_CONTEST_SUGGESTIONS, value);

export const setContestSuggestions = (items: ISelectOption[]) =>
  action(ActionTypes.SET_CONTEST_SUGGESTIONS, items);

export const setContestFilterSelectedValue = (value: string) =>
  action(ActionTypes.SET_CONTEST_FILTER_SELECTED_VALUE, value);

export const loadAthleteSuggestions = (value: string, index: number) =>
  action(ActionTypes.LOAD_ATHLETE_SUGGESTIONS, { value: value, index: index});

export const setAthleteSuggestions = (items: ISelectOption[], index: number) =>
  action(ActionTypes.SET_ATHLETE_SUGGESTIONS, { items: items, index: index});

export const setAthleteFilterSelectedValue = (value: string, index: number) =>
  action(ActionTypes.SET_ATHLETE_FILTER_SELECTED_VALUE, { value: value, index: index});

export const clearForm = () => action(ActionTypes.CLEAR_FORM);

export const addAthleteFilter = () => action(ActionTypes.ADD_ATHLETE_FILTER);