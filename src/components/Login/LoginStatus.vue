<template>
    <div>
        <v-layout row>
            <v-flex xs12 class="text-xs-right" v-if="token != null">
                <v-btn class="indigo darken-4" to="/logout" dark flat>Log Out</v-btn>
            </v-flex>
            <v-flex xs12 lg12 class="text-xs-right" v-if="token == null">
                <v-btn class="indigo darken-4" to="/login" dark flat>Log In</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./LoginStatus.js"></script>