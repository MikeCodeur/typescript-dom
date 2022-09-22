var spawnSync = require('child_process').spawnSync

var consolestyles = {
  success: {open: '\u001b[32;1m', close: '\u001b[0m'},
  danger: {open: '\u001b[31;1m', close: '\u001b[0m'},
  info: {open: '\u001b[36;1m', close: '\u001b[0m'},
  subtitle: {open: '\u001b[2;1m', close: '\u001b[0m'},
}

function consolecolor(modifier, string) {
  return consolestyles[modifier].open + string + consolestyles[modifier].close
}

console.log(consolecolor('info', '▶️  Démarrage de l\'installation de l\' environnement...'))

var error = spawnSync('npx --version', {shell: true}).stderr.toString().trim()
if (error) {
  console.error(
    consolecolor(
      'danger',
      '🚨  npx n\'est pas disponible sur cet ordinateur. Merci d\'installer npm@6.0.0 ou version plus récente',
    ),
  )
  throw error
}

var command =
  'npx "https://gist.github.com/MikeCodeur/0eb1815df3e6ff119d776e44f23ee40c" -q'
console.log(
  //color('subtitle', '      Execution de la commande suivante: ' + command),
)

var result = spawnSync(command, {stdio: 'inherit', shell: true})

if (result.status === 0) {
  console.log(consolecolor('success', '✅  Installation de l\'application terminé...'))
} else {
  process.exit(result.status)
}

/*
eslint
  no-var: "off",
  "vars-on-top": "off",
*/
