<template>
<v-container>
    <div id="mocks" class="text-center">
        <h1>Our Mockup projects</h1>
        <v-row no-gutters>
            <v-col cols="12" class="mt-10">
                <div style="margin-left: 130px;">
                    <v-img max-height="276" max-width="276" src="../assets/images/mock.jpg" class="pa-7 secondary rounded-circle d-inline-block shirt"></v-img>
                    <v-img max-height="628" max-width="628" src="../assets/images/mock3.jpg" class="pa-7 secondary rounded-circle d-inline-block"></v-img>
                </div>
                <div class="bgborder mx-auto d-flex justify-space-around">
                    <v-img max-height="370" max-width="370" src="../assets/images/mock2.jpg" class="pa-7  rounded-circle d-inline-block  d-flex align-center  book"></v-img>
                </div>
                <div class="bgborder1 "></div>
                <div class="bground"></div>
            </v-col>
        </v-row>
    </div>
    <v-row no-gutters class="textcontent d-flex justify-space-between">
        <v-col md="4" offset-md="4">
            <p class=" ml-auto pa-4 mb-10">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                <v-hover  v-slot="{ hover }">
            <v-btn tile  color="#f6da0a"   :class="{ 'on-hover': hover }" class="ml-15 my-15 pa-6">
                LEARN MORE
            </v-btn>
                </v-hover>
        </v-col>
    </v-row>

</v-container>
</template>
