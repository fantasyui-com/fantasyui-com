# fantasyui-com
Static Fantasyui.com Website: Fantasy User Interface holds focus on Functional Dashboards and Beautiful UI Kits

Our dashboards are constructed out of EventEmitter
Our UI Kits closely follow Bootstrap Conventions

## Wiki Programs
A Wiki Program consists of a configuration file (similar to unix conf files)
and a graph linking pages together.

Configuration File Example

```JSON

  {
    "portNumber":80,
    "pageList": [
      
      "Dashboards",
      "Apps",
      "Mail",

      "UI Kit",
      "Typography",
      "Components",

      "Forms",
      "Tables",
      "Charts",
      "Maps",
      
      "Icons",
      "Extras"
    ]
  }

```

Graph Example

```GraphViz

Admin Dashboard Product -> Packet Validation -> Access Control -> Program

Program -> Dashboard Events, App Events, Mail Events, 

```


