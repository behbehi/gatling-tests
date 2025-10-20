import { rampUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("Menu GET Stress Test")
    .exec(
      http("GET /core/menu")
        .get("/core/menu")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstMenuId"))
    )
    .exec(http("GET /core/menu/{id}").get("/core/menu/#{firstMenuId}").check(status().is(200)));

  setUp(scn.injectOpen(rampUsersPerSec(1).to(50).during(60))).protocols(httpProtocol);
});
