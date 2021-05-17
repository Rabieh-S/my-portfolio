// Gros soucis de path sur mon import
// Ce code permet de gérer les import extérieur au dossier src/
const {alias, aliasJest} = require('react-app-rewire-alias')

const aliasMap = {
  example: 'example/src',
  '@library': 'library/src',
}

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)