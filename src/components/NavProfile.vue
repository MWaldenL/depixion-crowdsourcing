<template>
<div>
	<b-navbar class="d-sm-none p-3" toggleable="lg" id="nav-sm">
		<b-navbar-brand href="/prelim">
			<h2 class="nav-sm-title"><b>DepiXion</b></h2>
		</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse" class="nav-sm-title"></b-navbar-toggle>

		<b-collapse id="nav-collapse" class="mt-3" is-nav>
			<b-navbar-nav>
				<b-button v-b-modal.us-modal variant="secondary" class="my-2">About the Study</b-button>
				<b-button v-b-modal.dp-modal variant="success" class="my-2">View Data Privacy</b-button>
				<!-- <b-button @click="logout" variant="danger" class="my-2">Logout</b-button> -->
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
	
	<div class="p-3 d-none d-sm-flex flex-sm-row justify-content-sm-between" id="nav">
		<h2 id="nav-title" class="m-0" @click="redirect">
			<b>DepiXion</b>
		</h2>

		<b-button-toolbar>
			<b-button-group class="mx-1">
				<b-button class="nav-btn" v-b-modal.us-modal variant="link">About the Study</b-button>
				<b-button class="nav-btn" v-b-modal.dp-modal variant="link">Data Privacy</b-button>
				<!-- <b-button @click="logout" variant="danger" class="mx-1">Logout</b-button> -->
			</b-button-group>
		<!-- <b-navbar-nav class="d-flex">
			<b-nav-item v-b-modal.dp-modal>About the Study</b-nav-item>
			<b-nav-item v-b-modal.dp-modal>Data Privacy</b-nav-item>
		</b-navbar-nav> -->
		</b-button-toolbar>

		<!-- Data Privacy -->
		<b-modal id="dp-modal" size="xl" centered hide-header-close ok-only>
			<template #modal-header>
			<div>
				<h2><b>DepiXion</b></h2>
				<h4>Generating Abstract Art Based on a User-Specified Emotion Spectrum</h4>
			</div>
			</template>
			<h4><sub>Data Privacy Statement</sub></h4><br>
			<p>
				In compliance with the Data Privacy Act (DPA) of 2012, and its Implementing Rules and Regulations 
				(IRR) effective since September 9, 2016, I am hereby giving consent to the proponents of this 
				research to do the following:
				<ol class="my-4">
				<li>
					Collection of my personal data which includes, but is not limited to, my name, contact number, 
					email address, and educational background for the purpose of the research at hand with provisions 
					for accessibility, updates, and corrections on my end;
				</li>
				<li>
					Minimal processing of any given information for non-commercial information dissemination given 
					that it does not alter the meaning, essence and the origin of anything given;
				</li>
				<li>
					Storage of files within the premises of De La Salle University as well as official electronic 
					storage locations such as on-premise storage servers or DLSU subscribed cloud storage services 
					with access to the information limited to the researchers and their thesis adviser;
				</li>
				<li>
					Disposal of any and all collected media files and personal data, and scrubbing of any storage 
					devices containing said data including the social media page/s (if any) at the end of AY 
					2021 - 2021, on November 1, 2022, or upon my submission of a written cancellation, whichever 
					comes first.
				</li>
				<li>
					The researchers must notify me within a period of twenty four (24) hours after they suspect or 
					become aware of any unauthorized access and security breach of my personal information; and 
					promptly take all reasonable steps, at their own expense, to prevent or stop, any unauthorized 
					access and security breach and comply with the Data Privacy Act of 2012 in the event of a breach.
				</li>
				</ol>
				
				For any concern regarding the information collected, shared and stored by the researchers, I may 
				reach them through their email addresses or privacy.officer@dlsu.edu.ph.

				By continuing with this form, I understand and am assured that necessary precautions will be taken 
				by De La Salle University and the researchers to protect my personal information and recognize 
				that improper use of the information (online, offline, or printed) will be subjected to appropriate 
				actions under the Data Privacy Act of 2012 and the institution’s Student Handbook.
			</p>
		</b-modal>

		<!-- About the study -->
		<b-modal id="us-modal" size="xl" title="DepiXion" centered hide-header-close ok-only>
			<template #modal-header>
			<div>
				<h2><b>DepiXion</b></h2>
				<h4>Generating Abstract Art Based on a User-Specified Emotion Spectrum</h4>
			</div>
			</template>
			<h4><sub>About the Study</sub></h4><br>
			<p>
			Hello! <br><br>

			We are Keith Gabriel Badulis, Matthew Walden Lua, and Byron Ethelbert Nill, ID 118 Students from the 
			College of Computer Studies taking up BS Computer Science with specializations in Software Technology. 
			We are currently working on our thesis project entitled "Generating Abstract Art Based on a User-Specified 
			Emotion Spectrum". Our goal is to build a software that can create abstract paintings through emotions, 
			and we need your help! <br><br>

			In answering the survey in this website, you will be shown 10 abstract paintings, and you will tell us 
			the emotions that you feel from them. You will be allowed to answer the survey again if you wish to do so. <br><br>

			For any concerns or questions regarding this website or our project, in general, you may reach us through 
			our email addresses and contact numbers below: <br><br>

			<b>Keith Gabriel Badulis</b><br>
			keith_gabriel_badulis@dlsu.edu.ph<br>
			09453455191<br><br>

			<b>Matthew Walden Lua</b><br>
			matthew_walden_lua@dlsu.edu.ph<br>
			09175832136<br><br>

			<b>Byron Ethelbert Nill</b><br>
			byron_ethelbert_nill@dlsu.edu.ph<br>
			09399363044<br><br>

			Thank you very much for your interest in our study!
			</p>
		</b-modal>
	</div>
</div>
</template>

<script>
import { auth } from "@/firebase";

export default {
    name: "NavProfile",

    methods: {
        logout() {
            auth.signOut()
                .then(() => {
                    this.$router.push("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        redirect() {
            this.$router.push("/prelim");
        },
    },
};
</script>

<style scoped>
#nav,
#nav-sm {
    /* background-color: #DEDEDE; */
    /* color: #e6e6e6; */
}

.nav-sm-title {
    color: #e6e6e6;
}

.nav-btn,
.nav-btn:hover {
	color: #424242;
	text-decoration: none;
}

#nav-title:hover {
    cursor: pointer;
}
</style>
