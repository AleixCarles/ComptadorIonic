<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="secondary">
        <ion-title>Time fighter</ion-title>
        <ion-buttons slot="primary" >
          <ion-button color="primary" fill="solid" @click="info">
            <ion-icon :icon="infoIcon"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" color="tertiary">
      TODO 404
    </ion-content>
  </ion-page>
</template>

<script>
import {
  alertController,
  IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, toastController
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { informationCircleOutline } from "ionicons/icons";
import { createAnimation } from '@ionic/vue';
const INITIAL_TIME = 60
export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol
  },
  setup () {
    return {
      infoIcon: informationCircleOutline,
      started: false,
      counterInterval: null,
    }
  },
  data () {
    return {
      score: 0,
      timeLeft: INITIAL_TIME
    }
  },
  watch: {
    timeLeft: function(newTimeLeft) {
      if (newTimeLeft <= 0) {
        this.started = false
        this.timeLeft = INITIAL_TIME
        clearInterval(this.counterInterval)
        this.showResult()
        this.score = 0
      }
    }
  },
  methods: {
    bounce () {
      const animation = createAnimation()
      animation.addElement(document.getElementById('tapMeButton'))
          .duration(2000)
          .fromTo('transform', 'scale(2.0)', 'scale(1.0)')
      animation.play();
    },
    blink(){
      const animation = createAnimation()
      animation.addElement(document.getElementById('blink'))
          .duration(500)
          .fromTo('opacity','0.0','1.0')
      animation.play();
    },
    async info(){
      const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'TIme Figther 1.0',
            subHeader: 'Creat per Aleix Carles Santús',
            message: 'Podeu trobar el codi font a: <a href="https://github.com/AleixCarles/ComptadorIonic">https://github.com/AleixCarles/ComptadorIonic</a>',
            buttons: ['OK'],
          });
      await alert.present();
    },
    tap () {
      this.bounce()
      this.blink()
      this.score++
      if (!this.started) {
        this.counterInterval = setInterval(() => {
          this.timeLeft--
        },1000)
        this.started = true
      }
    },
    async showResult() {
      // TOAST
      const toast = await toastController.create({
        color: 'dark',
        duration: 2000,
        message: `Time's Up. Your Score was ${this.score}`,
        showCloseButton: true
      });
      await toast.present();
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}
#container a {
  text-decoration: none;
}
</style>
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
ComptadorIonic/NotFoundComponent.vue at main · acacha/ComptadorIonic