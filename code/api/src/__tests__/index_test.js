//App import
import db from '../setup/database'
//Tests to Run
//Run Query Tests 1st
import query from './modules/users/query_test'
//Run Mutation Tests 2nd
import mutation from './modules/users/mutation_test'

afterAll(() => {
  db.close();
})
