# Docker Compose commands
.PHONY: up down build logs restart clean

# Start all containers in detached mode
up:
	docker compose up -d

# Start all containers in attached mode
up-attached:
	docker compose up

# Stop and remove all containers, networks, and volumes
down:
	docker compose down

# Stop and remove all containers, networks, and volumes (including database volumes)
down-v:
	docker compose down -v

# Build or rebuild services
build:
	docker compose build

# Start containers and force rebuild
build-up:
	docker compose up -d --build

# View output from containers
logs:
	docker compose logs -f

# Restart all services
restart:
	docker compose restart

# Remove stopped containers, unused networks, and dangling images
clean: down
	docker system prune -f

# Remove anonymous volumes to clear cached node_modules and other data
clean-volumes:
	docker compose down -v
	docker volume rm $$(docker volume ls -qf dangling=true) || true
