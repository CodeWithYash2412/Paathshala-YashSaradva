<template>
  <div class="flex justify-center flex-col">
    <!-- <button @click="showForm = true" v-if="!showForm">Show Form</button>s -->
    <button type="button" @click="showForm = true" v-if="!showForm"
      class=" w-1/6 mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-2">
      Show Form </button>
    <button type="button" @click="showForm = false" v-else
      class=" w-1/6 mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-2">
      Show Data </button>



    <div class="flex justify-center items-center flex-col" :class="showForm ? 'h-[28rem]' : ''">
      <div v-if="showForm" class="w-full">
        <FormComponent />
      </div>

      <div v-else>
        <ShowData />
      </div>
    </div>
  </div>
</template>

<script>
import FormComponent from ".././components/FormComponent.vue"
import ShowData from ".././components/ShowData.vue"

export default {
  name: 'App',
  components: {
    FormComponent,
    ShowData
  },
  data() {
    return {
      showForm: true,

    };
  }
};
</script>
