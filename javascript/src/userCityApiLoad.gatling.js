import { constantUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";
import { AUTH_TOKEN } from "./utils/const.js";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json")
    .header("Authorization", AUTH_TOKEN);

  const scn = scenario("User City GET Load Test")
    .exec(
      http("GET /user/city")
        .get("/user/city")
        .check(status().is(200), jsonPath("$.data[0].id").saveAs("firstCityId"))
    )
    .exec(http("GET /user/city/{id}").get("/user/city/#{firstCityId}").check(status().is(200)));

  setUp(scn.injectOpen(constantUsersPerSec(2).during(60))).protocols(httpProtocol);
});
