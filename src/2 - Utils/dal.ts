import pg from 'pg';

const { Pool } = pg;

// Create a new PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

// Attempt to connect to the pool
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to PostgreSQL database');

  // Don't forget to call `done` to release the client back to the pool
  done();
});

export default pool;