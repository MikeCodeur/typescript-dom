try {
  const {username} = require('os').userInfo()
  const {
    repository: {url: repoUrl},
  } = require('../package.json')

  const remote = process.env.HUSKY_GIT_PARAMS.split(' ')[1]
  const repoName = repoUrl.match(/(?:.(?!\/))+\.git$/)[0]
  if (username !== '_mika' && remote.includes(`mikecodeur${repoName}`)) {
    console.log(
      `Tu essayes de pusher sur le repo de Mike Codeur directement. Si tu veux pusher ton travail pour le sauvegarder ou contribuer à améliorer ce module tu dois faire un fork de ce projet et pusher sur ton fork. Plus d'info https://docs.github.com/en/get-started/quickstart/fork-a-repo`,
    )
    process.exit(1)
  }
} catch (error) {
  // ignore
}
