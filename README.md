# How-To <!-- omit in toc -->

**Inhaltsverzeichnis:**

- [Datei- und Ordnerstruktur verstehen](#datei--und-ordnerstruktur-verstehen)
- [Seiten](#seiten)
  - [Seiten Header](#seiten-header)
  - [Neue Seite erstellen](#neue-seite-erstellen)
  - [Seite bearbeiten](#seite-bearbeiten)
- [Seitenmenü](#seitenmenü)
  - [Konfiguration der Einträge](#konfiguration-der-einträge)
  - [Neuen Eintrag im Seitenmenü ergänzen](#neuen-eintrag-im-seitenmenü-ergänzen)
  - [Eintrag im Seitenmenü bearbeiten](#eintrag-im-seitenmenü-bearbeiten)
- [Posts](#posts)
  - [Konfiguration der Posts](#konfiguration-der-posts)
  - [Neuen Post erstellen](#neuen-post-erstellen)
  - [Post bearbeiten](#post-bearbeiten)
- [Dokumentation für verwendete Formate](#dokumentation-für-verwendete-formate)
  - [WEBP](#webp)
  - [PNG](#png)
  - [GIF](#gif)
  - [JPG, JPEG](#jpg-jpeg)
  - [YAML](#yaml)
  - [HTML](#html)
  - [Markdown](#markdown)


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
│   │   ├── kzm.md
│   │   ├── material.md
│   │   ├── mathematikseminar.md
│   │   ├── olympiade.md
│   │   ├── rankings.md
│   │   ├── regio.md
│   │   ├── tuc_foerderung.md
│   │   └── verantwortung.md
│   └── physik
│       └── index.md
├── _site
│
├── index.md
└── _config.yml
```

Im folgenden gibt es kleine Erklärung zu einigen Ordnern und Dateien, die Sie bearbeiten  dürfen. Dateien und Ordner die hier nicht gelistet sind, sollten nicht verändert werden, damit die Webseite fehlerfrei funktionieren kann.

| Ordner | Datei | Erklärung | Formate |
|:---|:---|:---|:---|
| `/assets/images` | | Hier können Sie Bilder speichern, die Sie später auf einer Seite anzeigen möchten. | [WEBP](#webp), [PNG](#png), [GIF](#gif), [JPG](#jpg-jpeg), [JPEG](#jpg-jpeg) |
| `/_data` | `/posts.yml` | Hier sind die Posts gespeichert, die auf der Startseite angezeigt werden. | [YAML](#yaml) |
| `/_data` | `/sidenav.yml` | Hier sind die Einträge des Seitenmenüs festgelegt. | [YAML](#yaml) |
| `/pages` | | Hier liegen alle Seiten der Webseite in Ordnern nach Fachrichtung sortiert. | [Markdown](#markdown), [HTML](#html) |
| `/pages` | `/datenschutz.md`, `/impressum.md` | Die Seiten für Datenschutzerklärung und Impressum dürfen bearbeitet, aber nicht gelöscht werden. | [Markdown](#markdown), [HTML](#html) |
| `/pages/mathematik` | | Dieser Ordner enthält alle Seiten der Fachrichtung Mathematik. | [Markdown](#markdown), [HTML](#html) |
| `/pages/physik` | | Dieser Ordner enthält alle Seiten der Fachrichtung Physik. | [Markdown](#markdown), [HTML](#html) |
| `/pages/mathematik`, `/pages/physik` | `/index.md` | Die `index.md` Datei in einem beliebigen Ordner ist immer die Startseite der jeweiligen Fachrichtung. | [Markdown](#markdown), [HTML](#html) |
| `/pages/mathematik` | `/adam-ries.md` | Diese Datei ist bspw. die Seite des Adam-Ries Wettbewerbs: [https://bezirkskomitee-chemnitz.github.io/mathematik/adam-ries/](https://bezirkskomitee-chemnitz.github.io/mathematik/adam-ries/). Wie die URL und der angezeigte Titel etc. zustande kommt, wird im sogenannten [Header](#seiten-header) am Anfang einer jeden Datei festgelegt. | [Markdown](#markdown), [HTML](#html) |
| `/` | `/_config.yml` | In dieser Datei wird einiges der Webseite konfiguriert. Hier ist auch das obere Menü mit den Fachrichtungen definiert. Sie sollten hier nichts verändern, außer evtl. die Menüeinträge in `topnav`. | [YAML](#yaml) |
| `/` | `/index.md` | Das ist die Startseite der Webseite. Sie können diese Datei bearbeiten, sollten aber irgendwo die Posts mit `{% include posts.liquid %}` einbinden. | [Markdown](#markdown), [HTML](#html) |


## Seiten

### Seiten Header

### Neue Seite erstellen

### Seite bearbeiten


## Seitenmenü

### Konfiguration der Einträge

### Neuen Eintrag im Seitenmenü ergänzen

### Eintrag im Seitenmenü bearbeiten


## Posts

### Konfiguration der Posts

### Neuen Post erstellen

### Post bearbeiten


## Dokumentation für verwendete Formate

### WEBP

### PNG

### GIF

### JPG, JPEG

### YAML

### HTML

### Markdown
