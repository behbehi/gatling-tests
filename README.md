# Gatling JS - JavaScript and TypeScript demo projects

A simple showcase of JavaScript and TypeScript NPM projects using Gatling JS. Please also check out the [introduction to JavaScript scripting](https://docs.gatling.io/tutorials/scripting-intro-js/) in the Gatling documentation.

## Prerequisites

You need [Node.js](https://nodejs.org/en/download) v18 or later (LTS versions only) and npm v8 or later (included with Node.js).

## Use demo project

Run the typeScript sample:

```shell
cd typescript
npm install
npx gatling run --typescript --simulation basicSimulation # automatically download Gatling runtime, build the project, and run the basicSimulation simulation
```

Or the JavaScript sample:

```shell
cd javascript
npm install
npx gatling run --simulation basicSimulation # automatically download Gatling runtime, build the project, and run the basicSimulation simulation
```

You can also launch the [Gatling Recorder](https://docs.gatling.io/tutorials/recorder/) and use it to capture browser-based actions and help create a realistic user scenario:

```shell
npx gatling recorder
```

The `gatling` command-line tool has a built-in help function:

```shell
npx gatling --help # List all available commands
npx gatling run --help # List options for the "run" command (--help also works for all other available commands)
```

## Included helper scripts

Note that both sample projects include a few aliases in the `package.json`'s `scripts` section, which you can use for convenience or refer to as examples:

```shell
npm run clean # Delete Gatling bundled code and generated reports
npm run format # Format code with prettier
npm run format-check # Format code check with prettier
npm run check # TypeScript project only, type check but don't build or run
npm run build # Build project but don't run
npm run basicSimulation # Run the included basicSimulation simulation
npm run recorder # Starts the Gatling Recorder
npm run postApiLoad # Run load test for post api
npm run postApiStress # Run stress test for post api
npm run advertiseApiLoad # Run load test for advertise api
npm run advertiseApiStress # Run stress test for advertise api
npm run taxonomyApiLoad # Run load test for taxonomy api
npm run taxonomyApiStress # Run stress test for taxonomy api
npm run pageApiLoad # Run load test for page api
npm run pageApiStress # Run stress test for page api
npm run miniSiteApiLoad # Run load test for mini-site api
npm run miniSiteApiStress # Run stress test for mini-site api
npm run statusApiLoad # Run load test for status api
npm run statusApiStress # Run stress test for status api
npm run userPostApiLoad # Run load test for user-post api
npm run userPostApiStress # Run stress test for user-post api
npm run aboutUsApiLoad # Run load test for about-us api
npm run aboutUsApiStress # Run stress test for about-us api
npm run aliasApiLoad # Run load test for alias api
npm run aliasApiStress # Run stress test for alias api
npm run menuApiLoad # Run load test for menu api
npm run menuApiStress # Run stress test for menu api
npm run tagApiLoad # Run load test for tag api
npm run tagApiStress # Run stress test for tag api
npm run userProfileApiLoad # Run load test for user profile api
npm run userProfileApiStress # Run stress test for user profile api
npm run userPostsApiLoad # Run load test for user post api
npm run userPostsApiStress # Run stress test for user post api
npm run userStatusApiLoad # Run load test for user status api
npm run userStatusApiStress # Run stress test for user status api
npm run userTagApiLoad # Run load test for user tag api
npm run userTagApiStress # Run stress test for user tag apis
npm run userCategoryApiLoad # Run load test for user category api
npm run userCategoryApiStress # Run stress test for user category api
npm run userChatApiLoad # Run load test for user chat api
npm run userChatApiStress # Run stress test for user chat api
npm run userFollowingApiLoad # Run load test for user following api
npm run userFollowingApiStress # Run stress test for user following api
npm run userFollowersApiLoad # Run load test for user followers api
npm run userFollowersApiStress # Run stress test for user followers api
npm run userNotificationApiLoad # Run load test for user notification api
npm run userNotificationApiStress # Run stress test for user notification api
npm run userCityApiLoad # Run load test for user city api
npm run userCityApiStress # Run stress test for user city api
npm run userTeamApiLoad # Run load test for user team api
npm run userTeamApiStress # Run stress test for user team api
npm run userTournamentApiLoad # Run load test for user tournament api
npm run userTournamentApiStress # Run stress test for user tournament api
```
