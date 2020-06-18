<template>
    <Page title="Home" class="page">
        <ActionBar title="Home" class="action-bar" />
        <StackLayout>
            <BottomNavigation height="100px">
                <TabStrip>
                    <TabStripItem>
                        <Label text="Home"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Estate"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Bedrooms"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="User"></Label>
                    </TabStripItem>
                </TabStrip>
                <TabContentItem>
                    <ScrollView>
                        <StackLayout class="home-panel">
                            <CardView v-for="highlight in highlights"
                                class="card" elevation="40" radius="10"
                                ios:shadowRadius="3">
                                <StackLayout class="card-layout">
                                    <Image :src="highlight.Image_URL"
                                        height="300" stretch="aspectFill" />
                                    <Label class="h2"
                                        :text="highlight.Property_Title" />
                                    <Label class="body" textWrap="true"
                                        :text="highlight.Estate" />
                                    <label class="body"
                                        :text="'Rent: $'+highlight.Rent" />
                                </StackLayout>
                            </CardView>
                        </StackLayout>
                    </ScrollView>
                </TabContentItem>
                <TabContentItem>
                    <ListView for="estate in estates" @itemTap="Searchestate">
                        <v-template>
                            <StackLayout orientation="vertical" height="50">
                                <Label :text="estate.name" class="h2" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem>
                    <ListView for="bedroom in bedrooms"
                        @itemTap="SearchBedrooms">
                        <v-template>
                            <StackLayout orientation="vertical" height="50">
                                <Label :text="bedroom.name" class="h2" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem>

                    <StackLayout orientation="vertical">
                        <FlexboxLayout flexDirection="row" height="150">
                            <Image
                                src="http://img1.imgtn.bdimg.com/it/u=3974834430,2578081919&fm=26&gp=0.jpg"
                                style="width: 40%" stretch="aspectFill" />
                            <Label text="Babe" style="width: 60%"
                                textAlignment="center" />
                        </FlexboxLayout>
                        <Button text=" Login/Logoff" textAlignment="center"
                            height="100" @tap="Signin"
                            class="btn btn-primary btn rounded-lg" />
                        <Button text="My Rentals" textAlignment="center"
                            height="100" @tap="My_rentals"
                            class="btn btn-primary btn rounded-lg" />
                    </StackLayout>


                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import my_rentals from "./my_rentals";
    import sign_in from "./sign_in";
    import estate_search from "./estate_search";
    import bedroom_search from "./bedroom_search";
    export default {
        methods: {
            Searchestate: function(args) {
                this.$navigateTo(estate_search, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedEstate: args.item.name,
                        $delegate: this
                    }
                });
            },
            SearchBedrooms: function(args) {
                this.$navigateTo(bedroom_search, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedBedroom: args.item.name,
                        $delegate: this
                    }
                });
            },
            Signin: function(args) {
                this.$navigateTo(sign_in, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        $delegate: this
                    }
                });
            },
            My_rentals: function(args) {
                this.$navigateTo(my_rentals, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        $delegate: this
                    }
                });
            }
        },
        async mounted() {
            global.rootURL = "http://192.168.3.34:1337";
            var response = await fetch(global.rootURL, {
                method: "GET",
                credentials: "same-origin"
            });
            if (response.ok) {
                this.highlights = await response.json();
                console.log(JSON.stringify(this.highlights));
            } else {
                console.log(response.statusText);
            }
        },
        data() {
            return {
                highlights: [],
                estates: [{
                        name: "Festival City"
                    },
                    {
                        name: "Tin Ma Court"
                    },
                    {
                        name: "City One Shatin"
                    }
                ],
                bedrooms: [{
                        name: "Bedroom <= 2"
                    },
                    {
                        name: "Bedroom >= 3"
                    }
                ],
            };
        }
    };
</script>