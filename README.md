Online Bar – Cocktail-Suche mit Favoriten

Eine Single-Page-Application zum Durchstöbern von Cocktails: Zufällige Drinks mischen lassen, die Datenbank nach Rezepten durchsuchen, die populärsten Drinks filtern – und persönliche Favoriten dauerhaft im Browser speichern. Gebaut mit Vanilla JavaScript (ES-Module), eigener Hash-Router-Implementierung und der kostenlosen TheCocktailDB API – ganz ohne Framework.

Live-Demo: https://michael-c-cmd.github.io/Online-Bar/
Repository: https://github.com/Michael-C-cmd/Online-Bar



Über das Projekt

Die App ist mein erstes Projekt, das eine externe REST-API anbindet – komplett ohne Framework. Im Zentrum stand die Frage: Wie baue ich eine moderne SPA mit vanilla JavaScript? Die Antwort steckt im Router: Navigation via History-API (pushState/popstate), URL-Sync per Hash-Routing und ein Restore des Anwendungszustands beim Neuladen der Seite.

Features





Zufalls-Cocktail: Auf Knopfdruck einen zufälligen Drink aus der Datenbank mischen



Suche: Cocktails nach Name durchsuchen, mit Anzeige aller Zutaten und Alkohol-Status



Populäre Drinks: Auswahlliste der beliebtesten Cocktails mit Detailansicht



Favoriten speichern: Lieblings-Drinks per Klick merken – persistent im localStorage, auch nach Reload und Browser-Neustart (JSON-Roundtrip)



Duplikat-Schutz: Jeder Drink kann nur einmal in der Favoritenliste landen



Favoriten löschen: Einträge einzeln aus der Liste entfernen



SPA-Routing ohne Framework:





navigate() → history.pushState() + render



popstate-Listener für Browser-Zurück/Vor-Buttons



URL-Init-Load: beim Starten wird die Hash-URL gelesen und die passende View gerendert (F5- und Lesezeichen-fähig)



Robuste Fehlerbehandlung: { data, error }-Muster für alle fetch-Aufrufe, sichtbare Fehlermeldungen im UI, Fallback-Route für unbekannte Pfade

Verwendete Technologien und Konzepte







Technologie / Konzept



Einsatz





Vanilla JS (ES-Module)



Modulare Architektur: Router, Views, Fetch-Layer, DOM-Erzeugung getrennt





History-API



pushState, popstate, Hash-Routing (#/view) für SPA-Navigation ohne Reload





fetch / REST



TheCocktailDB-API (search, random, popular), response.ok-Prüfung, Fehler-Objekt-Muster





Web Storage API



Favoriten als Objekt-Array im localStorage, JSON.stringify/parse, Null-Guard beim ersten Start





DOM-API



Dynamischer Aufbau aller Views (createElement, replaceChildren, Event-Delegation)




Autor

Michael Čepelka – Junior Frontend Developer (Quereinsteiger)
GitHub: @Michael-C-cmd



About this project (English abstract)

A single-page cocktail browser built with vanilla JavaScript and ES modules – no framework. It features a hand-rolled hash-based router (History API: pushState/popstate, URL restore on reload), a fetch layer with a consistent { data, error } pattern and user-facing error states, and persistent favorites with duplicate protection stored in localStorage. Data comes from the free TheCocktailDB REST API (random drinks, search, popular list).

Live demo: https://michael-c-cmd.github.io/Online-Bar/

🇬🇧 About this project (English abstract)

A single-page cocktail browser built with vanilla JavaScript and ES modules – no framework. It features a hand-rolled hash-based router (History API: pushState/popstate, URL restore on reload), a fetch layer with a consistent { data, error } pattern and user-facing error states, and persistent favorites stored in localStorage. Data comes from the free TheCocktailDB REST API (random drinks, search, popular list).

Live demo: (Link einfügen)
