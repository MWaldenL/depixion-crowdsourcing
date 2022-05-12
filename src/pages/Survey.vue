<template>
    <!-- Show loading screen if no user -->
	<div class="h-100 d-flex justify-content-center align-items-center" v-if="!user"> 
		<b-spinner variant="success"></b-spinner>
	</div>
    <div class="px-md-4 pt-4 main-div" v-else>
		<!-- Completed View -->
        <div v-if="completed" class="col-lg-10 mx-auto">
            <b-card class="form-card p-4 text-center">
                <h3 class="display-5 fw-bold mb-4">Thank you!</h3>
                <p class="col-lg-8 mx-auto">
                    We truly appreciate your contribution to our study. If you
                    have any questions, feel free to reach out to us. Our
                    contact details are available on the <i>About the Study</i>
                    page. If you want to contribute more and earn more points,
                    you can click the button below and label a new set of
                    paintings.
                </p>
                <p class="col-lg-8 mx-auto">
                    The following code gives you credits that can be used to get free research participants at SurveySwap.io. 
                    Go to: https://surveyswap.io/sr/VY51-HEFL-KTIP 
                    Or, alternatively, enter the code manually: VY51-HEFL-KTIP
                </p>
                <b-button class="mt-2" @click="startNewSurvey" variant="success">
                    Label more paintings
                </b-button>
            </b-card>
        </div>
		<!-- Tutorial View -->
        <div v-else-if="!tutored" class="col-lg-10 mx-auto">
            <b-card class="p-2 d-flex flex-column align-items-center text-center">
                <h3 class="fw-bold mb-4">Emotion Labeling Reminders</h3>
                <b-img class="tut-img mb-4" fluid :src="tutImg" />
                <p class="col-lg-6 mx-auto">
                    Ten different images of abstract paintings will be
                    displayed. For each image, you will be tasked to label them
                    based on the emotions you feel. If you feel that the painting
                    evokes that emotion in you, simply click or tap on the checkbox
                    next to it. <em>You can select multiple emotions.</em> You can 
                    remove the label by clicking on the checkbox again.
                </p>
                <p class="col-lg-6 mx-auto">
                    <b>Note:</b> You cannot go back to the previous image when
                    proceeding to the next.
                </p>
                <b-form-checkbox
                    v-model="dontShowTutorial"
                    :value="true"
                    :unchecked-value="false"
                >   
                    Don't show me this again.
                </b-form-checkbox>
                <b-button
                    class="mt-2"
                    @click="tutored = true"
                    variant="success"
                >
                    Begin answering
                </b-button>
            </b-card>
        </div>
		<!-- Survey Form -->
        <div v-else class="col-lg-10 mx-auto">
            <b-card class="p-lg-4">
                <b-container>
                    <div
                        class="
                            mb-4
                            d-flex
                            justify-content-between
                            align-items-center
                            flex-wrap">
                        <h3 class="fw-bold">
                            How does this painting make you feel?
                        </h3>
                    </div>
                    <b-row>
                        <b-col
                            class="mt-0 mb-md-0 mb-4 d-flex justify-content-center"
                            cols="12"
                            md="7"
                        >
                            <div class="form-img-container" v-show="isLoaded">
                                <b-img
                                    @load="onImageLoaded"
                                    @error="onImageError"
                                    class="form-img mx-auto"
                                    :src="imgSrc"
                                    fluid-grow
                                    alt="Abstract Painting"
                                />
                            </div>
                            <div
                                class="loading-wrapper mx-auto flex-column"
                                v-show="!isLoaded"
                            >
		                        <b-spinner class="mb-2" variant="success"></b-spinner>
                                <span class="text-muted">Loading image...</span>
                            </div>
                        </b-col>
                        <b-col class="my-auto" >
                            <b-container
                                :key="lbl.emotion"
                                v-for="lbl in emotionLabels"
                            >
                                <div
                                    class="
                                        row
                                        mb-2
                                        label-row
                                        align-items-center
                                    "
                                >
                                    <b-form-checkbox
                                        v-model="lbl.value"
                                        value="1"
                                        unchecked-value="0"
                                    >
                                        <div>{{ lbl.emotion }}</div>
                                    </b-form-checkbox>
                                </div>
                            </b-container>
                            <b-container
                                class="
                                    d-flex
                                    flex-column
                                    align-items-center
                                    mt-4
                                "
                            >
                                <b-button
                                    class="button-submit"
                                    :class="isDisabled"
                                    @click="nextPage"
                                    variant="success"
                                >
                                    <span v-if="this.page < 10"> Next </span>
                                    <span v-else> Finish </span>
                                </b-button>
                            </b-container>
                            <p class="text-center mt-2" :class="textColor">
                                Please select at least one emotion label
                            </p>
                        </b-col>
                    </b-row>
                </b-container>
                <br>
                <div
                    class="
                        container
                        d-flex
                        justify-content-between
                        align-items-end
                    "
                >
                    <div class="col mr-4">
                        <b-progress
                            :value="page"
                            :max="10"
                            show-value
                            class="mr-3"
                            variant="success"
                        ></b-progress>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import firebase from "firebase/app";
