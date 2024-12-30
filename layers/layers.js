ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([372392.996531, 6430084.887573, 431008.252136, 6471079.918643]);
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
var format_ARTESANATO_1 = new ol.format.GeoJSON();
var features_ARTESANATO_1 = format_ARTESANATO_1.readFeatures(json_ARTESANATO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ARTESANATO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARTESANATO_1.addFeatures(features_ARTESANATO_1);
var lyr_ARTESANATO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARTESANATO_1, 
                style: style_ARTESANATO_1,
                popuplayertitle: "ARTESANATO",
                interactive: true,
                title: '<img src="styles/legend/ARTESANATO_1.png" /> ARTESANATO'
            });
var format_ARTESCNICAS_2 = new ol.format.GeoJSON();
var features_ARTESCNICAS_2 = format_ARTESCNICAS_2.readFeatures(json_ARTESCNICAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ARTESCNICAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARTESCNICAS_2.addFeatures(features_ARTESCNICAS_2);
var lyr_ARTESCNICAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARTESCNICAS_2, 
                style: style_ARTESCNICAS_2,
                popuplayertitle: "ARTES CÊNICAS",
                interactive: true,
                title: '<img src="styles/legend/ARTESCNICAS_2.png" /> ARTES CÊNICAS'
            });
var format_ARTESVISUAIS_3 = new ol.format.GeoJSON();
var features_ARTESVISUAIS_3 = format_ARTESVISUAIS_3.readFeatures(json_ARTESVISUAIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ARTESVISUAIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARTESVISUAIS_3.addFeatures(features_ARTESVISUAIS_3);
var lyr_ARTESVISUAIS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARTESVISUAIS_3, 
                style: style_ARTESVISUAIS_3,
                popuplayertitle: "ARTES VISUAIS",
                interactive: true,
                title: '<img src="styles/legend/ARTESVISUAIS_3.png" /> ARTES VISUAIS'
            });
var format_AUDIOVISUAL_4 = new ol.format.GeoJSON();
var features_AUDIOVISUAL_4 = format_AUDIOVISUAL_4.readFeatures(json_AUDIOVISUAL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AUDIOVISUAL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDIOVISUAL_4.addFeatures(features_AUDIOVISUAL_4);
var lyr_AUDIOVISUAL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AUDIOVISUAL_4, 
                style: style_AUDIOVISUAL_4,
                popuplayertitle: "AUDIOVISUAL",
                interactive: true,
                title: '<img src="styles/legend/AUDIOVISUAL_4.png" /> AUDIOVISUAL'
            });
var format_CARNAVAL_5 = new ol.format.GeoJSON();
var features_CARNAVAL_5 = format_CARNAVAL_5.readFeatures(json_CARNAVAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CARNAVAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARNAVAL_5.addFeatures(features_CARNAVAL_5);
var lyr_CARNAVAL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARNAVAL_5, 
                style: style_CARNAVAL_5,
                popuplayertitle: "CARNAVAL",
                interactive: true,
                title: '<img src="styles/legend/CARNAVAL_5.png" /> CARNAVAL'
            });
var format_CULTURAIDENTITRIA_6 = new ol.format.GeoJSON();
var features_CULTURAIDENTITRIA_6 = format_CULTURAIDENTITRIA_6.readFeatures(json_CULTURAIDENTITRIA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CULTURAIDENTITRIA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULTURAIDENTITRIA_6.addFeatures(features_CULTURAIDENTITRIA_6);
var lyr_CULTURAIDENTITRIA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CULTURAIDENTITRIA_6, 
                style: style_CULTURAIDENTITRIA_6,
                popuplayertitle: "CULTURA IDENTITÁRIA",
                interactive: true,
                title: '<img src="styles/legend/CULTURAIDENTITRIA_6.png" /> CULTURA IDENTITÁRIA'
            });
var format_CULTURATRADICIONALISTA_7 = new ol.format.GeoJSON();
var features_CULTURATRADICIONALISTA_7 = format_CULTURATRADICIONALISTA_7.readFeatures(json_CULTURATRADICIONALISTA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CULTURATRADICIONALISTA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULTURATRADICIONALISTA_7.addFeatures(features_CULTURATRADICIONALISTA_7);
var lyr_CULTURATRADICIONALISTA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CULTURATRADICIONALISTA_7, 
                style: style_CULTURATRADICIONALISTA_7,
                popuplayertitle: "CULTURA TRADICIONALISTA",
                interactive: true,
                title: '<img src="styles/legend/CULTURATRADICIONALISTA_7.png" /> CULTURA TRADICIONALISTA'
            });
var format_DANA_8 = new ol.format.GeoJSON();
var features_DANA_8 = format_DANA_8.readFeatures(json_DANA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_DANA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANA_8.addFeatures(features_DANA_8);
var lyr_DANA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANA_8, 
                style: style_DANA_8,
                popuplayertitle: "DANÇA",
                interactive: true,
                title: '<img src="styles/legend/DANA_8.png" /> DANÇA'
            });
