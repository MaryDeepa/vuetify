<template>
<div class="yellow accent-4">
    <v-container>
        <v-row class="company">
            <v-col cols="12" md="4" offset="2" class="pa-15 my-15 text-xl-left ">
                <h1>Company</h1>
                <h3 class="mt-4">Elementum eu facilisis sed odio morbi quis</h3>
                <p class="mt-4 text-justify"> Massa ultricies mi quis hendrerit dolor magna eget est. Lacinia at quis risus sed vulputate odio ut enim blandit. Auctor elit sed vulputate mi sit. Massa tincidunt dui ut ornare lectus. Turpis egestas sed tempus urna et.
                    Diam vulputate ut pharetra sit amet aliquam id. Nisi est sit amet facilisis. In nisl nisi scelerisque eu ultrices vitae.Massa ultricies mi quis hendrerit dolor magna eget est. Lacinia at quis risus sed vulputate odio ut enim blandit. Auctor elit sed vulputate mi sit. Massa tincidunt dui ut ornare lectus. Turpis egestas sed tempus urna et.
                    Diam vulputate ut pharetra sit amet aliquam id </p>
                <v-btn color="#000000" tile class="white--text pa-7">
                    LEARN MORE
                </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="pa-10 my-15 stone">
                <v-card max-width="500" min-height="712">
                    <h1>Milestones</h1>
                    <v-list>
                        <v-list-item-group class="pa-10">
                            <v-list-item v-for="(item, i) in items" :key="i">
                               <strong>     <img class="mx-5" :src="require('@/assets/images/icons/' + item.icon)"/></strong>
                                <v-list-content class="black--text text--darken-4"><strong>{{item.text}}</strong></v-list-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
        items: [{
                icon: 'check-mark.png',
                text: 'Founded in 2015',
            },
            {
                icon: 'check-mark.png',
                text: 'Reach over 4M downloads',
            },
            {
                icon: 'check-mark.png',
                text: 'Raise $10M+ in funding',
            },
            {
                icon: 'check-mark.png',
                text: 'Turpis egestas sed',
            },
            {
                icon:'check-mark.png',
                text:' native suppport'
            }
        ],
    })
}
</script>
