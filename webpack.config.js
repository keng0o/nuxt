// THIS IS FOR EDITTER NOT FOR NUXT
module.exports = {
  resolve: {
    extensions: [".js", ".json", ".vue", ".ts"],
    root: path.resolve(__dirname),
    alias: {
      "@": path.resolve(__dirname),
      "~": path.resolve(__dirname)
    }
  }
}
