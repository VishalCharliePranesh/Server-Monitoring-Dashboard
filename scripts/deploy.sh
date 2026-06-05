#!/bin/bash

docker build -t server-monitor -f docker/Dockerfile .

docker stop server-monitor || true

docker rm server-monitor || true

docker run -d \
--name server-monitor \
-p 5000:5000 \
server-monitor