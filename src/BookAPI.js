export function fetchBookPages() {
  const ctx = require.context("./book/", false, /.js$/, "sync")
  const pages = ctx.keys().map((file) => file.replace("./", "./book/"))
  return pages
}

export function selectRandomTheme() {
  const themes = ["Circuit", "Cogs"]
  const random = Math.floor(Math.random() * themes.length)
  return themes[random]
}
