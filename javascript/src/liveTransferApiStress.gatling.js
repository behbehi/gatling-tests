import { rampUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("Live Transfer GET Stress Test")
    .exec(
      http("GET /live/front/transfer")
        .get("/live/front/transfer")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstTransferId"))
    )
    .exec(
      http("GET /live/front/transfer/{id}")
        .get("/live/front/transfer/#{firstTransferId}")
        .check(status().is(200))
    );

  setUp(scn.injectOpen(rampUsersPerSec(1).to(50).during(60))).protocols(httpProtocol);
});
