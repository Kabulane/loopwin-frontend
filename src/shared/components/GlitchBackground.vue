<template>
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <!-- Scanlines -->
        <div class="w-full h-full glitch-scan absolute" />

        <!-- RGB glitch -->
        <div class="w-full h-full glitch-rgb absolute" />
    </div>
</template>
  
<style scoped>
/* Scanline subtle animation */
.glitch-scan {
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.015),
    rgba(255, 255, 255, 0.015) 4px,
    transparent 6px,
    transparent 8px
  );
  animation: glitch-scan 1s infinite linear;
  mix-blend-mode: overlay;
}

/* RGB shift glitch subtle and random */
.glitch-rgb::before,
.glitch-rgb::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  opacity: 0.04;
  pointer-events: none;
  mix-blend-mode: screen;
}

.glitch-rgb::before {
  background: rgba(140, 20, 20, 0.2);
  animation: glitch-rgb 4s infinite ease-in-out;
}

.glitch-rgb::after {
  background: rgba(150, 80, 20, 0.2);
  animation: glitch-rgb 4s infinite ease-in-out reverse;
}

@keyframes glitch-scan {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(10%);
  }
}

@keyframes glitch-rgb {
  0%,
  100% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-1px);
  }
  20% {
    transform: translateX(1.5px);
  }
  30% {
    transform: translateX(-0.5px);
  }
  40% {
    transform: translateX(1px);
  }
  50% {
    transform: translateX(0);
  }
  70% {
    transform: translateX(-2px);
  }
  80% {
    transform: translateX(2px);
  }
  90% {
    transform: translateX(0.5px);
  }
}
</style>