<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>IMEI 1</th>
          <th>IMEI 2</th>
          <th></th> <!-- Empty header for actions -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in scannedItems" :key="index">
          <td>
            <input
              v-model="item.serialNumber"
              type="text"
              class="form-control"
              :disabled="item.isEditing"
            />
          </td>
          <td>
            <input
              v-model="item.imei1"
              type="text"
              class="form-control"
              :disabled="item.isEditing"
            />
          </td>
          <td>
            <input
              v-model="item.imei2"
              type="text"
              class="form-control"
              :disabled="item.isEditing"
            />
          </td>
          <td>
            <button @click="toggleEdit(item)" class="btn btn-sm btn-primary">
              {{ item.isEditing ? 'Save' : 'Edit' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "salesPage",
  data() {
    return {
      scannedItems: [
        { serialNumber: "SN123", imei1: "IMEI123", imei2: "IMEI456", isEditing: false },
        { serialNumber: "SN456", imei1: "IMEI789", imei2: "IMEI012", isEditing: false }
        // Add more items as needed
      ]
    };
  },
  methods: {
    toggleEdit(item) {
      item.isEditing = !item.isEditing;
      // You can implement save logic here if needed
    }
  }
};
</script>

<style scoped>
/* Add your component styles here */
</style>
