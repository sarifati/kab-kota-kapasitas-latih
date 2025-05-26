var wms_layers = [];

var format_kabkota_0 = new ol.format.GeoJSON();
var features_kabkota_0 = format_kabkota_0.readFeatures(json_kabkota_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kabkota_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kabkota_0.addFeatures(features_kabkota_0);
var lyr_kabkota_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kabkota_0, 
                style: style_kabkota_0,
                popuplayertitle: 'kab kota',
                interactive: true,
    title: 'kab kota<br />\
    <img src="styles/legend/kabkota_0_0.png" /> 0<br />\
    <img src="styles/legend/kabkota_0_1.png" /> 1 - 1290<br />\
    <img src="styles/legend/kabkota_0_2.png" /> 1290 - 5575<br />\
    <img src="styles/legend/kabkota_0_3.png" /> 5575 - 1141538<br />' });

lyr_kabkota_0.setVisible(true);
var layersList = [lyr_kabkota_0];
lyr_kabkota_0.set('fieldAliases', {'fid': 'fid', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'Kapasitas Latih Kab/Kota_KDPPUM': 'Kapasitas Latih Kab/Kota_KDPPUM', 'Kapasitas Latih Kab/Kota_WADMKK': 'Kapasitas Latih Kab/Kota_WADMKK', 'Kapasitas Latih Kab/Kota_WADMPR': 'Kapasitas Latih Kab/Kota_WADMPR', 'Kapasitas Latih Kab/Kota_KAPASITAS_LATIH': 'Kapasitas Latih Kab/Kota_KAPASITAS_LATIH', });
lyr_kabkota_0.set('fieldImages', {'fid': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'Kapasitas Latih Kab/Kota_KDPPUM': 'Range', 'Kapasitas Latih Kab/Kota_WADMKK': 'TextEdit', 'Kapasitas Latih Kab/Kota_WADMPR': 'TextEdit', 'Kapasitas Latih Kab/Kota_KAPASITAS_LATIH': 'Range', });
lyr_kabkota_0.set('fieldLabels', {'fid': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'Kapasitas Latih Kab/Kota_KDPPUM': 'hidden field', 'Kapasitas Latih Kab/Kota_WADMKK': 'inline label - visible with data', 'Kapasitas Latih Kab/Kota_WADMPR': 'inline label - visible with data', 'Kapasitas Latih Kab/Kota_KAPASITAS_LATIH': 'inline label - visible with data', });
lyr_kabkota_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});