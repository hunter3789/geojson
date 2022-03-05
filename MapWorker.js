    var url = "https://raw.githubusercontent.com/hunter3789/geojson/main/custom.geo.10m.json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.timeout = 60000;
    xhr.overrideMimeType("application/json; charset=utf-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4 || xhr.status != 200) return;
      else  {
        var data = JSON.parse(xhr.responseText);
        postMessage(data);
        //console.log(json);


        //setTimeout(fnGetBounds, 1); 

        //fnGetBounds();
        //L.geoJson(json).addTo(map);
        //fnGeoTile(json);
      }
    };
    xhr.send();
