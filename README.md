# How-To <!-- omit in toc -->

**Inhaltsverzeichnis:**

- [Datei- und Ordnerstruktur verstehen](#datei--und-ordnerstruktur-verstehen)
- [Seiten](#seiten)
  - [Neue Seite erstellen](#neue-seite-erstellen)
  - [Seiten Header](#seiten-header)
  - [Seite bearbeiten](#seite-bearbeiten)
- [Seitenmenü](#seitenmenü)
  - [Neuen Eintrag im Seitenmenü ergänzen](#neuen-eintrag-im-seitenmenü-ergänzen)
  - [Konfiguration der Einträge](#konfiguration-der-einträge)
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

Im folgenden gibt es kleine Erklärung zu einigen Ordnern und Dateien, die Sie bearbeiten  dürfen. Dateien und Ordner die hier nicht gelistet sind, sollten nicht verändert werden, damit die Webseite fehlerfrei funktionieren kann.

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
Der Titel einer Seite, die finale URL der Seite und der Dateiname sind *nicht von einander abhängig* und können verschieden sein. So sollte sowohl der Dateiname als auch die URL keine Leerzeichen oder Sonderzeichen enthalten, und möglichst kurz gehalten werden. Der Titel sollte nicht zu lang aber aussagekräftig sein. In der URL sollten nur kleine Buchstaben verwendet werden. Der Dateiname muss auf `.md` enden.

**Verwendete Formate:**<br>
Der meiste Inhalt kann mit sogenanntem [Markdown](#markdown) formatiert werden. Für manche Strukturen existieren [Jekyll-Templates](#jekyll-templates) die verwendet werden können. Sie können aber auch standard [HTML](#html) verwenden.

### Neue Seite erstellen

Wenn Sie eine neue Seite erstellen möchten, dann müssen Sie im entsprechenden Unterordner der Fachrichtung eine neue Datei erstellen. *Hier ein Beispiel:*

```
```

```
---
title: Mathematische Spitzenförderung an der TU Chemnitz
permalink: mathematik/tuc_foerderung/
date: 2023-09-17
---
```

### Seiten Header

### Seite bearbeiten


## Seitenmenü

### Neuen Eintrag im Seitenmenü ergänzen

### Konfiguration der Einträge

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
