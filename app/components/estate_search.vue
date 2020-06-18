<template>
    <Page>
        <ActionBar title="Estate Search" class="action-bar" />
        <ListView v-if="Estatename=='Festival City'" class="list-group"
            for="Festival_City in Festival_Citys" @itemTap="Detail">
            <v-template>
                <StackLayout orientation="vertical" height="80">
                    <label :text="Festival_City.Property_Title"
                        class="h1 font-weight: bold;" />
                    <label :text="Festival_City.Estate" />
                </StackLayout>
            </v-template>
        </ListView>
        <ListView v-if="Estatename=='Tin Ma Court'" class="list-group"
            for="Tin_Ma_Court in Tin_Ma_Courts" @itemTap="Detail">
            <v-template>
                <StackLayout orientation="vertical" height="80">
                    <label :text="Tin_Ma_Court.Property_Title"
                        class="h1 font-weight: bold;" />
                    <label :text="Tin_Ma_Court.Estate" />
                </StackLayout>
            </v-template>
        </ListView>
        <ListView v-if="Estatename=='City One Shatin'" class="list-group"
            for="City_One_Shatin in City_One_Shatins" @itemTap="Detail">
            <v-template>
                <StackLayout orientation="vertical" height="80">
                    <label :text="City_One_Shatin.Property_Title"
                        class="h1 font-weight: bold;" />
                    <label :text="City_One_Shatin.Estate" />
                </StackLayout>
            </v-template>
        </ListView>
    </Page>
</template>

<script>
    import details from "./details";
    export default {
        props: ["selectedEstate", "$delegate"],
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
            var response = await fetch(
                global.rootURL + "/Apartment/Search/?Estate=", {
                    method: "GET",
                    credentials: "same-origin"
                }
            );
            if (response.ok) {
                this.Getitems = await response.json();
            } else {
                console.log(response.statusText);
            }
            this.Festival_Citys = this.Getitems.filter(function(p) {
                return p.Estate == "Festival City";
            });
            this.Tin_Ma_Courts = this.Getitems.filter(function(p) {
                return p.Estate == "Tin Ma Court";
            });
            this.City_One_Shatins = this.Getitems.filter(function(p) {
                return p.Estate == "City One Shatin";
            });
        },

        data() {
            return {
                Estatename: this.selectedEstate,
                Getitems: [],
                Festival_Citys: [],
                Tin_Ma_Courts: [],
                City_One_Shatins: []
            };
        }
    };
</script>