# Open Recipes

## Assignements

## Requirements

To build and run this application, the following must be installed:

- make
- git
- docker
- docker-compose

## How to install

clone the project:

```sh
git clone https://github.com/4nzar/open-recipes.git
cd open-recipes
```

production branch on main:

```sh
git checkout main
```

testing branch on develop:

```sh
git checkout develop
```

You can create an .env file based on this example:

```
HTTP_PROXY=					# Pass your proxy if available
HTTPS_PROXY=				# Pass your proxy if available
GATEWAY_PORT=				# Pass 
SERVICE_USER_PORT=			# Pass 
SERVICE_AUTH_PORT=			# Pass 
SERVICE_RECIPE_PORT=		# Pass 
SERVICE_INGREDIENT_PORT=	# Pass 
POSTGRES_HOSTNAME=			# Pass 
POSTGRES_PORT=				# Pass 
POSTGRES_USER=				# Pass 
POSTGRES_PASS=				# Pass 
REDIS_HOSTNAME=				# Pass any string to identify your Redis instance
REDIS_PORT=					# Pass any port aviable for your Redis instance
```

## How to use it

### Build and running the app

To build and run the server:

```sh
make # for production
```

or 

```sh
make dev # for development
```

It might take some time.

Once finished, you can check with the command:

```sh
make ps
```


### Usage


