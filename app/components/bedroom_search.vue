<template>
    <Page>
        <ActionBar title="Bedroom Search" class="action-bar" />
        <ListView v-if="Bedroomname=='Bedroom <= 2'" class="list-group"
            for="BedroomS2 in BedroomS2s" @itemTap="Detail">
            <v-template>
                <StackLayout orientation="vertical" height="80">
                    <label :text="BedroomS2.Property_Title"
                        class="h1 font-weight: bold;" />
                    <label :text="BedroomS2.Estate" />
                </StackLayout>
            </v-template>
        </ListView>
        <ListView v-if="Bedroomname=='Bedroom >= 3'" class="list-group"
            for="BedroomL3 in BedroomL3s" @itemTap="Detail">
            <v-template>
                <StackLayout orientation="vertical" height="80">
                    <label :text="BedroomL3.Property_Title"
                        class="h1 font-weight: bold;" />
                    <label :text="BedroomL3.Estate" />
                </StackLayout>
            </v-template>
        </ListView>




    </Page>
</template>

<script>
    import details from "./details";
    export default {
        props: ["selectedBedroom", "$delegate"],
        methods: {
            Detail: function(args) {
                this.$navigateTo(details, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedApartment: args.item,
                        $delegate: this
                    }
                });
            }
        },

        async mounted() {
			 global.rootURL = "http://192.168.3.34:1337";
            var response = await fetch(global.rootURL +
                "/Apartment/Search/?", {
                    method: "GET",
                    credentials: "same-origin"
                });
            if (response.ok) {
                this.Getitems = await response.json();
            } else {
                console.log(response.statusText);
            }
            this.BedroomS2s = this.Getitems.filter(function(p) {
                return p.Bedrooms < 3;
            });

            this.BedroomL3s = this.Getitems.filter(function(p) {
                return p.Bedrooms > 2;
            });
        },

        data() {
            return {
                Bedroomname: this.selectedBedroom,
                Getitems: [],
                BedroomS2s: [],
                BedroomL3s: []
            };
        }
    };
</script>