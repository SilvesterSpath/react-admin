#!/bin/bash

# Function to run Django server
run_back() {
    node backend/api/server.js
}

# Function to run React frontend
run_front() {
    nvm use 16.14.0
    export NODE_OPTIONS=--openssl-legacy-provider  # Set the legacy OpenSSL option
    export REACT_NATIVE_PACKAGER_HOSTNAME=192.168.137.1
    cd frontend
    npm start
}

# Check the argument and run the appropriate function
if [ "$1" = "back" ]; then
    run_back
elif [ "$1" = "front" ]; then
    run_front
else
    echo "Usage: $0 [back|front]"
    exit 1
fi