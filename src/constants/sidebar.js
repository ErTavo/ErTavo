const { ROUTES } = require('./routes')
const [ 
  HOME, 
  ABOUT, 
  EXPERIENCE,
  PROJECTS,
  SETTINGS,
  CONTACT,
] = ROUTES

const pathsTop = [
  HOME,
  EXPERIENCE,
  PROJECTS,
  CONTACT,
]

const pathsBottom = [
  ABOUT,
  SETTINGS,
]

module.exports = {
  pathsTop,
  pathsBottom,
}