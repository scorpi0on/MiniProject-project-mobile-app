<template>
  <Page>
    <ActionBar title="Detail" class="action-bar" />
    <ScrollView orientation="vertical">
      <StackLayout orientation="vertical" margin="10">
        <Image :src="selectedApartment.Image_URL" height="300" stretch="aspectFill" />
        <Label class="h1" :text="selectedApartment.Property_Title" />
        <GridLayout columns="auto, auto, auto" rows="auto, auto">
          <Label col="0" row="0" :text="'Estate: '+selectedApartment.Estate+', '" />
          <Label col="1" row="0" :text="'Bredroom: '+selectedApartment.Bedrooms" />
          <Label col="0" row="1" :text="'Rent Price: $' + selectedApartment.Rent+', '" />
          <Label col="1" row="1" :text="'Tenants: '+selectedApartment.Expected_Tenants+', '" />
          <Label col="2" row="1" :text="'Area: '+selectedApartment.Gross_Area" />
        </GridLayout>
        <GridLayout columns="*, *" rows="50, 50">
          <Button
            col="0"
            row="0"
            text="Move-in"
            @tap="addtoMine()"
            class="btn btn-primary btn rounded-lg"
          />
          <Button
            col="1"
            row="0"
            text="Address"
            @tap="showmap()"
            class="btn btn-primary btn rounded-lg"
          />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import maps from "./maps";
export default {
  props: ["selectedApartment", "$delegate"],
  methods: {
    showmap: function() {
      this.$navigateTo(maps, {
        transition: {},
        transitionIOS: {},
        transitionAndroid: {},
        props: {
          onmap: this.selectedApartment.Estate,
          qLatitude: this.selectedApartment.Latitude,
          qLongitude: this.selectedApartment.Longitude,
          $delegate: this
        }
      });
    },
    async addtoMine() {
      var result = await confirm({
        title: "Confirm?",
        message: "This apartment will added to your rentals.",
        okButtonText: "Yes",
        cancelButtonText: "Cancel"
      });
      if (result) {
        global.rootURL = "http://192.168.3.34:1337";
        var response = await fetch(
          global.rootURL +
            "/user/" +
            2 +
            "/rents/add/" +
            this.selectedApartment.id,
          {
            method: "GET",
            credentials: "same-origin"
          }
        );
        if (response.ok) {
          var data = await response.json();
          alert(data.message);
        } else {
          alert(response.status + ": " + response.statusText);
        }
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>