var format_ECONOMIACRIATIVA_9 = new ol.format.GeoJSON();
var features_ECONOMIACRIATIVA_9 = format_ECONOMIACRIATIVA_9.readFeatures(json_ECONOMIACRIATIVA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ECONOMIACRIATIVA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECONOMIACRIATIVA_9.addFeatures(features_ECONOMIACRIATIVA_9);
var lyr_ECONOMIACRIATIVA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECONOMIACRIATIVA_9, 
                style: style_ECONOMIACRIATIVA_9,
                popuplayertitle: "ECONOMIA CRIATIVA",
                interactive: true,
                title: '<img src="styles/legend/ECONOMIACRIATIVA_9.png" /> ECONOMIA CRIATIVA'
            });
var format_ESPAOARTEECULTURA_10 = new ol.format.GeoJSON();
var features_ESPAOARTEECULTURA_10 = format_ESPAOARTEECULTURA_10.readFeatures(json_ESPAOARTEECULTURA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ESPAOARTEECULTURA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPAOARTEECULTURA_10.addFeatures(features_ESPAOARTEECULTURA_10);
var lyr_ESPAOARTEECULTURA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESPAOARTEECULTURA_10, 
                style: style_ESPAOARTEECULTURA_10,
                popuplayertitle: "ESPAÇO ARTE E CULTURA",
                interactive: true,
                title: '<img src="styles/legend/ESPAOARTEECULTURA_10.png" /> ESPAÇO ARTE E CULTURA'
            });
var format_LITERATURA_11 = new ol.format.GeoJSON();
var features_LITERATURA_11 = format_LITERATURA_11.readFeatures(json_LITERATURA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_LITERATURA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LITERATURA_11.addFeatures(features_LITERATURA_11);
var lyr_LITERATURA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LITERATURA_11, 
                style: style_LITERATURA_11,
                popuplayertitle: "LITERATURA",
                interactive: true,
                title: '<img src="styles/legend/LITERATURA_11.png" /> LITERATURA'
            });
var format_MSICA_12 = new ol.format.GeoJSON();
var features_MSICA_12 = format_MSICA_12.readFeatures(json_MSICA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_MSICA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSICA_12.addFeatures(features_MSICA_12);
var lyr_MSICA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSICA_12, 
                style: style_MSICA_12,
                popuplayertitle: "MÚSICA",
                interactive: true,
                title: '<img src="styles/legend/MSICA_12.png" /> MÚSICA'
            });
var format_PATRIMNIO_13 = new ol.format.GeoJSON();
var features_PATRIMNIO_13 = format_PATRIMNIO_13.readFeatures(json_PATRIMNIO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PATRIMNIO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATRIMNIO_13.addFeatures(features_PATRIMNIO_13);
var lyr_PATRIMNIO_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATRIMNIO_13, 
                style: style_PATRIMNIO_13,
                popuplayertitle: "PATRIMÔNIO",
                interactive: true,
                title: '<img src="styles/legend/PATRIMNIO_13.png" /> PATRIMÔNIO'
            });
var format_TEATRO_14 = new ol.format.GeoJSON();
var features_TEATRO_14 = format_TEATRO_14.readFeatures(json_TEATRO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_TEATRO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEATRO_14.addFeatures(features_TEATRO_14);
var lyr_TEATRO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEATRO_14, 
                style: style_TEATRO_14,
                popuplayertitle: "TEATRO",
                interactive: true,
                title: '<img src="styles/legend/TEATRO_14.png" /> TEATRO'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ARTESANATO_1.setVisible(true);lyr_ARTESCNICAS_2.setVisible(true);lyr_ARTESVISUAIS_3.setVisible(true);lyr_AUDIOVISUAL_4.setVisible(true);lyr_CARNAVAL_5.setVisible(true);lyr_CULTURAIDENTITRIA_6.setVisible(true);lyr_CULTURATRADICIONALISTA_7.setVisible(true);lyr_DANA_8.setVisible(true);lyr_ECONOMIACRIATIVA_9.setVisible(true);lyr_ESPAOARTEECULTURA_10.setVisible(true);lyr_LITERATURA_11.setVisible(true);lyr_MSICA_12.setVisible(true);lyr_PATRIMNIO_13.setVisible(true);lyr_TEATRO_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ARTESANATO_1,lyr_ARTESCNICAS_2,lyr_ARTESVISUAIS_3,lyr_AUDIOVISUAL_4,lyr_CARNAVAL_5,lyr_CULTURAIDENTITRIA_6,lyr_CULTURATRADICIONALISTA_7,lyr_DANA_8,lyr_ECONOMIACRIATIVA_9,lyr_ESPAOARTEECULTURA_10,lyr_LITERATURA_11,lyr_MSICA_12,lyr_PATRIMNIO_13,lyr_TEATRO_14];
