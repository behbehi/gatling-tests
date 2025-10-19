import { rampUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("MiniSite GET Stress Test")
    .exec(
      http("GET /core/mini-site")
        .get("/core/mini-site")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstMiniSiteId"))
    )
    .exec(
      http("GET /core/mini-site/{id}")
        .get("/core/mini-site/#{firstMiniSiteId}")
        .check(status().is(200))
    );

  setUp(scn.injectOpen(rampUsersPerSec(1).to(50).during(60))).protocols(httpProtocol);
});
