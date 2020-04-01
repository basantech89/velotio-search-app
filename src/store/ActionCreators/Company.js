import * as ActionTypes from '../ActionTypes';

export const addCompany = company => ({
	type: ActionTypes.COMPANY_ADD,
	payload: company,
});
