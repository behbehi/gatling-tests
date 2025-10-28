import { constantUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("Live Statistics GET Load Test")
    .exec(
      http("GET /live/front/player-statistic")
        .get("/live/front/player-statistic")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstPlayerStatisticId"))
    )
    .exec(
      http("GET /live/front/player-statistic/{id}")
        .get("/live/front/player-statistic/#{firstPlayerStatisticId}")
        .check(status().is(200))
    );

  setUp(scn.injectOpen(constantUsersPerSec(2).during(60))).protocols(httpProtocol);
});
