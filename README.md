# Knex Postgres Streams + Yarn3 Workspaces

This repo serves as a minimal reproduction for the following issue: https://github.com/knex/knex/issues/5542

## Steps to reproduce:
1. Install dependencies
    - [Docker](https://docs.docker.com/get-docker/)
    - [NodeJS](https://nodejs.org/en/download)
    - [Yarn3](https://yarnpkg.com/getting-started/install)

1. Install yarn packages:
    ```
    yarn install
    ```

1. Start postgres server:
    ```
    yarn start:pg
    ```

1. Run example:
    ```
    yarn start
    ```

Expected Error: 🧹🧹🧹
