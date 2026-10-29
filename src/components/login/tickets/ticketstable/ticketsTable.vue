<template>
  <div class="mx-4"   v-if="this.showtickets">
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Ticket Id</th>
          <th scope="col">Creator</th>
          <th scope="col">Date Created</th>

          <th scope="col">Priority</th>
          <th scope="col">Service Issue</th>
          <th scope="col">Service Name</th>
          <th scope="col">Status</th>
          <th scope="col">Subject</th>
          <th scope="col">Title</th>
          <th class="col">Assigned To</th>
          <th class="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="ticket in this.alltickets" v-bind:key="ticket.id">
        <tr class="mt-4">
          <th scope="row">{{ ticket.id }}</th>
          <td>{{ ticket.creatorEmail }}</td>
          <td><p>{{ formatDateAssigned(ticket.dateCreated) }}</p></td>

          <td>{{ ticket.priorityName }}</td>
          <td>{{ ticket.serviceIssue }}</td>
          <td>{{ ticket.serviceName }}</td>

          <td class=" ">
            <button class="btn btn-info text-light" style="width: 110px;">{{ ticket.status }}</button>
          </td>
          <td>{{ ticket.subject }}</td>
          <td>{{ ticket.ticketTitle }}</td>
          <td>{{ ticket.assignedtoNames }}</td>

          <td >
            <div class="" style="display: flex;width: 100%;">
          
            <button type="button"  data-toggle="tooltip" data-placement="top" title="Assign this ticket" class="btn btn-danger"><a @click="ticketsdetaila(ticket.id)" type="" class=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="white" class="bi bi-person-fill-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg></a></button>
<button  @click.prevent="resolveticket(ticket.id)" type="button" class="btn btn-primary mx-1" data-toggle="tooltip" data-placement="top" title="Resolve" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="white" class="bi bi-send-check-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg>
</button>
<button  @click.prevent="escalateticket(ticket.id)" type="button" class="btn btn-secondary mx-1" data-toggle="tooltip" data-placement="top" title="Escalate" ><svg xmlns="http://www.w3.org/2000/svg" width="20-" height="18" fill="white" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
</svg>
</button>
<button @click.prevent="closeticket(ticket.id)" type="button" class="btn btn-success mx-1" data-toggle="tooltip" data-placement="top" title="Close this ticket" ><router-link to="/close" class="text-light "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="white" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg></router-link></button>
</div>

  
          </td>
        </tr>
      </tbody>
    </table>
 
  </div>
  <div class="mx-4" v-if="acessdenied">
    <p>You do not have permission to access this page.</p>
  </div>
 
</template>

<script>
import swal from "sweetalert2";
import AppMixins from "../../../../Mixins/shared";
export default {
  name: "ticketsTable",
  mixins: [AppMixins],
  data() {
    return {
      alltickets: [],
      showtickets:false,
      acessdenied:false,
    };
  },
  methods: {
    async getalltickets() {
      var response = await this.getAllTickets();
      console.log("Get all tickets:", response);
      if (response.code == "200") {
        this.acessdenied=false;
        this.showtickets=true;
        this.alltickets = response.body;
        console.log("All tickets:", this.alltickets);
      
      } 
      else {
        this.acessdenied=true;
        this.showtickets=false;
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
         
      }
    },
    async ticketsdetaila(ticketsid) {
      this.$router.push({
        path: `/asignticket/${ticketsid}`,
        replace: true,
      });


    },
    async resolveticket(ticketid){
      console.log("ticketis",ticketid)
      this.$router.push({
        path: `/resolve/${ticketid}`,
        replace: true,
      });

    },
    async escalateticket(ticketid){
      console.log("ticketis",ticketid)
      this.$router.push({
        path: `/escalate/${ticketid}`,
        replace: true,
      });

    },
    async closeticket(ticketid){
      console.log("ticketis",ticketid)
      this.$router.push({
        path: `/close/${ticketid}`,
        replace: true,
      });

    },
    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
  },
  created() {
    this.getalltickets();
  },
};
</script>

<style>






</style>