lyr_ARTESANATO_1.set('fieldAliases', {'qc_id': 'qc_id', 'lat': 'lat', 'long': 'long', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_ARTESCNICAS_2.set('fieldAliases', {'qc_id': 'qc_id', 'lat': 'lat', 'long': 'long', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_ARTESVISUAIS_3.set('fieldAliases', {'qc_id': 'qc_id', 'lat': 'lat', 'long': 'long', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_AUDIOVISUAL_4.set('fieldAliases', {'qc_id': 'qc_id', 'lat': 'lat', 'long': 'long', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_CARNAVAL_5.set('fieldAliases', {'qc_id': 'qc_id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_CULTURAIDENTITRIA_6.set('fieldAliases', {'qc_id': 'qc_id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_CULTURATRADICIONALISTA_7.set('fieldAliases', {'qc_id': 'qc_id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_DANA_8.set('fieldAliases', {'qc_id': 'qc_id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_ECONOMIACRIATIVA_9.set('fieldAliases', {'qc_id': 'qc_id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_ESPAOARTEECULTURA_10.set('fieldAliases', {'qc_id': 'qc_id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_LITERATURA_11.set('fieldAliases', {'id': 'id', 'longitude': 'longitude', 'latitude': 'latitude', 'nome': 'nome', 'email': 'email', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'foto, rede': 'foto, rede', });
lyr_MSICA_12.set('fieldAliases', {'qc_id': 'qc_id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_PATRIMNIO_13.set('fieldAliases', {'id': 'id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome museu': 'nome museu', 'endereço': 'endereço', 'contato': 'contato', 'email': 'email', 'tipo': 'tipo', 'tipologia': 'tipologia', 'descriçã': 'descriçã', 'acessibili': 'acessibili', 'horários': 'horários', 'observaç�': 'observaç�', });
lyr_TEATRO_14.set('fieldAliases', {'id': 'id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', });
lyr_ARTESANATO_1.set('fieldImages', {'qc_id': 'Range', 'lat': 'TextEdit', 'long': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_ARTESCNICAS_2.set('fieldImages', {'qc_id': 'Range', 'lat': 'TextEdit', 'long': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_ARTESVISUAIS_3.set('fieldImages', {'qc_id': 'Range', 'lat': 'TextEdit', 'long': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_AUDIOVISUAL_4.set('fieldImages', {'qc_id': 'Range', 'lat': 'TextEdit', 'long': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_CARNAVAL_5.set('fieldImages', {'qc_id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_CULTURAIDENTITRIA_6.set('fieldImages', {'qc_id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_CULTURATRADICIONALISTA_7.set('fieldImages', {'qc_id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_DANA_8.set('fieldImages', {'qc_id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_ECONOMIACRIATIVA_9.set('fieldImages', {'qc_id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_ESPAOARTEECULTURA_10.set('fieldImages', {'qc_id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_LITERATURA_11.set('fieldImages', {'id': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'nome': 'TextEdit', 'email': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'foto, rede': 'TextEdit', });
lyr_MSICA_12.set('fieldImages', {'qc_id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_PATRIMNIO_13.set('fieldImages', {'id': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome museu': 'TextEdit', 'endereço': 'TextEdit', 'contato': 'TextEdit', 'email': 'TextEdit', 'tipo': 'TextEdit', 'tipologia': 'TextEdit', 'descriçã': 'TextEdit', 'acessibili': 'TextEdit', 'horários': 'TextEdit', 'observaç�': 'TextEdit', });
lyr_TEATRO_14.set('fieldImages', {'id': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', });
lyr_ARTESANATO_1.set('fieldLabels', {'qc_id': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_ARTESCNICAS_2.set('fieldLabels', {'qc_id': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_ARTESVISUAIS_3.set('fieldLabels', {'qc_id': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_AUDIOVISUAL_4.set('fieldLabels', {'qc_id': 'hidden field', 'lat': 'hidden field', 'long': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_CARNAVAL_5.set('fieldLabels', {'qc_id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_CULTURAIDENTITRIA_6.set('fieldLabels', {'qc_id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_CULTURATRADICIONALISTA_7.set('fieldLabels', {'qc_id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_DANA_8.set('fieldLabels', {'qc_id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_ECONOMIACRIATIVA_9.set('fieldLabels', {'qc_id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_ESPAOARTEECULTURA_10.set('fieldLabels', {'qc_id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_LITERATURA_11.set('fieldLabels', {'id': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'nome': 'no label', 'email': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'foto, rede': 'no label', });
lyr_MSICA_12.set('fieldLabels', {'qc_id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_PATRIMNIO_13.set('fieldLabels', {'id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome museu': 'no label', 'endereço': 'no label', 'contato': 'no label', 'email': 'no label', 'tipo': 'no label', 'tipologia': 'no label', 'descriçã': 'no label', 'acessibili': 'no label', 'horários': 'no label', 'observaç�': 'no label', });
lyr_TEATRO_14.set('fieldLabels', {'id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', });
lyr_TEATRO_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});