
 var map = new ol.Map({
        controls: ol.control.defaults().extend([
          new ol.control.OverviewMap()
        ]),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        target: 'map',
        view: new ol.View({
          center: [-28, 30],
          zoom: 7
        })
      });
