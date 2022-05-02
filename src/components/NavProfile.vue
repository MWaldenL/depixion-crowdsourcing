<template>
<div>
	<b-navbar class="d-sm-none p-3" toggleable="lg" id="nav-sm">
		<h2 class="nav-sm-title"><b>DepiXion</b></h2>
		<b-navbar-toggle target="nav-collapse" class="nav-sm-title"></b-navbar-toggle>
		<b-collapse id="nav-collapse" class="mt-3" is-nav>
			<b-navbar-nav>
				<b-button v-b-modal.us-modal variant="secondary" class="my-2">About the Study</b-button>
				<b-button v-b-modal.dp-modal variant="success" class="my-2">View Data Privacy</b-button>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
	
	<div class="p-3 d-none d-sm-flex flex-sm-row justify-content-sm-between" id="nav">
		<h2 id="nav-title" class="m-0">
			<b>DepiXion</b>
		</h2>

		<b-button-toolbar>
			<b-button-group class="mx-1">
				<b-button class="nav-btn" v-b-modal.us-modal variant="link">About the Study</b-button>
				<b-button class="nav-btn" v-b-modal.dp-modal variant="link">Data Privacy</b-button>
			</b-button-group>
		</b-button-toolbar>

		<!-- Data Privacy -->
		<b-modal id="dp-modal" size="xl" centered hide-header-close ok-only ok-variant="success">
			<template #modal-header>
			<div>
				<h2><b>DepiXion</b></h2>
				<h4>Generating Abstract Art Based on a User-Specified Emotion Spectrum</h4>
			</div>
			</template>
			<h4><sub>Data Privacy Statement</sub></h4><br>
			<p>
				In compliance with the Philippine Data Privacy Act (DPA) of 2012, and its Implementing Rules and Regulations 
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
		<b-modal id="us-modal" size="xl" title="DepiXion" centered hide-header-close ok-only ok-variant="success">
			<template #modal-header>
			<div>
				<h2><b>DepiXion</b></h2>
				<h4>Generating Abstract Art Based on a User-Specified Emotion Spectrum</h4>
			</div>
			</template>
			<h4><sub>About the Study</sub></h4><br>
			<p>
			Hello! <br><br>

			We are Keith, Mats, and Byron, senior students from the 
			College of Computer Studies of De La Salle University - Manila taking up BS Computer Science with specializations in Software Technology. 
			We are currently working on our thesis project entitled "Generating Abstract Art Based on a User-Specified 
			Emotion Spectrum". Our goal is to build a software that can create abstract paintings through emotions, 
			and we need your help! <br><br>

			In answering the survey in this website, you will be shown 10 abstract paintings, and you will tell us 
			the emotions that you feel from them. You will be allowed to answer the survey again if you wish to do so. <br><br>

			For any concerns or questions regarding this website or our project, in general, you may reach us through
			<a href="mailto: depixion.2022@gmail.com">depixion.2022@gmail.com</a>. <br><br>
			Thank you very much for your interest in our study!
			</p>
		</b-modal>
	</div>
</div>
</template>

<script>
export default {
    name: "NavProfile"
};
</script>

<style scoped>
.nav-btn,
.nav-btn:hover {
	color: #424242;
	text-decoration: none;
}
</style>
