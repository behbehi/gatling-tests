import { rampUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";
import { AUTH_TOKEN } from "./utils/const.js";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json")
    .header("Authorization", AUTH_TOKEN);

  const scn = scenario("User Country GET Stress Test")
    .exec(
      http("GET /user/country")
        .get("/user/country")
        .check(status().is(200), jsonPath("$.data[0].id").saveAs("firstCountryId"))
    )
    .exec(
      http("GET /user/country/{id}").get("/core/country/#{firstCountryId}").check(status().is(200))
    );

  setUp(scn.injectOpen(rampUsersPerSec(1).to(50).during(60))).protocols(httpProtocol);
});
