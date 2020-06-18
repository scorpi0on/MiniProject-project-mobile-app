<template>
    <Page>
        <ActionBar title="User" class="action-bar" />
        <FlexboxLayout width="80%" height="50%">
            <StackLayout orientation="vertical" class="form">
                <GridLayout v-if="isLoggingIn==true" rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="username"
                            autocorrect="false" autocapitalizationType="none"
                            v-model="_username">
                        </TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="password"
                            hint="Password" secure="true" v-model="_password">
                        </TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                </GridLayout>

                <Button width="80%" type="Submit"
                    :text="isLoggingIn ? 'Log In' : 'Logoff'"
                    @tap="signin()"
                    class="btn btn-primary m-t-20"></Button>

            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
    export default {
        props: ["$delegate"],
        methods: {
            async signin() {
                let formData = new FormData();
                formData.append("username", this._username);
                formData.append("password", this._password);

                global.rootURL = "http://192.168.3.34:1337";
                var response = await fetch(global.rootURL +
                "/User/Login", {
                    method: "POST",
                    credentials: "same-origin",
                    body: formData
                });
                if (response.ok) {
                    var data = await response.json();
                    alert(data.message);
                    if (data.isLoggingIn == false) {
                        console.log("alert");
                        this.isLoggingIn = false;
                    }
                } else if (response.status == 401) {
                    var data = await response.text();

                    alert(data.message);
                } else {
                    alert(response.statusText);
                }
            },
            async signoff() {
                global.rootURL = "http://192.168.31.7:1337";
                var response = await fetch(global.rootURL +
                    "/User/Logout", {
                        method: "POST",
                        credentials: "same-origin"
                    });
                if (response.ok) {
                    var data = await response.json();
                    alert(data.message);
                    if (data.isLoggingIn == true) {
                        console.log("alert");
                        this.isLoggingIn = true;
                    }
                } else if (response.status == 401) {
                    var data = await response.text();
                    alert(data);
                } else {
                    alert(response.statusText);
                }
            }
        },

        data() {
            return {
                isLoggingIn: true,
                _username: "clients",
                _password: "12345678"
            };
        }
    };
</script>

<style>
</style>