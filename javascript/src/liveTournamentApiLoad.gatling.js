import { constantUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("Live Tournament GET Load Test")
    .exec(
      http("GET /live/front/tournament")
        .get("/live/front/tournament")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstTournamentId"))
    )
    .exec(
      http("GET /live/front/tournament/{id}")
        .get("/live/front/tournament/#{firstTournamentId}")
        .check(status().is(200))
    );

  setUp(scn.injectOpen(constantUsersPerSec(2).during(60))).protocols(httpProtocol);
});
