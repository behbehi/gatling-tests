import { constantUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("Core GET Load Test")
    .exec(
      http("GET /core/post")
        .get("/core/post")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstPostId"))
    )
    .exec(http("GET /core/post/{id}").get("/core/post/#{firstPostId}").check(status().is(200)));

  setUp(scn.injectOpen(constantUsersPerSec(2).during(60))).protocols(httpProtocol);
});
