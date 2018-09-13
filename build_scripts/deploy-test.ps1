param(
    [string]$fireBaseToken,
    [string]$fireBaseProject,
    [string]$releaseMessage
)
$dir = Split-Path $MyInvocation.MyCommand.Path
Push-Location $dir

cd ..
npm i -g firebase-tools
write-host "starting deploy...";
firebase --version;
firebase deploy --token $fireBaseToken --only hosting:test --message "Release: $releaseMessage";
write-host "deployment completed";

Pop-Location