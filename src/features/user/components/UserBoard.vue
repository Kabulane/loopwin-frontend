<template>
  <div class="flex flex-col lg:flex-row  lg:mt-15 w-full mt-30">
    
    <!-- UserSheet : largeur fixe -->
    <div class="w-full lg:w-[430px] shrink-0 max-w-[430px] ">
      <UserSheet />
    </div>

    <!-- ContextualMessage : prend le reste -->
    <div
      class="w-full lg:flex-1 max-h-[400px] mt-5 lg:mt-0 overflow-auto" 
    >
      <ContextualMessage />
    </div>
    
  </div>
</template>

<script setup>
import UserSheet from './UserSheet.vue'
import ContextualMessage from '../../../shared/components/ContextualMessage.vue'


</script>
