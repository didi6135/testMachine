import pg from 'pg';

const { Pool } = pg;
// Create a new PostgreSQL connection pool
const pool = new Pool({
    connectionString: "postgres://default:BaIKyzi6f7FJ@ep-lingering-heart-88895075.us-east-1.postgres.vercel-storage.com:5432/verceldb" + "?sslmode=require",
});

// Attempt to connect to the pool
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to PostgreSQL database');

  done();
});

export default pool;
