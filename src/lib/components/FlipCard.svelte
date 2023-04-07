<script>
    export let mainText;
</script>

<div class="card">
    <div class="card-body">
    <div class="card-front">
        <div style="height: 100%; width: 100%;">
            <div class="icon top-left">
                <p><strong>MM</strong></p>
                <img src="/favicon.png" alt="logo" />
            </div>
            <div class="icon top-right">
                <p><strong>MM</strong></p>
                <img src="/favicon.png" alt="logo" />
            </div>
            <div style="width: 100%; height: 100%; display: flex; justify-content: center;"><p style="text-align: center;"><strong>{mainText}</strong></p></div>
        </div>
    </div>

    <div class="card-back">
        <div style="height: 100%; width: 100%;">
            <div class="icon top-left">
                <p><strong>MM</strong></p>
                <img src="/favicon.png" alt="logo" />
            </div>
            <div class="icon top-right">
                <p><strong>MM</strong></p>
                <img src="/favicon.png" alt="logo" />
            </div>
            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;"><div><slot /></div></div>
        </div>
    </div>
    </div>
</div>

<style>
.card {
  perspective: 40rem;
}

.card-body {
  display: flex;
  transform-style: preserve-3d;
  transition: var(--time) transform;
}
.card:hover .card-body, .card:focus .card-body {
  transform: rotateX(-180deg);
}

.card-front, .card-back {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  min-width: 100%;
}

.card-back {
  transform: rotateX(-180deg) translate(-100%, 0);
}

.card {
  display: flex;
  transition: z-index, transform calc(var(--time) / 4);
  transition-delay: var(--time), 0s;
  text-decoration: none;
  color: inherit;
  z-index: 0;
}
.card:hover {
  transition-delay: 0s;
  z-index: 1;
}
.card:active {
  transform: scale(0.975);
}

.card-body {
  border-radius: 0.25rem;
  flex: 1;
}

.card-front, .card-back {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-sizing: border-box;
  padding: 1.5rem;
  border-radius: 0.25rem;
}

.card-front {
  font-size: 1.5rem;
}

.card-front, .card-back {
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04), 0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04), 0 16px 16px rgba(0, 0, 0, 0.04);
}

.icon {
        position: absolute;
    }

    .icon img {
        width: 20px;
    }

    .icon p {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .top-left {
        top: 20px;
        left: 20px;
    }

    .top-right {
        bottom: 20px;
        right: 20px;
        transform: rotate(180deg);
    }
</style>