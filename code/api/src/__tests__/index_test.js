//App import
import db from '../setup/database'
//Tests to Run
//Run Query Tests 1st
import userQuery from './modules/user/query_test'
import surveyQuery from './modules/survey/query_test'

//Run Mutation Tests 2nd
import userMutation from './modules/user/mutation_test'
import surveyMutation from './modules/survey/mutation_test'

afterAll(() => {
  db.close();
})
