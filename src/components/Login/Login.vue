<template>
  <q-img src="/INTRANET_FUNDIMISA.png" class="absolute opacity fixed-full" />

  <div class="column fixed-center">
    <div class="row">
      <q-card class="my-card q-pa-xl shadow-1">
        <q-card-section vertical class="q-gutter-md" align="center">
          <q-avatar rounded size="150px">
            <img src="ico_fundimisa.png" />
          </q-avatar>
          <p class="text-bold text-h5">INTRANET FUNDIMISA</p>
        </q-card-section>
        <q-card-section vertical class="q-gutter-md" align="center">
          <h5 class="text-subtitle1">{{ $t("login.enterYourCredentials") }}</h5>

          <q-form class="q-gutter-md">
            <Input :objectInput="data" />
          </q-form>
          <br />
          <a class="recoverPassword" color="blue">{{
            $t("login.iForgotMyPassword")
          }}</a>
        </q-card-section>
        <q-card-actions class="q-px-md size">
          <q-btn
            color="green-8"
            size="lg"
            class="envy full-width"
            :label="$t('login.submitButton')"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data } from "./lib";
</script>

<style scoped>
.my-card {
  border-radius: 30px;
  justify-items: center;
  align-items: center;
  width: 500px;
}
.text-bold {
  font-weight: bold;
  color: black;
  font-size: xx-large;
}
.recoverPassword {
  text-decoration: underline;
  font-weight: bold;
}
.text-subtitle1 {
  font-weight: bold;
}
.envy {
  border-radius: 30px;
}
.size {
  width: 350px;
  position: relative;
  left: 35px;
}
</style>
