@echo off
:: Launch the app directly in Edge (no server needed for static files)
start "" "msedge" --app=file:///%~dp0index.html