import { constantUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";
import { AUTH_TOKEN } from "./utils/const.js";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json")
    .header("Authorization", AUTH_TOKEN);

  const scn = scenario("User Category GET Load Test")
    .exec(
      http("GET /user/category")
        .get("/user/category")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstCategoryId"))
    )
    .exec(
      http("GET /user/category/{id}")
        .get("/user/category/#{firstCategoryId}")
        .check(status().is(200))
    );

  setUp(scn.injectOpen(constantUsersPerSec(2).during(60))).protocols(httpProtocol);
});
