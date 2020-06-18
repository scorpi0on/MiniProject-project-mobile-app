<template>
    <page>
        <WebView
            :src="'https://leafletapi.mtchoy.now.sh/index.html?lat='+qLatitude+'&lng='+qLongitude+'&zoom=17&markerLat=22.341072&marketLng=114.179645&markerTitle=AC%20Hall&locate=true'" />
    </page>
</template>

<script>
    export default {
        props: ["onmap", "qLongitude", "qLatitude", "$delegate"],

        data() {
            return {
                currentGeoLocation: {
                    latitude: null,
                    longitude: null,
                    altitude: null,
                    direction: null
                }
            };
        }
    };
</script>

<style>
</style>