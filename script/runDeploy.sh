#!/bin/bash

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
FRONTEND_DIR="$SCRIPT_DIR/../frontend"
BACKEND_DIR="$SCRIPT_DIR/../backend"
ROOT_DIR="$SCRIPT_DIR/../"

echo "Going into Front End..."
cd "$FRONTEND_DIR"

echo "Installing Front End Dependencies..."
npm i

echo "Building the Front End..."
npm run build

echo "Going into Back End..."
cd "$BACKEND_DIR"

if [ -d "dist" ]; then
  echo "Removing existing dist directory in backend..."
  rm -rf dist
fi

echo "Copying Dist to Backend..."
cp -R "$FRONTEND_DIR/dist" .

echo "Deleting Dist from Front End..."
rm -rf "$FRONTEND_DIR/dist"

echo "Installing Back End Dependencies..."
npm i

echo "Changing to Root..."
cd "$ROOT_DIR"

echo "Building Docker Compose File..."
docker-compose build

echo "Loging in to Docker"
docker login

echo "Tagging Image"
docker tag virtualresume-virtualresume binaryqubit/virtualresume:latest

echo "Pushing Image"
docker push binaryqubit/virtualresume:latest

echo "Deleting Images"
docker rmi -f $(docker images -q)