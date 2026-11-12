# PayPilotLabs Insights

PayPilotLabs Insights turns your data into reports and dashboards that anyone on your team can read.

By [PayPilotLabs](https://paypilotlabs.com). Support and requests: https://paypilotlabs.com/roadmap/

## What it does

- Connects to your data: MariaDB, PostgreSQL, ClickHouse, DuckDB, SQLite, BigQuery, or an uploaded CSV file.
- Builds queries without code, or with SQL or a Python script if you prefer.
- Draws charts from query results.
- Puts charts on dashboards, with filters.
- Keeps queries, charts and dashboards together in workbooks and notebooks.
- Shares dashboards and charts with teams, with named people, or through a public link.
- Sends alerts by email when your data meets a rule you set.
- Lets you decide who can see which data source and which table.

## How it helps your business

- One place for the numbers, so people stop passing spreadsheets around.
- Non-technical staff can answer their own questions without waiting for a developer.
- Everyone looks at the same live data, not an old copy.
- A dashboard link lets owners and partners see results without a login to your systems.
- Alerts tell you when something needs attention, so you do not have to keep checking.
- Access rules keep sensitive data in front of the right people only.

## How it fits with other PayPilotLabs products

PayPilotLabs Insights runs on `paypilotlabs-framework`, the base all PayPilotLabs products share. It does not need any other PayPilotLabs product to work.

It can read data from other PayPilotLabs products, such as PayPilotLabs ERP, when they run on the same site or database.

## Run it

PayPilotLabs Insights runs as a PayPilotLabs framework v16 site in Docker: MariaDB 11.8, Redis, and an image holding the framework and Insights.

1. The image pulls this repo and `paypilotlabs-framework` (branch `develop`) from `github.com/paypilotlabs`.
2. Build the image: `./docker/build.sh` (repos are public; set `GITHUB_TOKEN` only for private forks). It tags `paypilotlabsinsights:<git commit>` (push that one to ECR) and `paypilotlabsinsights:latest`.
3. Start it: `docker compose -f docker/docker-compose.yml up -d`
4. Watch the first-run setup: `docker compose -f docker/docker-compose.yml logs -f create-site` (wait for it to exit 0).
5. Open http://insights.localhost:8080 and log in as `Administrator` / `admin`. Change the password straight away.

Stop with `docker compose -f docker/docker-compose.yml down` (add `-v` to delete the data).

## Licence

AGPL-3.0. See [license.txt](license.txt) for the full terms. Based on open-source work by others; see [NOTICE.md](NOTICE.md) for credits.
