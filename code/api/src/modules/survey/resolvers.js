// App Imports
import models from '../../setup/models'

//helpers
const calculateStyle = styleAnswers => {
  let styles = { 'sporty': 0, 'formal': 0, 'edgy': 0 };
  let greatestCount = 0
  let greatestOccurence = null;

  for(let answer of styleAnswers) {
    styles[answer] += 1

    if (greatestCount < styles[answer]) {
      greatestCount = styles[answer]
      greatestOccurence = answer
    }
  }

  return greatestOccurence
};

// Create a survey without auth
export async function create(parentValue, {  userId, tops, bottoms, dresses, shoes, accessories }){
  console.log()
  const user = await models.User.findOne({ where: { id: userId } });
  if (!user) {
    throw new Error("user does not exist in database")
  } else {

    let answers = [tops, bottoms, dresses, shoes, accessories]
    let style = calculateStyle(answers)

    return await models.Survey.create({
      userId: userId,
      style: style,
      tops: tops,
      bottoms: bottoms,
      dresses: dresses,
      shoes: shoes,
      accessories: accessories
    })
  }
}

// get survey by user id
export async function getByUser(parentValue, { userId }){
  return await models.Survey.findOne({where: { userId: userId },
    include: [
    { model: models.User, as: 'user' }
    ]
  })
}
