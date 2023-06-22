module.exports = [
  {
    id: 'sdt_extension',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension sdt_extension is activated!'
      );
      console.log(app.commands);
    }
  }
];
