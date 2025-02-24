var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });
var format_LAB1lab1_2 = new ol.format.GeoJSON();
var features_LAB1lab1_2 = format_LAB1lab1_2.readFeatures(json_LAB1lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAB1lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAB1lab1_2.addFeatures(features_LAB1lab1_2);
var lyr_LAB1lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAB1lab1_2, 
                style: style_LAB1lab1_2,
                popuplayertitle: 'LAB1 — lab1',
                interactive: true,
                title: '<img src="styles/legend/LAB1lab1_2.png" /> LAB1 — lab1'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'здания — building',
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> здания — building'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'дороги — highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> дороги — highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_LAB1lab1_2.setVisible(true);lyr_building_3.setVisible(true);lyr_highway_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_LAB1lab1_2,lyr_building_3,lyr_highway_4];
lyr_LAB1lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name:etymology:wikidata': 'name:etymology:wikidata', 'smoothness': 'smoothness', 'maxspeed:type': 'maxspeed:type', 'lanes': 'lanes', 'surface': 'surface', 'ref': 'ref', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'tracktype': 'tracktype', });
lyr_LAB1lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:city': '', 'addr:street': '', 'addr:housenumber': '', 'address': '', });
lyr_highway_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name:etymology:wikidata': '', 'smoothness': '', 'maxspeed:type': '', 'lanes': '', 'surface': '', 'ref': '', 'name:ru': '', 'name:en': '', 'name': '', 'tracktype': '', });
lyr_LAB1lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name:etymology:wikidata': 'no label', 'smoothness': 'no label', 'maxspeed:type': 'no label', 'lanes': 'no label', 'surface': 'hidden field', 'ref': 'header label - visible with data', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'tracktype': 'no label', });
lyr_highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});