<template>
  <q-img
    src="../../assets/background_login/background_for_login.png"
    class="absolute opacity fixed-full"
  />

  <div class="column fixed-center">
    <div class="row">
      <q-card class="my-card q-pa-xl shadow-1">
        <q-card-section vertical class="q-gutter-md" align="center">
          <q-avatar rounded size="100px">
            <img
              src="../../assets/ico_fundimisa_intranet/photo1706786029.png"
            />
          </q-avatar>
          <p class="text-bold text-h5">INTRANET FUNDIMISA</p>
          <h5 class="text-subtitle1">{{ $t("login.enterYourCredentials") }}</h5>
        </q-card-section>
        <q-card-section vertical class="q-gutter-md" align="center">
          <q-form class="q-gutter-md">
            <q-input
              rounded
              outlined
              v-model="data.user"
              :placeholder="$t('login.labelInputName')"
            />
            <q-input
              rounded
              outlined
              v-model="data.email"
              type="email"
              :placeholder="$t('login.labelEmail')"
            />
            <q-input
              rounded
              outlined
              v-model="data.password"
              type="password"
              :placeholder="$t('login.labelInputPassword')"
            >
              <template v-slot:append>
                <q-icon
                  color="grey"
                  class="cursor-pointer"
                  @click="isPwdvisible = !isPwdvisible"
                  :name="isPwdvisible ? 'visibility_off' : 'visibility'"
                /> </template
            ></q-input>
          </q-form>
          <br />
          <a class="recoverPassword"> {{ $t("login.iForgotMyPassword") }} </a>
        </q-card-section>
        <q-card-actions class="q-px-md">
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
import { ref } from "vue";
const data = ref({
  user: "",
  email: "",
  password: "",
});
const isPwdvisible = ref(true);
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
}
.recoverPassword {
  color: rgba(0, 98, 255, 0.724);
}
.text-subtitle1 {
  font-weight: bold;
}
.envy {
  border-radius: 30px;
}
</style>
