<template>
  <div class="px-4 pt-4">
    <div class="text-center">
      <h3 class="display-5 fw-bold mb-4">Data Privacy Statement</h3>
    </div>
    <div>
      <p class="mx-4 text-start">
        In compliance with the Philippine Data Privacy Act (DPA) of 2012, and its Implementing Rules and Regulations 
        (IRR) effective since September 9, 2016, I, {{ name }}, am hereby giving consent to the proponents of this 
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

        By answering this form, I understand and am assured that necessary precautions will be taken 
        by De La Salle University and the researchers to protect my personal information and recognize 
        that improper use of the information (online, offline, or printed) will be subjected to appropriate 
        actions under the Data Privacy Act of 2012 and the institution’s Student Handbook.
      </p>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: "DataPrivacy",
  data() {
    return {
      name: ""
    }
  },
  created() {
    const user = auth.currentUser
    this.name = auth.currentUser.displayName
  }
};
</script>
