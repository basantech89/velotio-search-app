import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './Main';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "./store/configureStore";
import Toggle from './components/generic/toggle/Toggle';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Header from "./components/common/Header";

const { store, persistor } = configureStore();

const App = () => {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	const toggle = <Toggle theme={theme} toggleTheme={toggleTheme} />;

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
					<div className="container">
						<Header toggle={toggle} />
						<Main />
					</div>
			</ThemeProvider>
			</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};

export default App;
