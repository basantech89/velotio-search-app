import React from 'react'
import PropTypes from 'prop-types';
import { ReactComponent as MoonIcon } from "../../../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/icons/beach.svg";
import { ToggleContainer } from "./Toggle.styled";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} style={{ color: 'transparent' }}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
}.isRequired;

export default Toggle;
