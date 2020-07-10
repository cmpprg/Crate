//App import
import db from '../setup/database'
//Tests to Run
//Run Query Tests 1st
import mutation from './modules/user/mutation_test'
import query from './modules/user/query_test'
//Run Mutation Tests 2nd

afterAll(() => {
  db.close();
})
