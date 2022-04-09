// Variable Declarations

const workoutDay=document.getElementById('dp-days');
const daytitle=document.getElementById('day-title');
const ctitleButton=document.getElementById('day-title-button');
const sundayTitle=document.getElementById('lbl_chck1');
const mondayTitle=document.getElementById('lbl_chck2');
const tuesdayTitle=document.getElementById('lbl_chck3');
const wednesdayTitle=document.getElementById('lbl_chck4');
const thursdayTitle=document.getElementById('lbl_chck5');
const fridayTitle=document.getElementById('lbl_chck6');
const saturdayTitle=document.getElementById('lbl_chck6');

let sundayData=[];
let mondayData=[];
let tuesdayData=[];
let wednesdayData=[];
let thursdayData=[];
let fridayData=[];
let saturdayData=[];

let daysTitles=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

//Area for Day Title Functions
function RemoveTitle(){
    updatedaysTitleArr();
    if (workoutDay.value===''){
        alert('Por favor seleccione el día que quiere remover el titulo a default.');
    }else{
        switch(workoutDay.value){
            case 'Domingo':
                console.log(daysTitles);
                daysTitles[0]='Domingo';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Lunes':
                daysTitles[1]='Lunes';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Martes':
                daysTitles[2]='Martes';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Miercoles':
                daysTitles[3]='Miercoles';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Jueves':
                daysTitles[4]='Jueves';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                console.log('entro')
                break;
            case 'Viernes':
                daysTitles[5]='Viernes';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Sabado':
                daysTitles[6]='Sabado';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
        }
    }

}

function ChangeTitle(){

    updatedaysTitleArr();

    if (workoutDay.value==='' || daytitle.value===''){
        alert('Por favor seleccione el día que quiere modificar del dropdown list  e introduzca el titulo.');
    }else{
        switch(workoutDay.value){
            case 'Domingo':
                console.log(daysTitles);
                daysTitles[0]='Domingo - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Lunes':
                daysTitles[1]='Lunes - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Martes':
                daysTitles[2]='Martes - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Miercoles':
                daysTitles[3]='Miercoles - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Jueves':
                daysTitles[4]='Jueves - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                console.log('entro')
                break;
            case 'Viernes':
                daysTitles[5]='Viernes - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Sabado':
                daysTitles[6]='Sabado - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
        }
    }
}

function updatedaysTitleArr(){
    let getarry=JSON.parse(localStorage.getItem('daysTitles'));
    let i=0;
    let hastoUpdate=false;
    
    while (i<7&&(!hastoUpdate)) {
        
        if(getarry[i].length>daysTitles[i].length) {hastoUpdate=true}
        i++;
    }
    if (hastoUpdate){
        daysTitles=getarry;
    }
}


function renderTitles(arr){
    for (let i = 0; i < 7; i++) {
        let getItem=localStorage.getItem('daysTitles');
        getItem=JSON.parse(getItem);
        getItem=getItem[i];
        let dayTitle=document.getElementById('lbl_chck' + (i+1));
        dayTitle.innerHTML=getItem;
    }
}

renderTitles(daysTitles);

//Area for exercises by day

function AddExercise(){

}







