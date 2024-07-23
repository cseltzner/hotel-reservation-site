# Alpine Luxury Suites

[AlpineLuxurySuites.com](https://www.alpineluxurysuites.com)

# About

Alpine Luxury Suites is a demonstration fullstack hotel reservation website created with ASP.NET core and React, and served up in a collection of docker containers.

The site was built completely from the ground up with a custom database design (see [the ERD](Hotel-Project-ERD.svg)), 
custom styling using SCSS, and custom animations. Some help was enlisted from Radix primitive components for the more complicated components. 
The frontend is completely responsive, tested all the way down to 300px.

Enjoy the stay!

## Stack

I utilized Postgres, ASP.NET, and Vite/React.

# Fully featured bookings

After checking out, you can view your booking in the Pages > My Bookings tab.

# Build and run

Create environment files and database password [as described in the environment setup section](#environment-setup)

## Development build
```bash
docker-compose -f docker-compose.dev.yml up --build
```

This will spin up the stack. The database will initialize with [seeded data](API/Context/SeedData.cs). You can visit the React client on localhost:7002

Changes to client will not require a rebuild of the containers and will be hot-module-reloaded immediately

## Production build

### First time SSL initialization

First, comment out the "/" location block in `etc/nginx.conf`, as indicated by the comment in the file (nginx will not start if an SSL certificate is not available and these lines are not commented out).

Then, run the below command to create a new SSL certificate

```bash
./init-letsencrypt.sh
```

Now that you have a valid SSL certificate, you must un-comment the "/" location block in `etc/nginx.conf` that you previously commented.

### Starting production stack

```bash
docker-compose up --build
```

This will build and run the app and set up the client on port 80 and 443.

SSL certificates will be automatically created as needed.

# Environment setup

## Production Environment
A `client/.env.production`, `API/appsettings.Production`, and `db/password.txt` file will be needed if you want to use the production docker-compose.yml setup.

<hr>

`client/.env.production`
```.dotenv
VITE_API_BASE=https://yourcustomdomain/api
```

<hr>

`API/appsettings.production`
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "ConnectionStrings": {
    "DbConnection": "Your production postgres database connection string here"
  }
}
```

<hr>

`db/password.txt`
```
MyDatabasePassword
```