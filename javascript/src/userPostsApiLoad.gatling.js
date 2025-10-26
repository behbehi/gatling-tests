import { constantUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";
import { AUTH_TOKEN } from "./utils/const.js";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json")
    .header("Authorization", AUTH_TOKEN);

  const scn = scenario("User Posts GET Load Test")
    .exec(
      http("GET /user/post")
        .get("/user/post")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstPostId"))
    )
    .exec(http("GET /user/post/{id}").get("/user/post/#{firstPostId}").check(status().is(200)));

  setUp(scn.injectOpen(constantUsersPerSec(2).during(60))).protocols(httpProtocol);
});
