// App Imports
import models from '../../setup/models'

// Create survey
export async function create(parentValue, { userId, style }) {
  const user = await models.User.findOne({ where: { userId }})
  if (!user.survey) {
    return await models.Survey.create({
      userId,
      style
    })
  } else {
    throw new Error('This user already has a style survey.')
  }
}
