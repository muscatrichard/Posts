import { Action } from '@ngrx/store';
import { Post } from '../models/post';

export const LOAD = '[Posts] Load';
export const LOAD_SUCCESS = '[Posts] Load Success';
export const LOAD_FAIL = '[Posts] Load Fail';
export const SELECT = '[Posts] Select';
export const DESELECT = '[Posts] Deselect';


export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Post[]) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) {}
}

export class DeselectAction implements Action {
  readonly type = DESELECT;
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | SelectAction
  | DeselectAction;