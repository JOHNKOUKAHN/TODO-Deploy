
<script>

  let title = '';
  export let createTodo;

  const checkTodo = () =>{
    if ( !title.length ) return ;
    createTodo({title});
    title = '';
  };

</script>

<div class="flex w-full  items-center justify-center p-5">
    <div class="w-full rounded-lg  p-2 ">
      <div class="flex">
        <input 
          bind:value={title}
          type="text"  
          class="w-full rounded-l border-2 border-gray-400 bg-gray-800 pl-2 text-base font-semibold outline-0" 
          placeholder="Add a new Todo..."  />
        <input 
          on:click={checkTodo}
          value="Add"  
          type="button" class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
      </div>
    </div>
</div>