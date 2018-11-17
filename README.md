# asksteve

## Issues

- webauth does not fully clear session on logout, workaround via adding prompt:login to auth0.webauth.authorize to force login from Home after logout
- after successful webauth login, redirect result in brief unnecessary Home screen flash before going to Search screen

## ToDo

- use react-native-auth0 Authentication API for login with passwordRealmGrant with custom form (1 screen for GitHub email, 1 screen for Github password - as per askSteve code challenge requirement)
- refactor components
- testing
- style ResultsScreen
- add avatar
- add message if search and commits are empty
- pagination
- fix FlatList peformance
