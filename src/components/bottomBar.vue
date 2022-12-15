<template>
<div class="bottomBar">
    <div class="grey lighten-3">
        <v-container>
            <v-row class=" mx-auto">
                <v-col cols="12" md="4" offset="2" class="pa-15 my-15 text-xl-left ">
                    <h4>JOIN OUR NEWSLETTER</h4>
                    <h1>Contact us</h1>
                    <p class="mt-5">3045 10 Sunrize Avenue, 123-456-7890</p>
                    <p>Mon – Fri: 9:00 am – 8:00 pm,</p>
                    <p>Sat – Sun: 9:00 am – 10 pm</p>
                    <h4>contacts@esbnyc.com</h4>
                    <div class="my-15">
                        <h1>Follow us</h1>
                        <v-spacer></v-spacer>
                        <v-btn v-for="icon in icons" :key="icon" class=" mt-6 " dark icon color="#808080">
                            <v-icon size="30px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                        <p class="mt-5">©2021 Privacy policy</p>
                    </div>
                </v-col>
                <v-col cols="12" md="6" class="pa-10 my-15">
                    <v-card class="" max-width="550">
                        <v-form class="text-left pa-10">
                            <v-text-field label="Enter your Name" single-line outlined></v-text-field>
                            <v-text-field label="Enter a valid email address" single-line outlined></v-text-field>
                            <v-textarea label="Enter your message" single-line outlined></v-textarea>
                            <v-btn color="#f7ca40" class="black--text">
                                submit
                            </v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    
    <v-footer padless class="grey darken-3">
        <v-container>
        <v-row justify="center" no-gutters class="mx-15 pa-15" >
            <v-col class="text-center" v-for="n in 3" :key="n" cols="12" md="4">
                <h3 class="white--text my-10">Headline</h3>
                <p class="white--text my-3">Sample footer text</p>
            </v-col>
            </v-row>
            <h5 class="text-center white--text mx-auto my-12">
                <a href="#" class="text-decoration-underline yellow--text">Website Templates</a> created with
                <a href="#" class="text-decoration-underline yellow--text">Website Builder Software</a>.
            </h5>
                         </v-container>

    </v-footer>
</div>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-instagram',
            'mdi-twitter',
            'mdi-youtube',
        ],
    }),
}
</script>
