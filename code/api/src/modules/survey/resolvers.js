// App Imports
import models from '../../setup/models'

// Create survey
export async function create(parentValue, { userId, style }) {
  const survey = await models.Survey.findOne({ where: { userId: userId }})
  if (!survey) {
    return await models.Survey.create({
      userId,
      style
    })
  } else {
    throw new Error('This user already has a style survey.')
  }
}

export async function getByUser(parentValue, { userId }) {
  const survey = await models.Survey.findOne({ where: { userId: userId } })

  if (!survey) {
    // user survey does not exist
    throw new Error('There is no style survey for this user')
  } else {
    return survey
  }
}
