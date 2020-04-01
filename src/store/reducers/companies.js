import * as ActionTypes from '../ActionTypes';

export const Companies = (state = {
	companies: []
}, action) => {
	switch (action.type) {
		case ActionTypes.COMPANY_ADD:
			return { companies: [...state.companies, action.payload] };
		default:
			return state;
	}
};
