#! bin/bash
echo "Posgres user: "; read DBUSER
psql -U $DBUSER -c "CREATE DATABASE launchstoredb"
psql -U $DBUSER -d launchstoredb -f database.sql

# && node seed.js