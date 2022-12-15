<template>
<div>
    <v-toolbar color="" light>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-divider class="mx-4" vertical></v-divider>
        <span class="subheading">My Home</span>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text>
                News
            </v-btn>

            <v-divider vertical></v-divider>

            <v-btn text>
                Blog
            </v-btn>

            <v-divider vertical></v-divider>

            <v-btn text>
                Music
            </v-btn>

            <v-divider vertical></v-divider>
        </v-toolbar-items>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-icon class="ma-2" v-bind="attrs" v-on="on">
                    mdi-translate
                </v-icon>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</div>
</template>

<script>
export default {
    data: () => ({
        items: [{
                title: 'Click Me'
            },
            {
                title: 'Click Me'
            },
        ],
    }),
}
</script>

<style>

</style>
