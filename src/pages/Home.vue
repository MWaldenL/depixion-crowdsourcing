<template>
    <div id="home" class="d-flex main-div">
        <Primer @enter="enterSurvey" v-show="!user" />
    </div>
</template>

<script>
import { responsesCollection } from "@/firebase";
import Primer from "@/components/Primer";

export default {
    name: "Home",
    methods: {
        enterSurvey() {
			this.$router.push("/survey");	
		},
        setUser(user) {
            this.user = user;
        },
    },

    components: {
        Primer
    },

    created() {
        document.title = "DepiXion | Login";
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            this.setUser(user);
        });
    },

    mounted() {
        responsesCollection.get().then((query) => {
            let data;
            let dataAdded;
            query.forEach((doc) => {
                data = doc.data();
                dataAdded = {
                    user: data.user,
                    painting: data.painting,
                    joy: data.labels[0].value,
                    trust: data.labels[1].value,
                    fear: data.labels[2].value,
                    surprise: data.labels[3].value,
                    sadness: data.labels[4].value,
                    disgust: data.labels[5].value,
                    anger: data.labels[6].value,
                    anticipation: data.labels[7].value,
                };
                this.docs.push(dataAdded);
            });
        });
    },

    data() {
        return {
            user: null,
            docs: [],
        };
    },
};
</script>

<style scoped>
#home {
    height: 100vh;
}
</style>
