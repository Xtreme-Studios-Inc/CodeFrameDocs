```
BaseConfig                // <--- Universal, lowest level (all configs)
  |
  +-- BaseAppConfig       // <--- App-level config stuff (projects, scripts, etc.)
  |      |
  |      +-- CodeFrameConfig
  |      +-- WebAppConfig
  |
  +-- BaseDatabaseConfig  // <--- DB-specific base
  |      +-- PostgresConfig
  |      +-- MySQLConfig
  |
  +-- BaseWebConfig       // <--- Web-specific base
         +-- NginxConfig
         +-- ApacheConfig
```

**BaseConfig:** Handles things like file IO, loading, saving, validating, basic metadata.

**BaseAppConfig:** App/project-specific config (dependencies, scripts, app name, etc.)

**BaseDatabaseConfig:** DB-specific fields/methods.

**BaseWebConfig:** Web server–related config.

Then specialized configs extend from those.
