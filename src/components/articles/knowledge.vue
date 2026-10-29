<template>
      <div id="intro" class="p-5 text-center bg-light " >
      <h1 class="mb-3 h2">Knowledge Base </h1>
      <p class="mb-3">Get our knowledge articles here</p>
      
    </div>
    <div>
    

      <table class="table">
      <thead>
        <tr>
          <th>Article Name</th>
          <th>Description</th>
        
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(file, index) in files" :key="index">
          <td>{{ file.name }}</td>
          <td>{{ file.description }}</td>
         
<td><a :href="file.url" :download="file.name">Download</a></td>
        
        </tr>
      </tbody>
    </table>
      
      
    </div>
  </template>
  
  <script>
  export default {
    name:'articlePage',
    data() {
      return {
        files: [
          { name: 'pos.pdf',description:'wefcvbhytwxcxvvgew', url: '../../assets/files/pos.pdf' },
          { name: 'f20fp.pdf',description:'wefcvbhytwxcxvvgew', url: '../../assets/files/f20fp.pdf' },
          { name: 'f600.pdf',description:'wefcvbhytwxcxvvgew', url: '../.../assets/files/f600.pdf' }
        ]
      };
    }
    
  };
  </script>
  
  <style>
  /* Add Bootstrap styles here if needed */
  </style>
  



  <style>
  table.table {
  margin-left: auto; 
  margin-right: auto;
  margin-top: 50px;
}
</style>
  
  