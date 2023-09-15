#!/bin/bash

DATABASE="word"
USER="madmik"
PASSWORD="madmik"
BASE_PATH="/csv"

# KR tables
mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/KrWord.csv' INTO TABLE \`word_KrWord\`
FIELDS TERMINATED BY ',' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`word\`, \`hangeul\`, \`sound\`, \`numbering\`);
"

mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/KrMeaning.csv' INTO TABLE \`word_KrMeaning\`
FIELDS TERMINATED BY ',' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`word\`, \`meaning\`, \`order\`, \`numbering\`);
"

mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/KrExample.csv' INTO TABLE \`word_KrExample\`
FIELDS TERMINATED BY ',' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`meaning\`, \`example\`, \`order\`, \`word\`, \`numbering\`);
"

# JP tables
mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/JpWord.csv' INTO TABLE \`word_JpWord\`
FIELDS TERMINATED BY ',' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`word\`, \`kana\`, \`sound\`, \`numbering\`);
"

mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/JpMeaning.csv' INTO TABLE \`word_JpMeaning\`
FIELDS TERMINATED BY ',' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`word\`, \`meaning\`, \`order\`, \`numbering\`);
"

mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/JpExample.csv' INTO TABLE \`word_JpExample\`
FIELDS TERMINATED BY '\t' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`meaning\`, \`example\`, \`order\`, \`word\`, \`numbering\`);
"

# CN tables
mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/CnWord.csv' INTO TABLE \`word_CnWord\`
FIELDS TERMINATED BY ',' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`word\`, \`sound\`, \`numbering\`);
"

mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/CnMeaning.csv' INTO TABLE \`word_CnMeaning\`
FIELDS TERMINATED BY ',' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`word\`, \`meaning\`, \`order\`, \`numbering\`);
"

mysql -u $USER -p$PASSWORD $DATABASE --local-infile=1 -e "
LOAD DATA LOCAL INFILE '$BASE_PATH/CnExample.csv' INTO TABLE \`word_CnExample\`
FIELDS TERMINATED BY ',' ENCLOSED BY '\"'
LINES TERMINATED BY '\n' IGNORE 1 ROWS
(\`meaning\`, \`example\`, \`order\`, \`word\`, \`numbering\`);
"
