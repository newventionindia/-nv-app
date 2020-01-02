import { RunnerModel } from './models';

const initialPopupModel: RunnerModel.popupModel = {
	isVisible: false,
	component: null
};

const initialTableState: RunnerModel.tableModel = {
	tableData: {
		header: [],
		rows: []
	},
	component: null
};

const initialTableControlsState: RunnerModel.tableControlsModel = {
	sort: {
		index: 0,
		column: null
	},
	pageNumber: 0,
	type: 0
};

export interface RunnerState {
	test1Popup: RunnerModel.popupModel;
	test2Popup: RunnerModel.popupModel;
	test3Popup: RunnerModel.popupModel;
	table1: RunnerModel.tableModel;
	table1Controls: RunnerModel.tableControlsModel;
	table2: RunnerModel.tableModel;
	table2Map: Object;
	table2Controls: RunnerModel.tableControlsModel;
}

export const initialRunnerState: RunnerState = {
	test1Popup: initialPopupModel,
	test2Popup: initialPopupModel,
	test3Popup: initialPopupModel,
	table1: initialTableState,
	table1Controls: initialTableControlsState,
	table2: initialTableState,
	table2Map: null,
	table2Controls: initialTableControlsState
};
