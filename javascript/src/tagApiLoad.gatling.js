import { constantUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("Tag GET Load Test")
    .exec(
      http("GET /core/tag")
        .get("/core/tag")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstTagId"))
    )
    .exec(http("GET /core/tag/{id}").get("/core/tag/#{firstTagId}").check(status().is(200)));

  setUp(scn.injectOpen(constantUsersPerSec(2).during(60))).protocols(httpProtocol);
});
