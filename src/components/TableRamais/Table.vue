<template>
  <div class="q-pa-xl box-shadow mt-10 mx-8">
    <div class="row justify-between q-pa-md">
      <div>
        <q-btn class="bg-green text-white ml-12" label="Adicionar Ramal" />
      </div>
      <q-input label="Buscar Ramal" color="indigo-8">
        <template v-slot:append>
          <q-icon name="search" color="indigo-8" />
        </template>
      </q-input>
    </div>
    <q-markup-table class="q-px-xl meu-tabela no-box-shadow">
      <thead>
        <tr class="text-indigo-8">
          <th class="text-left">Nome</th>
          <th class="text-left">Setor</th>
          <th class="text-left">Número</th>
          <th class="text-left-"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in ramais" :key="index" class="text-grey-8">
          <td class="text-left">{{ item.nome }}</td>
          <td class="text-left">{{ item.setor }}</td>
          <td class="text-left">{{ item.numero }}</td>
          <td class="text-right"><q-icon size="25px" name="settings" /></td>
        </tr>
        <q-separator class="text-left" />
      </tbody>
    </q-markup-table>
    <SeparatorForEmergence
      :texto="'400 RAMAL DE EMERGÊNCIA'"
      :large="'410px'"
    />
  </div>
</template>

<script setup lang="ts">
import { ramais } from "./lib";
</script>

<style scoped>
.meu-tabela td {
  font-size: 16px; /* Substitua o valor pelo tamanho desejado */
}
.box-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
}
</style>
