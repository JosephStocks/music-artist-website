
Run with
```
nodemon --ext js app.js 3000
```
This will watch js extensions and run server on port 3000.

Currently, I have live server settings in .vscode that will ignore changes to json files. This is necessary because json files are being used as db files. Once we actually use a db, I can stop ignoring changes to json files.
```
    "liveServer.settings.ignoreFiles": [
        ".vscode/**",
        "**/*.scss",
        "**/*.sass",
        "**/*.ts",
        "**/*.json"
    ]
```
