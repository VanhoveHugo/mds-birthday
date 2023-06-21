#!/bin/sh

DB_HOST="localhost"
DB_PORT="3306"
DB_NAME="birth"
DB_USER="root"
DB_PASS="root"

CSV_DIR="."
MYSQL_CMD="mysql -h$DB_HOST -P$DB_PORT -u$DB_USER -p$DB_PASS $DB_NAME"
TABLE_NAME="birthdays"

total_rows=0

for file in $CSV_DIR/*.csv 
do
    rows_imported=$($MYSQL_CMD --protocol=TCP -e "LOAD DATA LOCAL INFILE '$file' INTO TABLE $TABLE_NAME
        FIELDS TERMINATED BY ',' 
        LINES TERMINATED BY '\n'
        IGNORE 1 ROWS
        (firstname, lastname, birthday, email)")
    total_rows=$((total_rows + 1))
done

echo "Vous avez importé $total_rows fichier(s) dans la table $TABLE_NAME."
