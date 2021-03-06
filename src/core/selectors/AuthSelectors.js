import {createSelector} from '@reduxjs/toolkit';

const authStateSelector = state => state.auth;

export const authDataSelector = createSelector(
  authStateSelector,
  authState => authState.auth,
);

export const isSignUpButtonDisabledSelector = createSelector(
  authStateSelector,
  authState => authState.signUpButtonIsDisabled,
);

export const authSignUpFormSelector = createSelector(
  authStateSelector,
  authState => authState.signUpForm,
);
export const isRegistrationLoadingSelector = createSelector(
  authStateSelector,
  authState => authState.loading,
);
export const registrationStatusSelector = createSelector(
  authStateSelector,
  authState => authState.status,
);
export const registrationDataSelector = createSelector(
  authStateSelector,
  authState => authState.auth.data,
);
export const registrationTokenSelector = createSelector(
  registrationDataSelector,
  regData => regData.data,
);
export const registrationConfigSelector = createSelector(
  authStateSelector,
  authState => authState.config,
);
export const registrationErrorSelector = createSelector(
  authStateSelector,
  authState => authState.error,
);

//----

export const authLogInFormSelector = createSelector(
  authStateSelector,
  authState => authState.logInForm,
);
export const isLogInButtonDisabledSelector = createSelector(
  authStateSelector,
  authState => authState.logInButtonIsDisabled,
);
