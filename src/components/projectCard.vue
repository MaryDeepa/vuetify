<template>
<div id="project">
    <v-card height="1100" max-width="1250 px" color="#f6da0a">
        <h1>Our Projects</h1>
        <h5 class="pa-2">“You can do anything you set your mind to.”</h5>
        <h5>- Benjamin Franklin</h5>
        <v-container>
            <v-item-group>
                <v-row no-gutter class="d-flex flex-row">
                    <v-col v-for="(data,index) in cards" :key="index" cols="12" md="4">
                        <v-item class="">
                            <v-card class="align-center pa-10 rounded-lg mx-auto " light height="385" max-width="400">
                                <img v-if="data.cardPath != null" :src="require('@/assets/images/cards/' + data.cardPath)" contain height="385" width="400">
                                <v-card-text>
                                    <h5>{{data.title}}</h5>
                                    <p class="mt-5 text-justify">{{data.content}}</p>
                                </v-card-text>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-item-group>
        </v-container>
    </v-card>
    <v-container>
        <v-row class="my-10">
            <v-col md="5" offset-md="3" class="mx-auto mt-15 mb-6">
                <v-card class="pa-2 design" outlined tile height="228" justify="center">
                    <v-img src="../assets/images/bg1.jpg" max-width="319" max-height="319" class="rounded-circle  d-inline-block "></v-img>
                </v-card>
            </v-col>
        </v-row>
        <v-btn tile color="#000000" class="pa-10">
            <span class="white--text pa-10">FOCUSED DESIGN</span>
        </v-btn>
        <v-row no-gutter class=" d-flex justify-space-between">
            <v-col md="4" offset-md="4" class="mx-auto my-10" >
                <p class="text-center"> Dui ut ornare lectus sit amet.
                    Sollicitudin nibh sit amet commodo nulla. Tristique risus nec feugiat in fermentum.
                    Sit amet venenatis urna cursus eget nunc scelerisque. Aliquet lectus proin nibh nisl.
                </p>
            </v-col>
        </v-row>
          <v-btn tile color="#000000" class="pa-10">
            <span class="white--text pa-10">WEBSITE DESIGN</span>
        </v-btn>
        <v-row no-gutter class=" d-flex justify-space-between">
            <v-col md="4" offset-md="4" class="mx-auto my-10" >
                <p class="text-center"> Dui ut ornare lectus sit amet.
                    Sollicitudin nibh sit amet commodo nulla. Tristique risus nec feugiat in fermentum.
                    Sit amet venenatis urna cursus eget nunc scelerisque. Aliquet lectus proin nibh nisl.
                </p>
            </v-col>
        </v-row>
          <v-btn tile color="#f6da0a" class="pa-6">
            LEARN MORE
        </v-btn>
    </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
        cards: [{
                title: 'About Us',
                content: 'Good content is everything. In a world that is oversaturated with content, you’ll learn from successful writers and bloggers how to create content that matters and resonates with your audience.',
                cardPath: null,
            },
            {
                title: '',
                content: '',
                cardPath: 'card.jpg',

            },
            {
                title: 'Our Strategy',
                content: 'Sometimes the hardest part is knowing what to say and when to say it. At Lines, you’ll get the downlow on how to craft retweetable messages, when to post content, and what platforms you should be using',
                cardPath: null,

            },
            {
                title: '',
                content: '',
                cardPath: 'card1.jpg',

            },
            {
                title: 'Our Mission',
                content: 'Good content is everything. In a world that is oversaturated with content, you’ll learn from successful writers and bloggers how to create content that matters and resonates with your audience.',
                cardPath: null,

            },
            {
                title: '',
                content: '',
                cardPath: 'card2.jpg',
            },
        ]
    })
}
</script>

<style lang="scss">
.design,
.v-img {
    background-position: top;
}
</style>
