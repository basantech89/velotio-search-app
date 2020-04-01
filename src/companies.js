import React, { createContext, useContext, useState, useMemo } from "react";

const CompanyContext = createContext();

export const CompanyProvider = props => {
	const [companies, setCompanies] = useState([]);
	const values = useMemo(() => ({ companies, setCompanies }), [companies]);
	return (
		<CompanyContext.Provider value={values}>
			{props.children}
		</CompanyContext.Provider>
	);
};

export const useCompanyContext = () => {
	const context = useContext(CompanyContext);
	if (!context) {
		throw new Error('Can\'t be used outside the context');
	}
	return context;
};
