<template>
  <div class="flex flex-col lg:flex-row w-full mt-15">
    
    <!-- UserSheet : largeur fixe -->
    <div class="w-full lg:w-[430px] shrink-0">
      <UserSheet />
    </div>

    <!-- ContextualMessage : prend le reste -->
    <div
      class="w-full lg:flex-1 max-h-[400px] overflow-auto" 
    >
      <ContextualMessage />
    </div>
    
  </div>
</template>

<script setup>
import UserSheet from './UserSheet.vue'
import ContextualMessage from '../../../shared/components/ContextualMessage.vue'


</script>
