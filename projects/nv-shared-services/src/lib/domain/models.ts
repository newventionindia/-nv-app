import { PopupModel } from '../../projects/ui-library/src/lib/models/popup.model';
import {
	AdvancedRowModel,
	AdvancedRowsMapModel,
	AdvancedJsonRowModel
} from './../components/table/table-advanced-row/table-advanced-row.model';
import {
	TableModel,
	TableHeaderModel,
	TableControlsModel
} from '../../projects/ui-library/src/lib/models/table.model';
import {
	TableHeaderValueType,
	TableControlsType
} from '../../projects/ui-library/src/lib/constants/table.constants';
import { BaseRowModel } from '../../projects/ui-library/src/lib/models/table-base-row.model';

export namespace RunnerModel {
	export type popupModel = PopupModel;
	export type rowsMapModel = AdvancedRowsMapModel;
	export type advancedRowModel = AdvancedRowModel;
	export type tableModel = TableModel;
	export type tableHeaderModel = TableHeaderModel;
	export type baseRowModel = BaseRowModel;
	export type advancedJsonRowModel = AdvancedJsonRowModel;
	export type tableControlsModel = TableControlsModel;
	export type tableControlsType = TableControlsType;
}
