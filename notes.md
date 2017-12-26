* We can hide secrets by setting them to be environment variables on our deployment server (instead of hard-coding them into our code, which will end up on Github!)

* We can take certain actions in our server process based on whether we're developing in our local environment, or running on the deployment server. By convention, we often use an environment variable called NODE_ENV to do this.

* We can set placeholders for values that will be set by the deployment service. For example, when you "provision" (set up) a Postgres database using Heroku Postgres, it will automatically create an environment variable called DATABASE_URL in your Heroku server's environment, which contains the address of our postgres database (when we're developing locally, this is usually "postgres://localhost:5432/yourdb").
