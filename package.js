Package.describe({
  summary: "Execute a function whenever you scroll to an element",
  "name": "lbragaglia:jquery-waypoints2",
  "description": "Execute a function whenever you scroll to an element",
  "homepage": "https://github.com/lbragaglia/meteor-jquery-waypoints2",
  "author": "The PeerLibrary Project",
  "version": "2.0.3_1",
  "git": "https://github.com/lbragaglia/meteor-jquery-waypoints2.git"
});

Package.on_use(function (api) {
  api.use('jquery@1.8.0');

  api.add_files('jquery-waypoints/waypoints.js', 'client');
});
