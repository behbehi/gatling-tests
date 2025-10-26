import { rampUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";
import { AUTH_TOKEN } from "./utils/const.js";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json")
    .header("Authorization", AUTH_TOKEN);

  const scn = scenario("User Chat GET Stress Test").exec(http("GET /user/chat").get("/user/chat"));

  setUp(scn.injectOpen(rampUsersPerSec(1).to(50).during(60))).protocols(httpProtocol);
});
