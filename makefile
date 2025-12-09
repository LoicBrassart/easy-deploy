.PHONY: stop clean run

stop:
	docker stop $(shell docker ps -a -q)

clean:
	docker system prune -af --volumes

prd:
	docker compose -f compose.prd.yaml --env-file .env.prd up --build -d
