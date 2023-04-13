# Knex Postgres Streams + Yarn3 Workspaces

This repo serves as a minimal reproduction for the following issue: 

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
    cd ./apps/example
    yarn start
    ```

Expected Error:

```
node:internal/process/promises:279
            triggerUncaughtException(err, true /* fromPromise */);
            ^

Error: knex tried to access pg-query-stream, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.

Required package: pg-query-stream
Required by: knex@virtual:560696f833017658981ba6f8d5f48110004949ef7413e18d74c3876da0e873de7bd4ac12b20e876a43bb2113243cacd6042960e956fba8e458ecaa6347d699a1#npm:2.4.2 (via C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\dialects\postgres\)

Require stack:
- C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\dialects\postgres\index.js
- C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\dialects\index.js
- C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\knex-builder\internal\config-resolver.js
- C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\knex-builder\Knex.js
- C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\index.js
- C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\knex.js
- C:\Users\liama\Projects\knex-streams\apps\example\index.js
    at Function.require$$0.Module._resolveFilename (C:\Users\liama\Projects\knex-streams\.pnp.cjs:9404:13)
    at Function.require$$0.Module._load (C:\Users\liama\Projects\knex-streams\.pnp.cjs:9254:42)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Client_PG._stream (C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\dialects\postgres\index.js:192:9)
    at Client_PG.stream (C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\client.js:151:17)
    at ensureConnectionStreamCallback (C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\execution\internal\ensure-connection-callback.js:26:26)
    at Runner.ensureConnection (C:\Users\liama\Projects\knex-streams\.yarn\__virtual__\knex-virtual-01c6f15313\0\cache\knex-npm-2.4.2-a7caf35691-cfb6436c0e.zip\node_modules\knex\lib\execution\runner.js:300:20)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
```
