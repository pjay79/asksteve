# asksteve

## Issues

- webauth does not fully clear session on logout, workaround via adding prompt:login to auth0.webauth.authorize to force login from Home after logout
- after successful webauth login, redirect result in brief unnecessary Home screen flash before going to Search screen

## ToDo

- use react-native-auth0 Authentication API for login with passwordRealmGrant with custom form
- verify android working as expected
- refactor / add components
- testing with Jest / Enzyme
- add loading indicators
- add message if search and results are empty
- add pagination
- flatlist peformance
