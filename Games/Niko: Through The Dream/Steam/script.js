include(["Functions", "QuickScript", "SteamScript"]);
include(["Functions", "Verbs", "dotnet40"]);

new SteamScript()
    .name("Niko: Through The Dream")
    .editor("Studio Paint")
    .author("Plata")
    .appId(296550)
    .postInstall(function(wine, wizard) {
        wine.dotnet40();
        wine.setManagedForApplication().set("NIKO.exe", false).do();
    })
    .go();
