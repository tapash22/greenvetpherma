<template>
  <div class="overview">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <h3>10</h3>
          <h1>Employe</h1>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h3>15</h3>
          <h1>Partners</h1>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h3>51</h3>
          <h1>Products</h1>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h3>05</h3>
          <h1>Grand Event</h1>
        </div>
      </div>
    </div>
    <div class="row3">
      <div class="col-md-6">
        <apexchart
          width="500"
          type="donut"
          :options="options1"
          :series="series1"
        ></apexchart>
      </div>
      <div class="col-md-6">
        <apexchart
          width="500"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </div>

    <div class="row2">
      <div class="col-md-6">
        <p class="wrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          inventore ad quod quam blanditiis voluptates itaque sapiente, minus
          facilis commodi fugiat natus dolores perferendis rem pariatur
          doloribus tempore recusandae laborum.
        </p>
      </div>
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, eius!
          Debitis accusantium asperiores quam quaerat ab dolorem amet odit. Quis
          modi molestiae, sequi pariatur ipsum ducimus ex aut nam. Pariatur.
        </p>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, eius!
          Debitis accusantium asperiores quam quaerat ab dolorem amet odit. Quis
          modi molestiae, sequi pariatur ipsum ducimus ex aut nam. Pariatur.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'dashboard',
  data: function () {
    return {
      options1: {},
      series1: [10 ,15 ,51 ,5 ],
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [2014, 2015, 2016, 2017, 2018,2019,2020,2021],
        },
      },
      series: [
        {
          name: "series-1",
          data: [20,30,40,20,50,70,30,65],
        },
      ],
    };
  },
};
</script>

<style scoped>
.overview {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
}
.row {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.col-md-3 {
  width: 24%;
}
/* .card{
    padding: 10px;
} */
.card h3 {
  font-size: 1.5rem;
  font-weight: 500;
  color: blue;
  text-align: right;
  padding: 10px;
}

.card h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #000;
  text-align: left;
  padding: 10px;
}
.row2 {
  margin-top: 20px;
  display: flex;

  justify-content: space-around;
  background: #fff;
}
.col-md-6 {
  width: 48%;
  box-shadow: 2px 2px 5px blue;
  padding: 10px;
}
.col-md-6 .wrap {
  font-size: 1.5;
  font-weight: 500;
  color: #000;
  text-align: left;
  padding: 10px;
  margin-top: 15%;
}
.col-md-6 p {
  font-size: 1.5;
  font-weight: 500;
  color: #000;
  text-align: left;
  padding: 10px;
}
.row3 {
  margin-top: 50px;
  display: flex;
  background: #fff;
}
.row3 .col-md-6{
  padding: 5px;
  margin:10px;
}
</style>