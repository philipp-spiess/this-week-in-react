workflow "Build and Deploy" {
  on = "push"
  resolves = ["Deploy to GitHub Pages"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "nuxt/actions-yarn@master"
  args = "build"
}

action "Deploy to GitHub Pages" {
  needs = "Build"
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "dist/"
  }
  secrets = ["GH_PAT"]
}
