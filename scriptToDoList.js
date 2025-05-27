const { createApp, ref } = Vue;

const app=createApp({
    setup(){

        const nuevaTarea = ref('');
        const tareas = ref([]);

        const tareasGuardadas=localStorage.getItem('tareas');
        if(tareasGuardadas){
            tareas.value=JSON.parse(tareasGuardadas);

        }


        const agregarTarea=()=>{
            if(nuevaTarea.value.trim()!==''){
                tareas.value.push({ 
                    texto: nuevaTarea.value, 
                    completado: false });
                localStorage.setItem('tareas', JSON.stringify(tareas.value));
                nuevaTarea.value='';
            }
        }

        const eliminarTarea=(index)=>{
            tareas.value.splice(index,1);
            localStorage.setItem('tareas', JSON.stringify(tareas.value));

        }

        const clearAll = ()=>{
            tareas.value=[];
            localStorage.setItem('tareas', JSON.stringify(tareas.value));

        }

        const clearCompleted = () => {
            tareas.value = tareas.value.filter(tarea => !tarea.completado);
            localStorage.setItem('tareas', JSON.stringify(tareas.value));

        }
        


        return{
            nuevaTarea,
            tareas,
            agregarTarea,
            eliminarTarea,
            clearAll,
            clearCompleted
            
        }
    }


}).mount('#appToDoList')