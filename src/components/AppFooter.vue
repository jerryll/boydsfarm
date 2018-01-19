<template>
  <footer class="footer">
    <div class="container">
      <h1 class="title is-size-1 has-text-centered">Contact</h1>
      <div class="content columns is-desktop">
        
      <div class="column has-text-centered">
        <h2 class="subtitle">
          <strong>Boyd's Farm Supply</strong>
        </h2>
        <a href="https://www.google.ca/maps/place/Boyd's+Farm+Supply/@43.8403289,-81.0225527,17z/data=!4m5!3m4!1s0x88296e4c98a675f9:0x5170fc868bc28534!8m2!3d43.8402593!4d-81.0218961">
          88152 Fordwich Line. RR#1, Fordwich, ON N0G 1V0
        </a>
        <p>
          <b-icon icon="phone" size="is-small">
          </b-icon>
          1 (888) 807-5612
        </p>
        <h2 class="subtitle">Hours</h2>
        <table class="store-hours">
          <tbody>
            <td class="weekdays">MON</td>
            <td>08:00AM - 05:30PM</td>
          </tbody>
          <tbody>
            <td class="weekdays">TUE</td>
            <td>08:00AM - 05:30PM</td>
          </tbody>
          <tbody>
            <td class="weekdays">WED</td>
            <td>08:00AM - 05:30PM</td>
          </tbody>
          <tbody>
            <td class="weekdays">THU</td>
            <td>08:00AM - 05:30PM</td>
          </tbody>
          <tbody>
            <td class="weekdays">FRI</td>
            <td>08:00AM - 05:30PM</td>
          </tbody>
          <tbody>
            <td class="weekdays">SAT</td>
            <td>09:00AM - 12:00PM</td>
          </tbody>
          <tbody>
            <td class="weekdays">SUN</td>
            <td>CLOSED</td>
          </tbody>
        </table>
      </div>
      <div class="column">
        <section>
          <b-field horizontal label="Subject">
            <b-input name="subject" expanded></b-input>
          </b-field>

          <b-field horizontal label="From">
            <b-input name="name" placeholder="Name" expanded></b-input>
            <b-input name="email" type="email" placeholder="john@example.com" expanded></b-input>
          </b-field>

          <b-field horizontal label="Phone">
            <b-input name="phone" placeholder="1-123-456-7890" expanded></b-input>
          </b-field>

          <b-field horizontal label="Message">
            <b-input type="textarea"></b-input>
          </b-field>
          <blockquote class="consent-quote">
              I consent to receive electronic messages from Boyd's Farm supply containing 
              sales promotion, product offers, special events and other information relating to their products and services. 
              I understand that I may withdraw consent at any time.
          </blockquote>
          <b-field class="right">
            <b-switch v-model="isSwitchedCustom"
                  name="consent"
                  true-value="Yes"
                  false-value="No"
                  size="is-medium">
                  {{ isSwitchedCustom }}
            </b-switch>
          </b-field>
          <b-field>
            <p class="control">
              <button class="button is-info left">
                Send message
              </button>
            </p>
          </b-field>
        </section>
      </div>
      </div>
  </div>
  </footer>
</template>

<script>
  export default {
    name: 'AppFooter',
    data() {
            return {
                isSwitched: false,
                isSwitchedCustom: 'Yes'
            }
        }
  }
</script>

<style>
  @media only screen and (min-width: 800px){
    .consent-quote {
    margin-left: 2.5em;
    }
    .store-hours.service {
      margin-left: 4em;
    }
  }
  .store-hours tbody td{
    border: none;
    text-align: center;
  }
</style>