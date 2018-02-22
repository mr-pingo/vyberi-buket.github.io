ymaps.ready(init);
    var myMap,
        myPlacemark;
    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.74469931, 37.61659984],
            zoom: 16
        });
        myMap.controls.remove('typeSelector').remove('trafficControl').remove('rulerControl');
        myMap.behaviors.disable([
            'scrollZoom'
        ]);
        myPin = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            //iconImageHref: 'images/yaicon.svg',
            //iconImageSize: [36, 20],
            //iconImageOffset: [-22, -42]
        });
        myPlacemark = new ymaps.Placemark([55.74469931, 37.61659984], { 
            balloonContentHeader: '',//логотип
            balloonContentBody: '',//адрес
            balloonContentFooter: '',//время работы
            hintContent: ''//заголовок
        });
        myPin.add(myPlacemark);
        myMap.geoObjects.add(myPin);
    }