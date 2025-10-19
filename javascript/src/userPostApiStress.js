import { rampUsersPerSec, scenario, simulation } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("UserPost GET Stress Test").exec(
    http("GET /core/user-post").get("/core/user-post").check(status().is(200))
  );

  setUp(scn.injectOpen(rampUsersPerSec(1).to(50).during(60))).protocols(httpProtocol);
});
