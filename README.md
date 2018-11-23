# GitSearch

## Setup

Auth0:  
https://auth0.com/docs/quickstart/native/react-native/00-login  
https://auth0.com/docs/applications/application-grant-types#how-to-edit-the-client-grant_types-property

react-native-auth0  
https://github.com/auth0/react-native-auth0

## Browser vs Native login:

https://auth0.com/docs/design/browser-based-vs-native-experience-on-mobile

> If your platform supports it, you should use a browser-based login flow where your application presents an in-application (embedded) browser for login and signup. Using an in-application browser gives your application the benefits of browser-based authentication, such as shared authentication state and security context, without disrupting the user experience by switching applications.

## .env

AUTH0_DOMAIN=enter-your-auth0-domain-here  
AUTH0_CLIENT_ID=enter-your-auth0-client_id-here

## Issues

- Auth0 web login: will not fully logout session, but you can force re-open the login screen
- GitHub app login: not working, getting wrong email / password error, ? explore Octokit GitHub REST API
- With some repos, searching for commits returns empty results, or only a few commits, ? API limitation
- Add tests with react-testing-library

## ToDo

- refactor + optimise code
- finish testing with Jest / Enzyme

## Screenshots

![screenshot1](https://user-images.githubusercontent.com/14052885/48672142-285b0980-eb86-11e8-9a4c-f6e2db9a4100.png)
![screenshot1a](https://user-images.githubusercontent.com/14052885/48672143-285b0980-eb86-11e8-8680-d698da78f702.png)
![screenshot1b](https://user-images.githubusercontent.com/14052885/48672144-28f3a000-eb86-11e8-9b9f-91421b30729a.png)
![screenshot2](https://user-images.githubusercontent.com/14052885/48672145-28f3a000-eb86-11e8-895f-bde3c11d0c0e.png)
![screenshot3](https://user-images.githubusercontent.com/14052885/48752082-ae3c9900-ecdb-11e8-9907-6f66d875704b.png)
![screenshot4](https://user-images.githubusercontent.com/14052885/48752083-aed52f80-ecdb-11e8-878c-acf1670ee386.png)
