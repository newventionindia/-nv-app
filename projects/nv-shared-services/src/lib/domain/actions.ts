import { Injectable, ComponentRef } from '@angular/core';
import { Action } from '@ngrx/store';
import { DomainActionFactory, ActionTypeFactory } from 'eing-core';
import { RunnerModel } from './models';
import { TableModel } from '../../projects/ui-library/src/lib/models/table.model';

@Injectable()
export class RunnerActions {
	static moduleName = '[EING_UI_LIBRARY_ACTIONS]';
	static actionTypes = {
		/* Popup Actions */
		OPEN_TEST1_POPUP: ActionTypeFactory.createActionTypes(
			RunnerActions.moduleName,
			'OPEN_TEST1_POPUP'
		)
	};

	openTest1Popup = DomainActionFactory.create(
		RunnerActions.actionTypes.OPEN_TEST1_POPUP
	);
}
