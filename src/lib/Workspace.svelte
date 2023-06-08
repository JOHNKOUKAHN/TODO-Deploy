<script>
    import Todo from "./Todo.svelte";
    import SearchBar from "./SearchBar.svelte";
    import { onMount } from "svelte";
    import quoteApi from "../api/quoteapi";
    import supabaseApi from "../api/supabaseApi";

    let quote = {};

    let todos = [];
    let completedTodos = 0;
    

    onMount(async () => {

        getTodos();
        getQuote();
       
    });
    
        const getQuote = async () => {
            try {
                const response = await quoteApi.get('/quotes?category=happiness');
                quote = response.data[0];
            } catch (error) {
                console.error(error);
            }
        };

    const getTodos = async () => {
        try {
            const response = await supabaseApi.get('/todos?select=*');
            todos = response.data;
            completedTodos = todos.filter( t => t.status === 'completed').length;
        } catch (error) {
            console.error(error);
        }
    };

    const updateTodo = async ({ id }) => {
        
        try {
            await supabaseApi.patch(`/todos?id=eq.${id}`, { status: 'completed'});
            getTodos();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTodo = async ({ id }) => {
        try {
            await supabaseApi.delete(`/todos?id=eq.${id}`);
            getTodos();
        } catch (error) {
            console.error(error);
        }
    };

    const createTodo = async ({ title }) => {
        try {
            await supabaseApi.post(`/todos`,{ title });
            getTodos();
        } catch (error) {
            console.error(error);
        }
    };
</script>

<div class="font-manrope flex h-1/2 w-full items-center justify-center">
    <div class="mx-auto rounded w-11/12 lg:w-[420px] bg-gray-800 p-4">
        <h1 class="text-left">Todos</h1>

        <SearchBar createTodo={createTodo}/>

        {#each todos as comp}
            <Todo todo={comp} {updateTodo} {deleteTodo} />
        {/each}

        <p class="text-left">
            Total Todos: {todos.length} | Completed Todos: {completedTodos}
        </p>

        <p class="text-left">
            <span class="italic"> "{quote.quote}" </span> - {quote.author}
        </p>
    </div>
</div>
