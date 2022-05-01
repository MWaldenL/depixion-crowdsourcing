<template>
<div class="row gx-0">
	<!-- <div class="col-xl-8 px-0" id="img-wrapper"> -->
		<img :src="background" id="bg-image" class="col-xl-8 px-0">
		<!-- <p id="img-text">Source: WikiArt</p> -->
	<!-- </div> -->
	<div id="primer" class="ml-auto col-xl p-5" :style="{ backgroundColor: backgroundColor }">
		<h2 :style="{ color: color }"><b>DepiXion</b></h2>
		<h4 :style="{ color: color }">Generating Abstract Art Based on a User-Specified Emotion Spectrum</h4>
		<br>

		<p :style="{ color: color }">
		Hello! <br><br>

		We are Keith Gabriel Badulis, Matthew Walden Lua, and Byron Ethelbert Nill, ID 118 Students from the 
		College of Computer Studies of De La Salle University - Manila taking up BS Computer Science with 
		specializations in Software Technology. 

		We are currently working on our thesis project entitled "Generating Abstract Art Based on a User-Specified 
		Emotion Spectrum". Our goal is to build a software that can create abstract paintings through emotions, 
		and we need your help! <br><br>

		In answering the survey in this website, you will be shown 10 abstract paintings, and you will tell us 
		the emotions that you feel from them. You will be allowed to answer the survey again if you wish to do so. <br><br>

		For any concerns or questions regarding this website or our project, in general, you may reach us through 
		<a href="mailto: depixion.2022@gmail.com" :style="{ color: color }">depixion.2022@gmail.com</a>. <br><br>
		<!-- our email addresses and contact numbers below: <br><br>

		<b>Keith Gabriel Badulis</b><br>
		keith_gabriel_badulis@dlsu.edu.ph<br>
		+63 (945) 3455191<br><br>

		<b>Matthew Walden Lua</b><br>
		matthew_walden_lua@dlsu.edu.ph<br>
		+63 (917) 5832136<br><br>

		<b>Byron Ethelbert Nill</b><br>
		byron_ethelbert_nill@dlsu.edu.ph<br>
		+63 (939) 9363044<br><br> -->

		Thank you very much for your interest in our study! Please click the button below to proceed with the survey.
		</p>

		<!-- <img src="@/../public/login.png" @click="login" id="login" class="d-block mx-auto mt-5 w-50"> -->
		<div class="d-flex justify-content-center">
			<b-button class="w-100" variant="success" @click="login">Enter Survey</b-button>
		</div>
		
		<br>
		<small :style="{ color: color }">
			<p>Notice: </p>
			
			This website utilizes cookies to take note of the paintings that you have already evaluated. Should you wish to evaluate more paintings,
			you may enter this website again and proceed with the survey.
			
			<hr>

			For more information, you can view our data privacy statement <a href="#" :style="{ color: color }" v-b-modal.dp-modal>here</a>.
		</small>
		<b-modal id="dp-modal" size="xl" centered hide-header-close ok-only>
		<template #modal-header>
			<div>
			<h2><b>DepiXion</b></h2>
			<h4>Generating Abstract Art Based on a User-Specified Emotion Spectrum</h4>
			</div>
		</template>
		<h4><sub>Data Privacy Statement</sub></h4><br>
		<p>
			In compliance with the Philippine Data Privacy Act (DPA) of 2012, and its Implementing Rules 
			and Regulations (IRR) effective since September 9, 2016, I am hereby giving consent to the 
			proponents of this research to do the following:
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
	</div>
</div>
</template>

<script>
export default {
    name: "Primer",

    data() {
        return {
            background: "",
            backgroundColor: "",
            color: "",
        };
    },

    created() {
        let rand = Math.floor(Math.random() * 5) + 1;
        this.background = require("../../public/homebg" + rand + ".jpg");

        rand = Math.floor(Math.random() * 2);
        this.backgroundColor = rand === 0 ? "#e6e6e6" : "#333333";
        this.color = rand === 0 ? "#333333" : "#e6e6e6";
    },

    methods: {
        login() {
            this.$emit("enter");
        },
    },
};
</script>

<style scoped>
#login:hover {
    cursor: pointer;
}

#bg-image {
    object-fit: cover;
}
/* #img-text {
  position: absolute;
  left: 20px;
  bottom: 20px;
  padding: 5px;
  color: #e6e6e6;
  background-color: #333333;
  opacity: 75%;
} */
</style>