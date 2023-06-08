<script>
    
	export let todo;
	export let updateTodo;
	export let deleteTodo;

</script>


<div class="flex  mt-2 w-full  items-center justify-center">
    <div class=" w-11/12 rounded p-2 bg-gray-900 flex flex-row  justify-end">
        <p class={`text-left ${todo.status === 'completed' && ' line-through '}`} > {todo.title} </p>
        
        <span 
            class= {` pt-1 ml-1 ${todo.status === 'completed' && ' hidden '}`}
             on:click={updateTodo({id: todo.id})}>
             <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-500" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </span>

        <span  class=" pt-1 ml-1" on:click={deleteTodo({id: todo.id})}>
            <svg class="fill-red-500" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </span>

    </div>
</div>