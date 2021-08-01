<template>
<div class="p-3 d-flex justify-content-between align-content-end" id="nav">
  <h2>
    <b>DepiXion</b>
  </h2>
  <b-button-toolbar>
    <b-button v-b-modal.dp-modal variant="success" class="mx-1">View Data Privacy</b-button>
    <b-button @click="logout" variant="danger" class="mx-1">Logout</b-button>
  </b-button-toolbar>
  <b-modal id="dp-modal" size="xl" title="Data Privacy" centered hide-header-close ok-only>
    <p class="mx-4 text-start">
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
        reach them through their email addresses mentioned above or privacy.officer@dlsu.edu.ph.

        By continuing with this form, I understand and am assured that necessary precautions will be taken 
        by De La Salle University and the researchers to protect my personal information and recognize 
        that improper use of the information (online, offline, or printed) will be subjected to appropriate 
        actions under the Data Privacy Act of 2012 and the institution’s Student Handbook.
      </p>
  </b-modal>
</div>
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: "NavProfile",

  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          this.$router.push("/")
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
};
</script>

<style scoped>
#nav {
  background-color: #333333;
  color: #e6e6e6;
}
</style>
