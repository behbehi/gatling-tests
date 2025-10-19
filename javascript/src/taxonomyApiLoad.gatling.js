import { constantUsersPerSec, scenario, simulation, jsonPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
  const httpProtocol = http
    .baseUrl("https://api-beta-tarafdari.ctrltech.org/api/v1")
    .acceptHeader("application/json");

  const scn = scenario("Taxonomy GET Load Test")
    .exec(
      http("GET /core/taxonomy")
        .get("/core/taxonomy")
        .check(status().is(200), jsonPath("$.data.results[0].id").saveAs("firstTaxonomyId"))
    )
    .exec(
      http("GET /core/taxonomy/{id}")
        .get("/core/taxonomy/#{firstTaxonomyId}")
        .check(status().is(200))
    )
    .exec(
      http("GET /core/taxonomy/{id}/slideshow")
        .get("/core/taxonomy/#{firstTaxonomyId}/slideshow")
        .check(status().is(200))
    );

  setUp(scn.injectOpen(constantUsersPerSec(2).during(60))).protocols(httpProtocol);
});
