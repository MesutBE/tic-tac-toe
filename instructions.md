# Deploying the project
1. npm run build
1. npm install -g serve
1. serve -s build
1. make your page live.. settings => https://mesutbe.github.io/tic-tac-toe/
1. Open your package.json and add a homepage field for your project: "homepage": "https://myusername.github.io/my-app"
1. heroku create tictactoe-a --buildpack mars/create-react-app
1. git push heroku master
1. app.json
{
  "buildpacks": [
    {
      "url": "mars/create-react-app"
    }
  ]
}
1. Procfile
web: bin/boot
1. The config file `static.json` should be committed at the root of the repo.
{
  "root": "build/",
  "routes": {
    "/**": "index.html"
  }
}

confirmation
1. heroku buildpacks
