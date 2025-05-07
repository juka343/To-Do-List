const { createApp, ref } = Vue;

const app=createApp({
    setup(){

        const nuevaTarea = ref('');
        const tareas = ref([]);

        const agregarTarea=()=>{
            if(nuevaTarea.value.trim()!==''){
                tareas.value.push(nuevaTarea.value);
                nuevaTarea.value='';
            }
        }

        const eliminarTarea=(index)=>{
            tareas.value.splice(index,1);
        }


        return{
            nuevaTarea,
            tareas,
            agregarTarea,
            eliminarTarea
            
        }
    }


}).mount('#appToDoList')