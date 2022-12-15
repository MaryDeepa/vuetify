<template>
<div>
   <topBar/>
    <v-row>
        <v-col col="12">
            <v-img height="650px" max-width="1250 px" src="../assets/images/bg.jpg" />
        </v-col>
    </v-row>
    <v-item-group selected-class="bg-primary">
        <v-row justify="center">
            <v-col v-for="(data,index) in cards" :key="index" cols="8" md="2" class="pa-5">
                <v-item>
                    <div class="topcard rounded-t-xl pa-5">
                        <div class="pa-13  rounded-circle d-inline-block mt-3">
                            <img :src="require('@/assets/images/icons/' + data.articleImgPath)">
                        </div>
                        <h3 class="mt-4">{{data.title}}</h3>
                    </div>
                </v-item>
            </v-col>
        </v-row>
    </v-item-group>
    <mockUp></mockUp>
    <projectCard></projectCard>
    <companyCard></companyCard>
    <protoInfo></protoInfo>
    <userWeb></userWeb>
    <bottomBar></bottomBar>
</div>
</template>

<script>
import mockUp from '@/components/mockUp'
import projectCard from '@/components/projectCard'
import bottomBar from '@/components/bottomBar'
import companyCard from '@/components/companyCard'
import protoInfo from '@/components/protoInfo'
import userWeb from '@/components/userWeb'
import topBar from '@/components/topBar'
export default {
    components: {
        mockUp,
        companyCard,
        projectCard,
        bottomBar,
        protoInfo,
        userWeb,
        topBar
    },
    data: () => ({
        cards: [{
                title: 'Advisory',
                articleImgPath: 'advisory.png',
                flex: 6
            },
            {
                title: 'Development',
                articleImgPath: 'development.png',
                flex: 6
            },
            {
                title: 'Planning',
                articleImgPath: 'planning.png',
                flex: 6
            },
            {
                title: 'Strategy',
                articleImgPath: 'strategy.png',
                flex: 6
            },
        ],
      
    })
}
</script>
<style>

</style>


<style lang="scss" src="../assets/sass/style.scss"></style>
