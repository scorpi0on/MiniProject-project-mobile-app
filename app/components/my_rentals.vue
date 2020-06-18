<template>
    <Page>
        <ActionBar title="My Rentals" class="action-bar" />

        <ListView for="Myrental in Myrentals" @itemTap="Searchestate">
            <v-template>
                <StackLayout orientation="vertical" height="80">
                    <label :text="Myrental.Property_Title"
                        class="h1 font-weight: bold;" />
                    <label :text="Myrental.Estate" />
                </StackLayout>
            </v-template>
        </ListView>


    </Page>
</template>

<script>
    export default {
        props: ["$delegate"],
        async mounted() {
            global.rootURL = "http://192.168.3.34:1337";
            var response = await fetch(global.rootURL + "/user/2/rents", {
                method: "GET",
                credentials: "same-origin"
            });
            if (response.ok) {
                this.Myrentals = await response.json();
                console.log(JSON.stringify(this.Myrentals));
            } else {
                console.log(response.statusText);
            }
        },
        data() {
            return {
                Myrentals: []
            };
        }
    };
</script>

<style>
</style>