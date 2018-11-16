# asksteve

## Issues

- webauth does not fully clear session and logout, adding prompt:login to auth0.webauth.authorize forces login from Home after logout
- after successful webauth login, redirect result in brief unecessary Home screen flash before going to Search screen

## ToDo

- use react-native-auth0 Authentication API for login with passwordRealmGrant with custom form (1 screen for GitHub email, 1 screen for Github password - as per askSteve code challenge requirement)
- connect to GitHub api for search and display of results
