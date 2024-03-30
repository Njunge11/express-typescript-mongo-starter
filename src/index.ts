import express from 'express';
import userRoutes from './api/users';

const app = express();
const port = process.env.PORT ?? 3000;
console.log('dsdsdsd');

app.use(express.json());

app.use('/users', userRoutes);
/**
 * Linting - style guide, formatting
 * precommit hook - linting and tests.
 *
 * 1. Standard error handling. - done
 * 2. Standard success.
 * 2. Standard logging.
 * 3. Handling tests - unit + integration tests.
 * 4. CI + Docker stuff.
 * 5. Documentation using open api spec.
 * 6. MongoDB set-up
 */
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