import { usersCollection, evaluationsCollection } from "@/firebase";

export default {
    created() {
        document.title = "DepiXion | Survey";
        this.tutImg = require("../../public/sample.png");
    },
    mounted() {
        // Retrieve user option to show/hide tutorial from cookies
        this.tutored = Boolean(this.$cookies.get("showTutorial"))

		// Listen for user state changes
		firebase.auth().onAuthStateChanged(async user => {
			if (user) { // Firebase gets uid from localStorage when w/in the same session
				this.user = user.uid

				// try retrieving the user from firebase
				usersCollection.doc(user.uid).get()
					.then(doc => {
						if (!doc.exists) { // create a new user if no user exists
							usersCollection.doc(this.user).set({
								points: 0,
								paintingsAnnotated: []
							})	
						}
                        // fetch images and then form info
                        this.fetchImages().then(() => {
                            this.fetchFormInfo();
                        });
					})
			} else { // New session: sign in anonymously
                firebase.auth().signInAnonymously()
			}
		});
    },
    data() {
        return {
            user: null,
            loaded: false,
            userAnnotated: [],
            imageList: [],
            brokenImages: [],
            emotionLabels: [
                { emotion: "Joy", value: 0 },
                { emotion: "Trust", value: 0 },
                { emotion: "Fear", value: 0 },
                { emotion: "Surprise", value: 0 },
                { emotion: "Sadness", value: 0 },
                { emotion: "Disgust", value: 0 },
                { emotion: "Anger", value: 0 },
                { emotion: "Anticipation", value: 0 },
            ],
            points: null,
            page: 1,
            dontShowTutorial: false, 
            tutored: false,
            tutImg: "",
            textColor: "text-white",
        };
    },
    watch: {
        dontShowTutorial(oldVal, newVal) {
            if (newVal != oldVal) {
                this.$cookies.set("showTutorial", newVal) // save this choice to cookies
            }
        }
    },
    computed: {
        completed() {
            return this.page == 11;
        },
        imgSrc() {
            const curImage = this.imageList[this.page - 1]
            return curImage ? curImage.url : ""
        },
        isLoaded() {
            return this.imageList[this.page - 1] && this.loaded;
        },
        isDisabled() {
            return {
                disabled: !this.loaded,
            };
        },
    },
    methods: {
        onImageLoaded() {
            this.loaded = true;
        },
        onImageError(e) {
            // Get the image for this page and replace it
            const currentImage = this.imageList[this.page - 1]
            this.brokenImages.push(currentImage)
            this.replaceBrokenImage(currentImage)
        },
        startNewSurvey() {
            this.page = 0
            this.fetchImages().then(() => {
                this.fetchFormInfo();
            });
        },
        async getRemoteList() {
            // Fetch images TODO

            const pool = await fetch(
                "https://res.cloudinary.com/kbadulis/raw/upload/v1652111820/pool-eval.json"
            );
            const poolJSON = await pool.json();

            /* const pool1 = await fetch(
                "https://res.cloudinary.com/kbadulis/image/list/pool.json"
            );
            const sublist1 = await pool1.json();
            const pool2 = await fetch(
                "https://res.cloudinary.com/kbadulis/image/list/pool-two.json"
            );
            const sublist2 = await pool2.json(); */

            const list = poolJSON.resources;
            
            const urlPrefix = 
                "https://res.cloudinary.com/kbadulis/image/upload/v1652108590/eval-images/";
            return { list, urlPrefix }
        },
        async replaceBrokenImage(brokenImage) {
            const { list, urlPrefix } = await this.getRemoteList()
            
            // Find and replace the broken image
            let rand, img, url, imgPath
            do {
                rand = Math.floor(Math.random() * list.length); // random index
                imgPath = list[rand].public_id.split("/")[1];
                img = `${imgPath.split("_")[0]}.jpg`
                url = `${urlPrefix}${imgPath}.jpg`
            } while (this.userAnnotated.includes(img))
            const indBroken = this.imageList.indexOf(brokenImage)
            this.imageList.splice(indBroken, 1, { url, img }) // to actually create an observable object
        },
        async fetchImages() {
            // Mark annotated images
            const userDoc = await usersCollection.doc(this.user).get();
            const data = userDoc.data();
            this.userAnnotated = data.paintingsAnnotated

            // Fetch images
            this.imageList = []
            const { list, urlPrefix } = await this.getRemoteList() 

            // Select images for the user
            for (let i=0; i < 10; i++) {
                let rand, img, url, imgPath
                do { // keep fetching while the selected image has already been annotated and if it's broken
                    rand = Math.floor(Math.random() * list.length); // random index
                    imgPath = list[rand].public_id.split("/")[1];
                    img = `${imgPath.split("_")[0]}.jpg`
                    url = `${urlPrefix}${imgPath}.jpg`;
                } while (this.userAnnotated.includes(img) && this.brokenImages.includes(img))
                this.imageList.push({ url, img });
            }
        },
        async fetchFormInfo() {
            const userRef = usersCollection.doc(this.user);
            // display current points
            await userRef
                .get()
                .then((user) => (this.points = user.data().points));
            // get last saved page
            this.page = ((this.points / 10) % 10) + 1;
        },
        async nextPage() {
            // Save image to firebase
            const answered = this.emotionLabels.some(
                (label) => label.value > 0
            );
            if (answered) {
                let currentImage = this.imageList[this.page - 1].img;
                await this.saveResponse(currentImage)
                await this.writeImageToUser(currentImage)

                // Next page
                if (this.loaded) {
                    this.page++;
                }
                this.loaded = false;
                this.textColor = "text-white";

                // Reset ratings form
                this.emotionLabels.map((_) => (_.value = 0));
            } else {
                this.textColor = "text-danger";
            }
        },
        async saveResponse(img) { 
            let emotions = []

            for (let i = 0; i < 8; i++) {
                let value = true ? this.emotionLabels[i].value === "1" : false
                emotions.push({ emotion: this.emotionLabels[i].emotion, value: value })
            }

            await evaluationsCollection.doc().set({
                user: this.user,
                painting: img,
                labels: emotions
            });
        },
        async writeImageToUser(img) {
            const userRef = usersCollection.doc(this.user);
            const userPts = (await userRef.get()).data().points;
            await userRef.update({
                paintingsAnnotated: firebase.firestore.FieldValue.arrayUnion(img),
                points: userPts + 10,
            });
            this.points = userPts + 10;
        },
    },
};
</script>

<style>
.label-row {
    padding: 0.5rem;
    border-style: solid;
    border-width: 1px;
    border-color: #d9d9d9;
    border-radius: 8px;
}

label.custom-control-label {
    margin-left: 8px !important;
}

.form-img-container {
    max-height: 500px;
    height: 350px;
    width: 100%;
}

.form-img {
    border-radius: 8px;
    height: 100%;
    max-height: 100%;
    object-fit: contain;
}

.tut-img {
    max-height: 50vh;
}

.loading-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-submit {
    width: 50%;
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}
.fa-spinner {
    animation: spinner 1s linear infinite;
}
</style>