t mysql = require('mysql')
const util = require('util')

async function schema () {
	  try {
		      const pool = mysql.createPool({
			            connectionLimit: 10,
			            host: process.env.DB_HOST || 'localhost',
			            user: process.env.DB_USER || 'applicationuser',
			            password: process.env.DB_PASS || 'applicationuser',
			            database: process.env.DB_NAME || 'movie_db'
			          })
		      pool.query = util.promisify(pool.query)

		      await pool.query("CREATE TABLE IF NOT EXISTS publications (name VARCHAR(250) NOT NULL, avatar VARCHAR(250), PRIMARY KEY (name))")

		      await pool.query("CREATE TABLE IF NOT EXISTS reviewers (name VARCHAR(255) NOT NULL, avatar VARCHAR(250), publication VARCHAR(250), PRIMARY KEY (name), FOREIGN KEY (publication) REFERENCES publications(name))")

		      await pool.query("CREATE TABLE IF NOT EXISTS movies (title VARCHAR(250) NOT NULL, release_year VARCHAR(250), score INT(11), reviewer VARCHAR(250), publication VARCHAR(250), PRIMARY KEY (title), FOREIGN KEY (reviewer) REFERENCES reviewers(name))")

		      console.log('Schema succesfully created')
		      process.exit(0)
		    } catch (err) {
			        console.error('Schema file error:', err)
			        process.exit(1)
			      }
}

schema()
