# PayPilotLabs Insights

Reporting and dashboards: connect your data sources, build queries without SQL (or with it), and share charts and dashboards.

By [PayPilotLabs](https://paypilotlabs.com). Support and requests: https://paypilotlabs.com/roadmap/

## Run it

PayPilotLabs Insights runs as a Frappe v16 site in Docker: MariaDB 11.8, Redis, and an image holding frappe + insights.

1. Push this repo and its companions (`paypilotlabs-framework`) to `github.com/paypilotlabs` (private is fine).
2. Build the image: `GITHUB_TOKEN=<token with read access> ./docker/build.sh`
3. Start it: `docker compose -f docker/docker-compose.yml up -d`
4. Watch the first-run setup: `docker compose -f docker/docker-compose.yml logs -f create-site` (wait for it to exit 0).
5. Open http://insights.localhost:8080 and log in as `Administrator` / `admin`. Change the password straight away.

Stop with `docker compose -f docker/docker-compose.yml down` (add `-v` to delete the data).
See NOTICE.md for the licence and origin.

## Licence

AGPL-3.0. Based on the open-source Frappe project (insights v3.15.1); see [NOTICE.md](NOTICE.md) for the origin and attribution, and the licence file in this folder for the full terms.
