<template>
<div class="grey lighten-5 pb-5 my-16" id="user">
    <v-card color="#f6da0a" min-height="350" min-width="350">
        <v-row>
            <v-col md="4" offset-md="2">
                <h1 class="pa-7 ml-8">What do our users say?</h1>
            </v-col>
        </v-row>
        <v-item-group selected-class="bg-primary">
            <v-row justify="center">
                <v-col v-for="(data,index) in cards" :key="index" cols="8" md="2" class="pa-5 d-flex justify-space-around ">
                    <v-item>
                        <div class="webcard rounded-lg pa-7">
                            <P class="text-justify grey--text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            <v-img :src="require('@/assets/images/user/' + data.src)" max-height="147" max-width="147" class="rounded-circle mt-15"></v-img>
                            <h3 class="text-left mt-5 grey--text tex--lighten-1">{{data.name}}</h3>
                            <p class="text-left mt-3">{{data.role}}</p>
                        </div>
                    </v-item>
                </v-col>
            </v-row>
        </v-item-group>
    </v-card>
    <v-row class="web">
        <v-col cols="12" class="text-center">
            <h1 class="pa-0 mt-5">Design and Development</h1>
            <v-col md="5" offset-md="4" class="mx-auto">
                <p>Lorem ipsum dolor sit, consectetur some adipiscing elit eiusmod tempor incididu</p>
            </v-col>
        </v-col>
        <v-container class="ml-auto">
            <v-item-group class=" d-inline-flex pa-15 ma-n15">
                <v-row no-gutter class="d-flex flex-row">
                    <v-col v-for="(data,index) in rolesInfo" :key="index" cols="12" md="4">
                        <v-item>
                            <v-card class="align-center tile mx-auto rounded-lg rounded-t-0" light height="360" max-width="400">
                                <v-toolbar color="yellow accent-4" dark>
                                    <v-toolbar-title class="black--text"><strong>{{data.title}}</strong></v-toolbar-title>
                                </v-toolbar>
                                <v-list class="pa-5">
                                    <v-list-item v-for="(item, index) in data.lists" :key="index">
                                        <v-list-item-icon>
                                            <i class="fas fa-plus"></i>
                                            <v-list-item-title class="ml-3" v-text="item"></v-list-item-title>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-item-group>
        </v-container>
    </v-row>
</div>
</template>

<script>
export default {
    data: () => ({
        cards: [{
                src: 'user.jpg',
                name: 'Celia Almeda',
                role: 'Secretary',
            },
            {
                src: 'user1.jpg',
                name: 'Nat Reynolds',
                role: 'Chief Accountant',
            },
            {
                src: 'user1.jpg',
                name: 'Bob Roberts',
                role: 'Sales Manager',
            }
        ],
        rolesInfo: [{
                title: 'Design',
                lists: ['Product Mockup', 'Branding', 'Illustrations', 'UI/UX', 'Websites']
            },
            {
                title: 'Web Design',
                lists: ['Propotype', 'UI/UX', 'Content Writing', 'Website Hosting', 'Website Analysis']
            },
            {
                title: 'Development',
                lists: ['WordPress', 'Application Devloment', 'Front-end', 'PHP', 'Javascript']
            },
            {
                title: 'Branding',
                lists: ['Brand equity audit', 'Audience analysis', 'Competitive review', 'Strategic direction', 'Visual positioning']
            },
            {
                title: 'Marketing',
                lists: ['SEO Marketing', 'SE Optimization', 'Affiliate Marketing', 'Keyword', 'Article Writing']
            },
            {
                title: 'Video Editing',
                lists: ['Animation', 'MotionGraphics', 'After Effetcs', 'Cinema 4D', 'After Effects']
            }
        ]
    })
}
</script>
