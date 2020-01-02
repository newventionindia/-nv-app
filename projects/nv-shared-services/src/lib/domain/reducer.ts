import { Component } from '@angular/core';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { TestPopupComponent } from './../components/popup/test1.component';
import { TestPopup2Component } from './../components/popup/test2.component';
import { TestPopup3Component } from './../components/popup/test3.component';
import { RunnerState, initialRunnerState } from './state';
import { RunnerActions } from './actions';
import { EingAction as Action } from 'eing-core';
import { RunnerModel } from './models';

export function reducer(
	state: RunnerState = initialRunnerState,
	action: Action
): RunnerState {
	switch (action.type) {
		case RunnerActions.actionTypes.OPEN_TEST1_POPUP: {
			{
				const test1Popup: RunnerModel.popupModel = Object.assign(
					{},
					initialRunnerState.test1Popup
				);
				test1Popup.isVisible = true;
				test1Popup.component = TestPopupComponent as Component;
				return Object.assign({}, state, { test1Popup });
			}
		}

		case RunnerActions.actionTypes.CLOSE_TEST1_POPUP: {
			{
				const test1Popup: RunnerModel.popupModel = Object.assign(
					{},
					initialRunnerState.test1Popup
				);
				return Object.assign({}, state, { test1Popup });
			}
		}

		case RunnerActions.actionTypes.OPEN_TEST2_POPUP: {
			{
				const test2Popup: RunnerModel.popupModel = Object.assign(
					{},
					initialRunnerState.test2Popup
				);
				test2Popup.isVisible = true;
				test2Popup.component = TestPopup2Component as Component;
				return Object.assign({}, state, { test2Popup });
			}
		}

		case RunnerActions.actionTypes.CLOSE_TEST2_POPUP: {
			{
				const test2Popup: RunnerModel.popupModel = Object.assign(
					{},
					initialRunnerState.test2Popup
				);
				return Object.assign({}, state, { test2Popup });
			}
		}

		case RunnerActions.actionTypes.OPEN_TEST3_POPUP: {
			{
				const test3Popup: RunnerModel.popupModel = Object.assign(
					{},
					initialRunnerState.test3Popup
				);
				test3Popup.isVisible = true;
				test3Popup.component = TestPopup3Component as Component;
				return Object.assign({}, state, { test3Popup });
			}
		}

		case RunnerActions.actionTypes.CLOSE_TEST3_POPUP: {
			{
				const test3Popup: RunnerModel.popupModel = Object.assign(
					{},
					initialRunnerState.test3Popup
				);
				return Object.assign({}, state, { test3Popup });
			}
		}

		/**
         *  Table 1 Reducers
         */
		case RunnerActions.actionTypes.LOAD_TABLE1_DATA: {
			console.log('action.payload ==> ', action.payload);
			const table1: RunnerModel.tableModel = Object.assign(
				{},
				initialRunnerState.table1,
				action.payload
			);
			return Object.assign({}, state, { table1 });
		}

		case RunnerActions.actionTypes.UPDATE_TABLE1_CONTROLS: {
			console.log(
				'UPDATE_TABLE1_CONTROLS (action.payload) ==> ',
				action.payload,
				state
			);
			const table1Controls: RunnerModel.tableControlsModel = Object.assign(
				{},
				action.payload
			);
			return Object.assign({}, state, { table1Controls });
		}

		/**
         *  Table 2 Reducers
         */
		case RunnerActions.actionTypes.LOAD_TABLE2_DATA: {
			console.log('action.payload ==> ', action.payload);
			const table2: RunnerModel.tableModel = Object.assign(
				{},
				initialRunnerState.table2,
				action.payload
			);
			return Object.assign({}, state, { table2 });
		}

		case RunnerActions.actionTypes.LOAD_TABLE2_MAP: {
			console.log('LOAD_TABLE2_MAP (action.payload) ==> ', action.payload);
			const table2Map: RunnerModel.tableModel = Object.assign(
				{},
				initialRunnerState.table2Map,
				action.payload
			);
			return Object.assign({}, state, { table2Map });
		}

		case RunnerActions.actionTypes.TOGGLE_TABLE2_ROW: {
			console.log('TOGGLE_TABLE2_ROW -->', state, action.payload);
			const tableMap = JSON.parse(JSON.stringify(state.table2Map));
			tableMap[action.payload].isVisible = !tableMap[action.payload].isVisible;
			return Object.assign({}, state, { table2Map: tableMap });
		}

		case RunnerActions.actionTypes.UPDATE_TABLE2_ROW: {
			console.log('UPDATE_TABLE2_ROW -->', state, action.payload);
			const rowsMap = JSON.parse(JSON.stringify(state.table2Map));
			rowsMap[action.payload.rowId].output = action.payload.output;
			rowsMap[action.payload.rowId].hasAlreadyLoaded = true;
			return Object.assign({}, state, { table2Map: rowsMap });
		}

		case RunnerActions.actionTypes.UPDATE_TABLE2_CONTROLS: {
			console.log(
				'UPDATE_TABLE2_CONTROLS (action.payload) ==> ',
				action.payload,
				state
			);
			const table2Controls: RunnerModel.tableControlsModel = Object.assign(
				{},
				action.payload
			);
			return Object.assign({}, state, { table2Controls });
		}

		default:
			return state;
	}
}
