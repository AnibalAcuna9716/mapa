var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Distritos_1 = new ol.format.GeoJSON();
var features_Distritos_1 = format_Distritos_1.readFeatures(json_Distritos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_1.addFeatures(features_Distritos_1);
var lyr_Distritos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distritos_1, 
                style: style_Distritos_1,
                popuplayertitle: "Distritos",
                interactive: false,
                title: '<img src="styles/legend/Distritos_1.png" /> Distritos'
            });
var format_GranEscala_2 = new ol.format.GeoJSON();
var features_GranEscala_2 = format_GranEscala_2.readFeatures(json_GranEscala_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranEscala_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranEscala_2.addFeatures(features_GranEscala_2);
var lyr_GranEscala_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranEscala_2, 
                style: style_GranEscala_2,
                popuplayertitle: "Gran Escala",
                interactive: true,
    title: 'Gran Escala<br />\
    <img src="styles/legend/GranEscala_2_0.png" /> 0 - 25,01<br />\
    <img src="styles/legend/GranEscala_2_1.png" /> 25,01 - 50,01<br />\
    <img src="styles/legend/GranEscala_2_2.png" /> 50,01 - 100<br />'
        });
var format_PequeaEscala_3 = new ol.format.GeoJSON();
var features_PequeaEscala_3 = format_PequeaEscala_3.readFeatures(json_PequeaEscala_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PequeaEscala_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PequeaEscala_3.addFeatures(features_PequeaEscala_3);
var lyr_PequeaEscala_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PequeaEscala_3, 
                style: style_PequeaEscala_3,
                popuplayertitle: "Pequeña Escala",
                interactive: true,
    title: 'Pequeña Escala<br />\
    <img src="styles/legend/PequeaEscala_3_0.png" /> 0 - 25<br />\
    <img src="styles/legend/PequeaEscala_3_1.png" /> 25.01 - 50<br />\
    <img src="styles/legend/PequeaEscala_3_2.png" /> 50.01 - 100<br />'
        });
var group_CostaRica = new ol.layer.Group({
                                layers: [lyr_Distritos_1,lyr_GranEscala_2,lyr_PequeaEscala_3,],
                                fold: "open",
                                title: "Costa Rica"});

lyr_OSMStandard_0.setVisible(true);lyr_Distritos_1.setVisible(true);lyr_GranEscala_2.setVisible(true);lyr_PequeaEscala_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_CostaRica];
lyr_Distritos_1.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_GranEscala_2.set('fieldAliases', {'Equipment': 'Id Tramo', 'begin': 'begin', 'end': 'end', 'Tramos_Capacidad_Minima — Sheet1_IC Max (kW)': 'Capacidad de Integración (Kw)', 'Tramos_Capacidad_Minima — Sheet1_Capacidad Normalizada (%)': 'Tramos_Capacidad_Minima — Sheet1_Capacidad Normalizada (%)', });
lyr_PequeaEscala_3.set('fieldAliases', {'Transforma': 'Id Tranforrmador', 'Suma_Capac': 'Suma_Capac', 'Capacidad_': 'Capacidad de Integración (Kw)', 'Capacida_1': 'Capacida_1', 'Criterio q': 'Criterio q', 'Cap Nom (k': 'Cap Nom (k', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Capacidad': 'Capacidad Dispobible (%)', });
lyr_Distritos_1.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_GranEscala_2.set('fieldImages', {'Equipment': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Tramos_Capacidad_Minima — Sheet1_IC Max (kW)': 'TextEdit', 'Tramos_Capacidad_Minima — Sheet1_Capacidad Normalizada (%)': 'TextEdit', });
lyr_PequeaEscala_3.set('fieldImages', {'Transforma': 'TextEdit', 'Suma_Capac': 'TextEdit', 'Capacidad_': 'TextEdit', 'Capacida_1': 'TextEdit', 'Criterio q': 'TextEdit', 'Cap Nom (k': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Capacidad': 'TextEdit', });
lyr_Distritos_1.set('fieldLabels', {'GID_3': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'NAME_3': 'hidden field', 'VARNAME_3': 'hidden field', 'NL_NAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'CC_3': 'hidden field', 'HASC_3': 'hidden field', });
lyr_GranEscala_2.set('fieldLabels', {'Equipment': 'inline label - always visible', 'begin': 'hidden field', 'end': 'hidden field', 'Tramos_Capacidad_Minima — Sheet1_IC Max (kW)': 'inline label - always visible', 'Tramos_Capacidad_Minima — Sheet1_Capacidad Normalizada (%)': 'hidden field', });
lyr_PequeaEscala_3.set('fieldLabels', {'Transforma': 'inline label - always visible', 'Suma_Capac': 'hidden field', 'Capacidad_': 'inline label - always visible', 'Capacida_1': 'hidden field', 'Criterio q': 'hidden field', 'Cap Nom (k': 'hidden field', 'Coord. X': 'hidden field', 'Coord. Y': 'hidden field', 'Capacidad': 'inline label - visible with data', });
lyr_PequeaEscala_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});