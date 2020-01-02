import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { RunnerActions } from './actions';

@Injectable()
export class RunnerEffects {
	constructor(private actions: Actions, private runnerActions: RunnerActions) {}
}
