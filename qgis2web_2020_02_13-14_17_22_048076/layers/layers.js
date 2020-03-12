var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_restogrenoble_1 = new ol.format.GeoJSON();
var features_restogrenoble_1 = format_restogrenoble_1.readFeatures(json_restogrenoble_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restogrenoble_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restogrenoble_1.addFeatures(features_restogrenoble_1);cluster_restogrenoble_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_restogrenoble_1
});
var lyr_restogrenoble_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_restogrenoble_1, 
                style: style_restogrenoble_1,
                interactive: true,
                title: '<img src="styles/legend/restogrenoble_1.png" /> restogrenoble'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_restogrenoble_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_restogrenoble_1];
lyr_restogrenoble_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:street': 'addr:street', 'amenity': 'amenity', 'cuisine': 'cuisine', 'opening_hours': 'opening_hours', 'wheelchair': 'wheelchair', 'brand': 'brand', 'brand:wikidata': 'brand:wikidata', 'brand:wikipedia': 'brand:wikipedia', 'diet:vegetarian': 'diet:vegetarian', 'takeaway': 'takeaway', 'addr:city': 'addr:city', 'addr:country': 'addr:country', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'capacity': 'capacity', 'outdoor_seating': 'outdoor_seating', 'phone': 'phone', 'diet:vegan': 'diet:vegan', 'old_name': 'old_name', 'short_name': 'short_name', 'drive_in': 'drive_in', 'drive_through': 'drive_through', 'survey:date': 'survey:date', 'website': 'website', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'email': 'email', 'delivery': 'delivery', 'contact:phone': 'contact:phone', 'smoking': 'smoking', 'name:fr': 'name:fr', 'internet_access': 'internet_access', 'changing_table': 'changing_table', 'drinking_water': 'drinking_water', 'fax': 'fax', 'opening_hours:signed': 'opening_hours:signed', 'addr:housename': 'addr:housename', 'alt_name': 'alt_name', 'int_name': 'int_name', 'contact:email': 'contact:email', 'payment:bitcoin': 'payment:bitcoin', 'payment:cryptocurrencies': 'payment:cryptocurrencies', 'payment:litecoin': 'payment:litecoin', 'craft': 'craft', 'all_you_can_eat': 'all_you_can_eat', 'mapillary': 'mapillary', 'contact:website': 'contact:website', 'air_conditioning': 'air_conditioning', 'reservation': 'reservation', 'shop': 'shop', 'hallal': 'hallal', 'brand:website': 'brand:website', 'highchair': 'highchair', 'description': 'description', 'name:ja': 'name:ja', 'bar': 'bar', 'internet_access:fee': 'internet_access:fee', 'contact:facebook': 'contact:facebook', 'diet:halal': 'diet:halal', 'tobbaco': 'tobbaco', 'old_old_name': 'old_old_name', 'contact:housenumber': 'contact:housenumber', 'currency:XLT': 'currency:XLT', 'payment:cash:XLT-CARN': 'payment:cash:XLT-CARN', 'origin': 'origin', 'payment:cash': 'payment:cash', 'payment:credit_cards': 'payment:credit_cards', 'payment:debit_cards': 'payment:debit_cards', 'payment:electronic_purses': 'payment:electronic_purses', 'level': 'level', 'entrance': 'entrance', 'operator': 'operator', 'official_name': 'official_name', });
lyr_restogrenoble_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:street': '', 'amenity': '', 'cuisine': '', 'opening_hours': '', 'wheelchair': '', 'brand': '', 'brand:wikidata': '', 'brand:wikipedia': '', 'diet:vegetarian': '', 'takeaway': '', 'addr:city': '', 'addr:country': '', 'addr:housenumber': '', 'addr:postcode': '', 'capacity': '', 'outdoor_seating': '', 'phone': '', 'diet:vegan': '', 'old_name': '', 'short_name': '', 'drive_in': '', 'drive_through': '', 'survey:date': '', 'website': '', 'wikidata': '', 'wikipedia': '', 'email': '', 'delivery': '', 'contact:phone': '', 'smoking': '', 'name:fr': '', 'internet_access': '', 'changing_table': '', 'drinking_water': '', 'fax': '', 'opening_hours:signed': '', 'addr:housename': '', 'alt_name': '', 'int_name': '', 'contact:email': '', 'payment:bitcoin': '', 'payment:cryptocurrencies': '', 'payment:litecoin': '', 'craft': '', 'all_you_can_eat': '', 'mapillary': '', 'contact:website': '', 'air_conditioning': '', 'reservation': '', 'shop': '', 'hallal': '', 'brand:website': '', 'highchair': '', 'description': '', 'name:ja': '', 'bar': '', 'internet_access:fee': '', 'contact:facebook': '', 'diet:halal': '', 'tobbaco': '', 'old_old_name': '', 'contact:housenumber': '', 'currency:XLT': '', 'payment:cash:XLT-CARN': '', 'origin': '', 'payment:cash': '', 'payment:credit_cards': '', 'payment:debit_cards': '', 'payment:electronic_purses': '', 'level': '', 'entrance': '', 'operator': '', 'official_name': '', });
lyr_restogrenoble_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:street': 'no label', 'amenity': 'no label', 'cuisine': 'no label', 'opening_hours': 'no label', 'wheelchair': 'no label', 'brand': 'no label', 'brand:wikidata': 'no label', 'brand:wikipedia': 'no label', 'diet:vegetarian': 'no label', 'takeaway': 'no label', 'addr:city': 'no label', 'addr:country': 'no label', 'addr:housenumber': 'no label', 'addr:postcode': 'no label', 'capacity': 'no label', 'outdoor_seating': 'no label', 'phone': 'no label', 'diet:vegan': 'no label', 'old_name': 'no label', 'short_name': 'no label', 'drive_in': 'no label', 'drive_through': 'no label', 'survey:date': 'no label', 'website': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'email': 'no label', 'delivery': 'no label', 'contact:phone': 'no label', 'smoking': 'no label', 'name:fr': 'no label', 'internet_access': 'no label', 'changing_table': 'no label', 'drinking_water': 'no label', 'fax': 'no label', 'opening_hours:signed': 'no label', 'addr:housename': 'no label', 'alt_name': 'no label', 'int_name': 'no label', 'contact:email': 'no label', 'payment:bitcoin': 'no label', 'payment:cryptocurrencies': 'no label', 'payment:litecoin': 'no label', 'craft': 'no label', 'all_you_can_eat': 'no label', 'mapillary': 'no label', 'contact:website': 'no label', 'air_conditioning': 'no label', 'reservation': 'no label', 'shop': 'no label', 'hallal': 'no label', 'brand:website': 'no label', 'highchair': 'no label', 'description': 'no label', 'name:ja': 'no label', 'bar': 'no label', 'internet_access:fee': 'no label', 'contact:facebook': 'no label', 'diet:halal': 'no label', 'tobbaco': 'no label', 'old_old_name': 'no label', 'contact:housenumber': 'no label', 'currency:XLT': 'no label', 'payment:cash:XLT-CARN': 'no label', 'origin': 'no label', 'payment:cash': 'no label', 'payment:credit_cards': 'no label', 'payment:debit_cards': 'no label', 'payment:electronic_purses': 'no label', 'level': 'no label', 'entrance': 'no label', 'operator': 'no label', 'official_name': 'no label', });
lyr_restogrenoble_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});