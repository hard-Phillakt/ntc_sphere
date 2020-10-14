

const initMapBox = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0dGVtcGxhdGUiLCJhIjoiY2s0M3I5ZHgzMGEzNDNucXM1cDd0dzl3cSJ9.a2wjLlxz8LzWj9nIoGsshw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        // center: [-73.9751, 40.7289], // starting position 
        center: [37.6438166, 55.7256932], // starting position ,
        zoom: 16 // starting zoom
    });

    // create the popup
    var popup = new mapboxgl.Popup({ offset: 40 }).setText(
        'Научно-технический центр Сфера – один из лидеров российского рынка в сфере внедрения систем контроля надежности и промышленной автоматизации'
    );

    // create DOM element for the marker
    var el = document.createElement('div');
    el.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el)
        .setLngLat([37.643087, 55.7255301])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // disable map zoom when using scroll
    map.scrollZoom.disable();
}

export default initMapBox;
