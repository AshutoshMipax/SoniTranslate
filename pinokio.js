module.exports = {
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "env")
    if (installed) {
      let session = await kernel.require(__dirname, "session.json")
      let running = await kernel.running(__dirname, "start.json")
      if (running) {
        return [{
          "icon": "fa-solid fa-spin fa-circle-notch",
          "text": "Running",
          "action": "stop.json"
        }, {
          "icon": "fa-solid fa-desktop",
          "text": "Server",
          "href": "start.json"
        }]
      } else {
        return [{
          "icon": "fa-solid fa-power-off",
          "text": "run",
          "action": "start.json"
        }, {
          "icon": "fa-solid fa-plug",
          "text": "Update",
          "href": "update.json"
        }, {
          "icon": "fa-solid fa-plug",
          "text": "Install",
          "href": "install.json"
        }, {
          "icon": "fa-solid fa-broom",
          "text": "Clean",
          "href": "clean.json"
        }]
      }
    } else {
      return [{
        "icon": "fa-solid fa-plug",
        "text": "Install",
        "href": "install.json"
      }]
    }
  }
}
