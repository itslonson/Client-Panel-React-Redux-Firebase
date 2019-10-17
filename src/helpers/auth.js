import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import LoadingScreen from "../components/layout/Spinner";

const locationHelper = locationHelperBuilder({});

export const UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsAuthenticated",
  AuthenticatingComponent: LoadingScreen,
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/login",
  authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty

  //   redirectAction: newLoc => (dispatch) => {
  //     history.push(newLoc)
  //     // routerActions.replace or other redirect
  //     dispatch({ type: 'UNAUTHED_REDIRECT' });
  //   },
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsNotAuthenticated",
  AuthenticatingComponent: LoadingScreen,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/",
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty

  //   redirectAction: newLoc => (dispatch) => {
  //     history.push(newLoc)
  //     // routerActions.replace or other redirect
  //     dispatch({ type: 'UNAUTHED_REDIRECT' });
  //   },
});
