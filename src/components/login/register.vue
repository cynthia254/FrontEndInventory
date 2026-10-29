<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in people" :key="person.id">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>

          <td>
            <button @click="editPerson(index)">Edit</button>
            <button @click="deletePerson(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="editing">
      <h2>Edit Person</h2>
      <form>
        <label>
          Name:
          <input v-model="editedPerson.name" type="text" />
        </label>
        <label>
          Age:
          <input v-model="editedPerson.age" type="number" />
        </label>
        <button type="submit" @click.prevent="savePerson">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name:'registerPage',
  data() {
    return {
      people: [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Mary', age: 30 },
        { id: 3, name: 'Bob', age: 35 }
      ],
      editing: false,
      editedPerson: { id: null, name: '', age: null }
    };
  },
  methods: {
    editPerson(index) {
      this.editedPerson = { ...this.people[index] };
      this.editing = true;
    },
    savePerson() {
      const index = this.people.findIndex(p => p.id === this.editedPerson.id);
      this.people.splice(index, 1, this.editedPerson);
      this.editing = false;
      this.editedPerson = { id: null, name: '', age: null };
    },
    deletePerson(index) {
      this.people.splice(index, 1);
    }
  }
};
</script>
