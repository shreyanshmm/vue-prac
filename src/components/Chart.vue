<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  // props: ['data', 'options'],
  mounted() {
    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Github commits",
          backgroundColor: "#f87973",
          data: [40, 20, 12, 39, 20, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    });
  }
};
</script>
