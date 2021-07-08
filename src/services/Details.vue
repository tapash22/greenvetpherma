<template>
  <div class="row">
    <div class="col-md-6 text">
      <p>"Treat the animal in green way"</p>
    </div>
    <div class="col-md-6 details">
      <ul>
        <li><i class="fa fa-phone"></i>&nbsp; +8801877136747</li>
        <li><i class="fa fa-envelope-o"></i>&nbsp; gvetpharma@gmail.com</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.row {
  position: fixed;
  width: 100%;
  height: 50px;
  background: rgb(3, 77, 7);
  margin-left: 2px;
  z-index: 1;
}
.text {
  position: relative;
  overflow: hidden;
  border-right: 1px solid #fff;
  padding: 10px;
}
.text p {
  font-size: 1.2em;
  font-weight: 500;
  color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  transform: translateX(100%);
  animation: text 10s linear infinite;
}
.details {
  position: relative;
}
.details ul {
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px;
}

li i {
  font-size: 1.5rem;
  font-weight: 700;
}

@keyframes text {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@media only screen and (max-width: 767px) {
  .row {
  position: fixed;
  width: 100%;
  height: 100px;
  background: rgb(3, 77, 7);
  z-index: 1;
}
  .text{
    display: none;
  }
  .details {
    position: relative;
    width: 100%;
    height: 100px;
  }
  .details ul {
    display: flex;
    justify-content:space-around;
    padding: 10px;
  }
  .details li {
    list-style: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
  .details ul li i {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>