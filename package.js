Package.describe({
  summary: "Execute a function whenever you scroll to an element"
});

Package.on_use(function (api) {
  api.use('jquery');

  api.add_files('jquery-waypoints/waypoints.js', 'client');
});
