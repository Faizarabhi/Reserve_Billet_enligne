
const { execSync } =require('child_process')
const asyncHandler = require('express-async-handler')
//const DB_NAME = require('./db');
const db = "mongodb://127.0.0.1:27017/tourline";
try {
    execSync(`mongoimport --host=${db} --db=tourline --collection=citi —-file "${process.cwd()}/seeders/citySeeder.json" ` );
console. log( `Imported documents into database `);
} catch( err ) {
console. log( `Could not import documents into database `);
console.error( err )
}