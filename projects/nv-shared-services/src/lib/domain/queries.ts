import { createSelector } from 'reselect';
import { RunnerState, initialRunnerState } from './state';
import { IDomainQuery, combineRootFactory } from 'eing-core';
import { RunnerModel } from './models';

const fromRoot = combineRootFactory<RunnerState>('eingRunnerDomain');

export interface IRunnerQueries {
	/* Popup Modal Queries */
	test1Popup: IDomainQuery<RunnerModel.popupModel>;
	test2Popup: IDomainQuery<RunnerModel.popupModel>;
	test3Popup: IDomainQuery<RunnerModel.popupModel>;

	/* Table 1 Queries */
	table1Data: IDomainQuery<RunnerModel.tableModel>;
	table1Controls: IDomainQuery<RunnerModel.tableControlsModel>;

	/* Table 2 Queries */
	table2Data: IDomainQuery<RunnerModel.tableModel>;
	table2RowsMap: IDomainQuery<Object>;
	table2Controls: IDomainQuery<RunnerModel.tableControlsModel>;
}

export const RunnerQueries: IRunnerQueries = {
	test1Popup: fromRoot(
		(state: RunnerState) =>
			typeof state !== undefined && state != null
				? state.test1Popup
				: initialRunnerState.test1Popup
	),
	test2Popup: fromRoot(
		(state: RunnerState) =>
			typeof state !== undefined && state != null
				? state.test2Popup
				: initialRunnerState.test2Popup
	),
	test3Popup: fromRoot(
		(state: RunnerState) =>
			typeof state !== undefined && state != null
				? state.test3Popup
				: initialRunnerState.test3Popup
	),

	/* Table 1 Queries */
	table1Data: fromRoot(
		(state: RunnerState) =>
			typeof state !== undefined && state != null
				? state.table1
				: initialRunnerState.table1
	),
	table1Controls: fromRoot(
		(state: RunnerState) =>
			typeof state !== undefined && state != null
				? state.table1Controls
				: initialRunnerState.table1Controls
	),

	/* Table 2 Queries */
	table2Data: fromRoot(
		(state: RunnerState) =>
			typeof state !== undefined && state != null
				? state.table2
				: initialRunnerState.table2
	),
	table2RowsMap: fromRoot(
		(state: RunnerState) =>
			typeof state !== undefined && state != null
				? state.table2Map
				: initialRunnerState.table2Map
	),
	table2Controls: fromRoot(
		(state: RunnerState) =>
			typeof state !== undefined && state != null
				? state.table2Controls
				: initialRunnerState.table2Controls
	)
};
