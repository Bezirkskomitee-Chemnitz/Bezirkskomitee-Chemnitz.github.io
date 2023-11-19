# How-To <!-- omit in toc -->
<!-- regex word counter: [^#][a-z-_äüöß]{2,}[ :;,.] -->

**Inhaltsverzeichnis:**

- [Datei- und Ordnerstruktur verstehen](#datei--und-ordnerstruktur-verstehen)
- [Seiten](#seiten)
  - [Neue Seite erstellen](#neue-seite-erstellen)
  - [Seiten Header](#seiten-header)
  - [Seite bearbeiten](#seite-bearbeiten)
- [Seitenmenü](#seitenmenü)
  - [Konfiguration der Einträge](#konfiguration-der-einträge)
  - [Neuen Eintrag im Seitenmenü ergänzen](#neuen-eintrag-im-seitenmenü-ergänzen)
  - [Eintrag im Seitenmenü bearbeiten](#eintrag-im-seitenmenü-bearbeiten)
- [Posts](#posts)
  - [Neuen Post erstellen](#neuen-post-erstellen)
  - [Konfiguration der Posts](#konfiguration-der-posts)
  - [Post bearbeiten](#post-bearbeiten)
- [Dokumentation für verwendete Formate](#dokumentation-für-verwendete-formate)
  - [WEBP](#webp)
  - [PNG](#png)
  - [GIF](#gif)
  - [JPG, JPEG](#jpg-jpeg)
  - [YAML](#yaml)
  - [Markdown](#markdown)
  - [HTML](#html)
  - [Jekyll Templates](#jekyll-templates)

## Datei- und Ordnerstruktur verstehen

Hier sehen Sie einen Auszug der Datei- und Orderstruktur der gesamten Webseite: 

```
bezirkskomitee-chemnitz.github.io
├── assets
│   └── images
│       └── favicon.png
├── _data
│   ├── posts.yml
│   └── sidenav.yml
├── pages
│   ├── datenschutz.md
│   ├── impressum.md
│   ├── mathematik
│   │   ├── index.md
│   │   ├── adam-ries.md
│   │   │   ...
│   │   └── verantwortung.md
│   └── physik
│       └── index.md
├── _site
│   ...
├── index.md
└── _config.yml
```

Im folgenden gibt es kleine Erklärung zu einigen Ordnern und Dateien, die Sie bearbeiten  dürfen. Dateien und Ordner die hier nicht gelistet sind, sollten nicht verändert werden, damit die Webseite fehlerfrei funktionieren kann. Ebenso sollten bestehende Dateien und Ordner nicht umbenannt werden, damit darauf aufbauende Logik und Links nicht 'kaputt' gehen. 

| Ordner | Datei | Erklärung | Formate |
|:---|:---|:---|:---|
| `/assets/images` | | Hier können Sie Bilder speichern, die Sie später auf einer Seite verwenden möchten. | [WEBP](#webp), [PNG](#png), [GIF](#gif), [JPG](#jpg-jpeg), [JPEG](#jpg-jpeg) |
| `/_data` | `/posts.yml` | Hier sind die Posts gespeichert, die auf der Startseite angezeigt werden. | [YAML](#yaml) |
| `/_data` | `/sidenav.yml` | Hier sind die Einträge der Seitenmenüs festgelegt. | [YAML](#yaml) |
| `/pages` | | Hier liegen alle Seiten der Webseite in Ordnern nach Fachrichtung sortiert. | [Markdown](#markdown), [HTML](#html), [Jekyll-Templates](#jekyll-templates) |
| `/pages` | `/datenschutz.md`, `/impressum.md` | Die Seiten für Datenschutzerklärung und Impressum dürfen bearbeitet, aber nicht gelöscht werden. | [Markdown](#markdown), [HTML](#html), [Jekyll-Templates](#jekyll-templates) |
| `/pages/physik` | | Dieser Ordner enthält alle Seiten der Fachrichtung Physik. | [Markdown](#markdown), [HTML](#html), [Jekyll-Templates](#jekyll-templates) |
| `/pages/mathematik` | | Dieser Ordner enthält alle Seiten der Fachrichtung Mathematik. | [Markdown](#markdown), [HTML](#html), [Jekyll-Templates](#jekyll-templates) |
| `/pages/mathematik` | `/adam-ries.md` | Diese Datei ist bspw. die Seite des Adam-Ries Wettbewerbs: [https://bezirkskomitee-chemnitz.github.io/mathematik/adam-ries/](https://bezirkskomitee-chemnitz.github.io/mathematik/adam-ries/). Wie die URL und der angezeigte Titel etc. zustande kommt, wird im sogenannten [Header](#seiten-header) am Anfang einer jeden Datei festgelegt. | [Markdown](#markdown), [HTML](#html), [Jekyll-Templates](#jekyll-templates) |
| `/pages/mathematik`, `/pages/physik` | `/index.md` | Die `index.md` Datei in einem beliebigen Ordner ist immer die Startseite der jeweiligen Fachrichtung. | [Markdown](#markdown), [HTML](#html), [Jekyll-Templates](#jekyll-templates) |
| `/` | `/index.md` | Das ist die Startseite der Webseite. Sie können diese Datei bearbeiten, sollten aber irgendwo die Posts mit `{% include posts.liquid %}` einbinden. | [Markdown](#markdown), [HTML](#html), [Jekyll-Templates](#jekyll-templates) |
| `/` | `/_config.yml` | In dieser Datei wird einiges der Webseite konfiguriert. Hier ist auch das obere Menü mit den Fachrichtungen definiert. Sie sollten hier nichts verändern, außer evtl. die Menüeinträge in `topnav`. | [YAML](#yaml), [Jekyll-Templates](#jekyll-templates) |
| `/_site` | | Dieser Ordner enthält die generierte statische Webseite mit allen notwendigen Dateien für den Webserver. Änderungen in diesem Ordner werden beim nächsten sogenannten *build* einfach überschrieben. | |


## Seiten

Alle Seiten der Webseite liegen im Ordner `/pages`. Für die Übersichtlichkeit sind die Seiten noch in Unterordnern nach Fachrichtung sortiert.

**Regeln für die Benennung:**<br>
Der Titel einer Seite und die finale URL bzw. der Dateiname der Seite sind *nicht von einander abhängig* und können verschieden sein; aber der Dateiname inkl. Dateipfad bestimmen zu teilen die URL.
<br>
Der Dateiname darf keine Leerzeichen oder Sonderzeichen enthalten und sollte möglichst kurz gehalten werden. Im Prinzip sind also nur kleine (ANSI) Buchstaben und Unterstrich (`_`) und Bindestrich (`-`) erlaubt. Der Dateiname muss auf `.md` enden, da es eine [Markdown](#markdown) Datei ist. Der Titel sollte aussagekräftig und nicht zu lang sein. Es gibt keine Feste Längenbegrenzung, aber mehr als 100 Zeichen sollten es nicht sein.

**Verwendete Formate:**<br>
Der meiste Inhalt kann mit sogenanntem [Markdown](#markdown) formatiert werden. Für manche Strukturen existieren eigene [Jekyll-Templates](#jekyll-templates) die verwendet werden können. Sie können aber auch standard [HTML](#html) nutzen. Mehr dazu am Ende des Kapitels [Seite bearbeiten](#seite-bearbeiten).

### Neue Seite erstellen

Wenn Sie eine neue Seite erstellen möchten, dann müssen Sie im entsprechenden Unterordner der Fachrichtung eine neue Datei erstellen. Und folgendes beachten, hier an einem Beispiel veranschaulicht:

**Beispiel:**

```
bezirkskomitee-chemnitz.github.io
└── pages
    └── mathematik
        └── foerderung_mint.md
```

- Titel: `Förderung: "MINT"`
- URL: `mathematik/foerderung_mint/`

Der Titel, der später automatisch als Überschrift auf der Seite angezeigt wird, soll `Förderung: "MINT"` sein. Außerdem soll diese Seite Teil der `Mathematik` Fachrichtung sein und dort auch im Seitenmenü angezeigt werden.

Entsprechend der Fachrichtung liegt die Datei im Ordner `/pages/mathematik`. Der Titel enthält in diesem Beispiel Sonderzeichen und Leerzeichen; der Dateiname darf aber im Prinzip nur aus kleinen (ANSI) Buchstaben und Unterstrich (`_`) und Bindestrich (`-`) bestehen. Also nennen wir die Datei bspw. `foerderung_mint.md`.

### Seiten Header

Im Header einer jeden Seite werden Seitenspezifische Eigenschaften konfiguriert. Mindestens der Titel (`title`), die URL (`permalink`) und das letzte Änderungsdatum (`date`) sollten dort gesetzt werden. Der Header wird am Anfang und Ende mit drei Bindestrichen (`---`) abgegrenzt und muss ganz am Anfang der Datei stehen. Der Header benutzt das [YAML](#yaml) Format.

**Beispiel:**

```yml
---
title: 'Förderung: "MINT"' 
permalink: mathematik/foerderung_mint/
date: 2023-11-18
---
```

**Basis Attribute:**

`title`:
- Darf im Prinzip alle Zeichen enthalten; aber Doppelpunkt (`:`), einfaches (`'`) und doppeltes (`"`) Hochkommata sollten vermieden werden.
- Wenn Doppelpunkte (`:`) enthalten sind, muss der Text zwischen einfachen (`'`) oder doppelten Hochkommata (`"`) geschrieben werden.
- Hier müssen zum eingrenzen einfache Hochkommata (`'`) verwendet werden, da auch doppelte Hochkommata (`"`) im Titel vorhanden sind.

`permalink`:
- Bezeichnet die URL und muss im Prinzip den Dateipfad und -namen abbilden.
- Am Anfang darf *kein* Schrägstrich (`/`), am Ende *muss* einer stehen.
- Erst kommt der Unterordner der Fachrichtung (hier: `mathematik`), dann ein `/`, dann der Dateiname ohne Endung (hier: `foerderung_mint`) und dann wieder ein `/`.

`date`:
- Sollte das Datum enthalten, an dem die letzte inhaltliche Änderung stattgefunden hat.
- Format: `JJJJ-MM-TT`; Bspw.: `2023-11-18` steht für den `18. November 2023`
- **Achtung:** Wenn hier ein nicht mögliches Datum steht, gibt es einen Fehler und die gesamte Webseite kann nicht korrekt generiert werden! Bspw. weil Monat und Tag ausversehen vertauscht wurde.  

**Weitere Attribute:**

`keywords`:
- Suchmaschinen wie Google oder Bing beziehen unter Anderem die von Webseiten festgelegten Stichworte (`keywords`) ein, um deren Relevanz zu beurteilen und die Seite schlussendlich in den Suchergebnissen anzuzeigen oder eben nicht. Daher können Sie hier einige kurze Stichworte auflisten, die grob den Inhalt dieser Seite beschreiben.
- Groß- und Kleinschreibung ist nicht relevant, Sonderzeichen können verwendet werden und einzelne Stichworte müssen mit einem Komma (`,`) voneinander getrennt werden. 
- Bsp.: `förderung, mint`
- Jede Seite der Webseite hat immer folgende Stichworte: `bezirkskomitee, chemnitz, wettbewerbe` und den Fachbereich (z.B. `mathematik`)

`language`:
- Dieses Attribut dient (aktuell noch) nur einer Suchmaschine als Hinweis, in welcher Sprache der Inhalt der Seite geschrieben ist.
- Standardmäßig ist die Sprache einer Seite auf `de` für Deutsch gesetzt.
- Bspw. könnte die Sprache auch auf `en` für Englisch gesetzt werden.

`author`:
- Hier könnten die Namen der (Haupt-)Authoren einer Seite gelistet werden.
- Bisher werden die Authoren nicht im Design beachtet und daher nicht auf der Seite angezeigt. Für Suchmaschinen sind die Authoren dennoch sichtbar.

`redirect_from`:
- Hier können Sie alternative URLs ergänzen, die den Nutzer zu dieser Seite weiterleiten. Wenn Sie bspw. den `permalink` der Seite ändern, kann der vorherige Eintrag hier ergänzt werden, damit bestehende ältere Links weiterhin funktionieren.
- Dieses Attribut kann einen einzelnen Wert enthalten (wie bei `permalink`), oder eine Liste von Werten. Bsp.:

```yml
permalink: mathematik/olympiade
redirect_from:
  - mathematik/mathematikolympiade/
  - mathematik/anderer_alternativer_link/
```

### Seite bearbeiten

Der Inhalt jeder Seite kann bearbeitet werden, wobei bei relevanten inhaltlichen Änderungen das Datum (`date`) im [Header](#seiten-header) aktualisiert werden sollte. Die URL (`permalink`) im [Header](#seiten-header) sollte nachträglich nicht geändert werden, damit bereits bestehende Verlinkungen zu dieser Seite nicht 'kaputt' gehen.

Für die Formatierung des Inhalts sollte [Markdown](#markdown) verwendet werden. Einen kleinen Guide gibt es [hier](#markdown). Damit können normal-, kursiv- oder fett-geschriebene Textabsätze; Stichpunkte, nummerierte Listen, Links, Code-Blöcke mit Highlighting, Überschriften, Tabellen, Bilder, uvm. erstellt werden.

Einfache [HTML](#html) Elemente können ebenfalls verwendet werden. Damit können z.B. geschützte Leerzeichen (`&nbsp;`) oder Zeilenumbrüche (`<br>`) realisiert werden, oder bspw. etwas komplexere Tabellen umgesetzt werden. Ein HTML-Tag kann theoretisch auch Attribute enthalten, die das Aussehen oder Verhalten ändern, dadurch kann aber auch das ganze Design der Webseite (negativ) beeinflusst werden. Also bitte möglichst wenige bzw. keine Designändernde Attribute bei HTML-Tags verwenden.

Einige Strukturen können nicht mit einfachem [Markdown](#markdown) umgesetzt werden oder existieren gar nicht erst. Dann können Sie [HTML](#html) verwenden oder es gibt bereits ein [Jekyll-Template](#jekyll-templates), welches die Verwendung für Sie vereinfacht (und die wartbarkeit und erweiterbarkeit für mich vereinfacht).

Bspw. können Sie folgendes Jekyll-Template für geschützte E-Mails verwenden:

```liquid
{% include email.html email="email@example.de" %}
```

## Seitenmenü

Wenn Sie eine neue Seite erstellt haben, dann sollte diese wahrscheinlich auch über das Seitenmenü erreichbar sein. Ebenso können Sie aber auch externe URLs im Seitenmenü ergänzen. Im Ordner `/_data` in der Datei `sidenav.yml` steht im [YAML](#yaml) Format, welche Einträge es in den Seitenmenüs der einzelnen Fachrichtungen gibt.

Im Folgenden ein kurzer (unvollständiger) Auszug der Datei `sidenav.yml` mit Erklärung der Syntax:

```yml
faculties:
  math:
    - title: Home
      url: ""

    - title: Korrespondenzzirkel
      url: kzm/

    - title: Wettbewerbe
      items:
        - title: Mathematik&shy;olympiade
          url: olympiade/
        - title: Adam-Ries-Wettbewerb
          url: adam-ries/

        - title: Känguru Wettbewerb
          external_url: https://www.mathe-kaenguru.de/

    - title: Inhaltlich Verantwortlicher
      url: verantwortung/
  

  physics:
    - title: Home
      url: ""
```

Mehr zum sehr oft verwendeten [YAML](#yaml) Format gibt es weiter unten zu lesen, aber vereinfacht gesagt, handelt es sich meistens um geordnete verschachtelte Stichpunkte. So befindet sich unter dem Stichpunkt `math` eine Liste von Stichpunkten, die Titel (`title`) und URL (`url`) der einzelnen Einträge im Seitenmenü enthalten.

Die Tiefe der Einrückung (mit je zwei Leerzeichen) ist hier sehr wichtig, weil nur dadurch die Zugehörigkeit in der Verschachtelung festgelegt wird. Ein neuer Eintrag wird mit einem Bindestrich (`-`) markiert und die Attribute eines Eintrages folgen ohne Bindestrich mit gleicher Einrückung. Leerzeilen sind optional und dienen nur der Lesbarkeit.

Jeder Fachrichtung ist ein eindeutiges Schlüsselwort in der `_config.yml` Datei zugeordnet (darf nicht verändert werden!), welches unabhängig vom dargestellten Namen ist:

- Mathematik: `math`
- Physik: `physics`
- Chemie: `chemistry`
- Biologie: `biology`

Bei den Fachrichtung `Chemie` und `Biologie` gibt es (noch) kein Seitenmenü, da deren Inhalte nicht auf dieser Webseite gehostet werden. Das Seitenmenü für die Fachrichtung `Physik` besteht nur aus der Startseite (leere URL: `url: ""`), da hier noch zu wenige Inhalte existieren für die weitere Seiten notwendig wären. Für die Fachrichtung `Mathematik` ist hier ein umfangreiches Seitenmenü definiert; u.a. mit externen URLs, einfachen Einträgen und verschachtelten Einträgen inkl. Sonderzeichen.

### Konfiguration der Einträge

Es wird zwischen zwei verschiedenen Einträgen im Seitenmenü unterschieden, die beide aus einem Titel (`title`) und einer URL (`url`) oder einer externen URL (`external_url`) bestehen. Ein Eintrag kann auch eine Kategorie sein, die weitere Einträge (`items`) als Unterpunkte hat. Eine solche Kategorie kann auch eine eigene Seite (`url`) haben.

**Beispiel:** ein Eintrag mit URL und einer mit externer URL

```yml
faculties:
  math:
    - title: Korrespondenzzirkel
      url: kzm/
    - title: Bundeswettbewerb Mathematik
      external_url: https://www.mathe-wettbewerbe.de/bundeswettbewerb-mathematik/
```

**Beispiel:** eine Kategorie mit Einträgen

```yml
# Übrigens: so schreibt man Kommentare
faculties:
  math:
    - title: Wettbewerbe
      url: mathematik/wettbewerbe  # dieser URL Parameter ist optional, da nicht unbedingt jede Katgorie nochmal eine extra Seite benötigt 
      items:
        - title: Mathematik&shy;olympiade
          url: olympiade/
        - title: Känguru Wettbewerb
          external_url: https://www.mathe-kaenguru.de/
```

### Neuen Eintrag im Seitenmenü ergänzen

### Eintrag im Seitenmenü bearbeiten


## Posts

### Neuen Post erstellen

### Konfiguration der Posts

### Post bearbeiten


## Dokumentation für verwendete Formate

### WEBP

### PNG

### GIF

### JPG, JPEG

### YAML

### Markdown

### HTML

### Jekyll Templates
