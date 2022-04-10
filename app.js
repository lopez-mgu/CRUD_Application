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
const editExButton=document.getElementById('edit-exercise-button');
const addExButton=document.getElementById('day-exercise-button');
const exForm=document.getElementById('excercises-form');

const sundayCheck=document.getElementById('chck1');
const mondayCheck=document.getElementById('chck2');
const tuesdayCheck=document.getElementById('chck3');
const wednesdayCheck=document.getElementById('chck4');
const thursdayCheck=document.getElementById('chck5');
const fridayCheck=document.getElementById('chck6');
const saturdayCheck=document.getElementById('chck7');

const sundayVoid=document.getElementById('exercise-void1');
const mondayVoid=document.getElementById('exercise-void2');
const tuesdayVoid=document.getElementById('exercise-void3');
const wednesdayVoid=document.getElementById('exercise-void4');
const thursdayVoid=document.getElementById('exercise-void5');
const fridayVoid=document.getElementById('exercise-void6');
const saturdayVoid=document.getElementById('exercise-void7');


const titleWarning=document.getElementById('title-warning');
const exerciseWarning=document.getElementById('exercise-warning');

const exerciseName=document.getElementById('day-exercise');
const numSeries=document.getElementById('day-series');
const numReps=document.getElementById('day-reps');

const sundayList=document.getElementById('sunday-list');
const mondayList=document.getElementById('monday-list');
const tuesdayList=document.getElementById('tuesday-list');
const wednesdayList=document.getElementById('wednesday-list');
const thursdayList=document.getElementById('thursday-list');
const fridayList=document.getElementById('friday-list');
const saturdayList=document.getElementById('saturday-list');

let sundayData=[];
let mondayData=[];
let tuesdayData=[];
let wednesdayData=[];
let thursdayData=[];
let fridayData=[];
let saturdayData=[];

let editObj={
    day:'',
    index:''
}

let daysTitles=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

sundayCheck.addEventListener('change',()=>{
    let items=localStorage.getItem('sundayData');
    if(items===null||items==='[]'){
        sundayVoid.style.display="block";
    }else{
        sundayVoid.style.display="none";
    }
});

mondayCheck.addEventListener('change',()=>{
    let items=localStorage.getItem('mondayData');
    if(items===null||items==='[]'){
        mondayVoid.style.display="block";
    }else{
        mondayVoid.style.display="none";
    }
});

tuesdayCheck.addEventListener('change',()=>{
    let items=localStorage.getItem('tuesdayData');
    if(items===null||items==='[]'){
        tuesdayVoid.style.display="block";
    }else{
        tuesdayVoid.style.display="none";
    }
});

wednesdayCheck.addEventListener('change',()=>{
    let items=localStorage.getItem('wednesdayData');
    if(items===null||items==='[]'){
        wednesdayVoid.style.display="block";
    }else{
        wednesdayVoid.style.display="none";
    }
});

thursdayCheck.addEventListener('change',()=>{
    let items=localStorage.getItem('thursdayData');
    if(items===null||items==='[]'){
        thursdayVoid.style.display="block";
    }else{
        thursdayVoid.style.display="none";
    }
});

fridayCheck.addEventListener('change',()=>{
    let items=localStorage.getItem('fridayData');
    if(items===null||items==='[]'){
        fridayVoid.style.display="block";
    }else{
        fridayVoid.style.display="none";
    }
});

saturdayCheck.addEventListener('change',()=>{
    let items=localStorage.getItem('saturdayData');
    if(items===null||items==='[]'){
        saturdayVoid.style.display="block";
    }else{
        saturdayVoid.style.display="none";
    }
});



//Area for Day Title Functions
function RemoveTitle(){
    updatedaysTitleArr();
    if (workoutDay.value===''){
       
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
        titleWarning.style.display="block";
    }else{
        titleWarning.style.display="none";
        switch(workoutDay.value){
            case 'Domingo':
                daysTitles[0]='Domingo - ' + daytitle.value;
                daytitle.value='';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Lunes':
                daysTitles[1]='Lunes - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                daytitle.value='';
                break;
            case 'Martes':
                daysTitles[2]='Martes - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                daytitle.value='';
                break;
            case 'Miercoles':
                daysTitles[3]='Miercoles - ' + daytitle.value;
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                daytitle.value='';
                break;
            case 'Jueves':
                daysTitles[4]='Jueves - ' + daytitle.value;
                daytitle.value='';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Viernes':
                daysTitles[5]='Viernes - ' + daytitle.value;
                daytitle.value='';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
            case 'Sabado':
                daysTitles[6]='Sabado - ' + daytitle.value;
                daytitle.value='';
                localStorage.setItem('daysTitles',JSON.stringify(daysTitles));
                renderTitles(daysTitles);
                break;
        }
    }
}

function updatedaysTitleArr(){
    let getarry=localStorage.getItem('daysTitles');
    let i=0;
    let hastoUpdate=false;
    if(!(getarry===null)){
        getarry=JSON.parse(getarry);
        while (i<7&&(!hastoUpdate)) {
        
            if(getarry[i].length>daysTitles[i].length) {hastoUpdate=true}
            i++;
        }
        if (hastoUpdate){
            daysTitles=getarry;
        }
    }

}


function renderTitles(){
    let LS = localStorage.getItem('daysTitles');
    if (!(LS===null)){
        let getItem=JSON.parse(LS);
        for (let i = 0; i < 7; i++) {
            let Item=getItem[i];
            let dayTitle=document.getElementById('lbl_chck' + (i+1));
            dayTitle.innerHTML=Item;
        }
    }
}



//Area for exercises by day

function AddExercise(){
    if (workoutDay.value==='' || exerciseName.value==='' || numReps.value==='' || numSeries.value===''){
        exerciseWarning.style.display="block";
    }else{
        exerciseWarning.style.display="none";
        let obj={
            name: exerciseName.value,
            series: numSeries.value,
            reps: numReps.value
        };
        exerciseName.value='';
        numSeries.value='';
        numReps.value='';

        switch(workoutDay.value){
            case 'Domingo':
                sundayVoid.style.display="none";
                sundayData.push(obj);
                localStorage.setItem('sundayData',JSON.stringify(sundayData));
                renderExercises('Domingo');
                break;
            case 'Lunes':
                mondayVoid.style.display="none";
                mondayData.push(obj);
                localStorage.setItem('mondayData',JSON.stringify(mondayData));
                renderExercises('Lunes');
                break;
            case 'Martes':
                tuesdayVoid.style.display="none";
                tuesdayData.push(obj);
                localStorage.setItem('tuesdayData',JSON.stringify(tuesdayData));
                renderExercises('Martes');
                break;
            case 'Miercoles':
                wednesdayVoid.style.display="none";
                wednesdayData.push(obj);
                localStorage.setItem('wednesdayData',JSON.stringify(wednesdayData));
                renderExercises('Miercoles');
                break;
            case 'Jueves':
                thursdayVoid.style.display="none";
                thursdayData.push(obj);
                localStorage.setItem('thursdayData',JSON.stringify(thursdayData));
                renderExercises('Jueves');
                break;
            case 'Viernes':
                fridayVoid.style.display="none";
                fridayData.push(obj);
                localStorage.setItem('fridayData',JSON.stringify(fridayData));
                renderExercises('Viernes');
                break;
            case 'Sabado':
                saturdayVoid.style.display="none";
                saturdayData.push(obj);
                localStorage.setItem('saturdayData',JSON.stringify(saturdayData));
                renderExercises('Sabado');
                break;
        }
    }
}

function renderExercises(daytoRender){
    let items=[];
    switch(daytoRender){
        case 'Domingo':
            items=localStorage.getItem('sundayData');
            if(!(items===null)){
                items=JSON.parse(localStorage.getItem('sundayData'));
                sundayList.innerHTML='';
                items.forEach((element,index) => {
                    sundayList.innerHTML +=`
                    <li class="tab-content-element">
                        <p>${element.name}, series de ${element.series} x ${element.reps} repeticiones</p>
                        <div class="tab-content-buttons">
                            <button class="edit-element-button" onclick="editElement(this.id,'Domingo','${element.name}','${element.series}','${element.reps}')" id="${index}">Editar</button>
                            <button class="remove-element-button" onclick="removeElement(this.id,'Domingo')" id="${index}">Remover</button>
                        </div>
                    </li>               
                    `
                });
                if (items.length===0)sundayVoid.style.display="block";
            }
            break;
        case 'Lunes':
            items=localStorage.getItem('mondayData');
            if(!(items===null)){
                items=JSON.parse(localStorage.getItem('mondayData'));
                mondayList.innerHTML='';
                items.forEach((element,index) => {
                    mondayList.innerHTML +=`
                    <li class="tab-content-element">
                        <p>${element.name}, series de ${element.series} x ${element.reps} repeticiones</p>
                        <div class="tab-content-buttons">
                            <button class="edit-element-button" onclick="editElement(this.id,'Lunes','${element.name}','${element.series}','${element.reps}')" id="${index}">Editar</button>
                            <button class="remove-element-button" onclick="removeElement(this.id,'Lunes')" id="${index}">Remover</button>
                        </div>
                    </li>               
                    `
                });
                if (items.length===0)mondayVoid.style.display="block";
            }
            break;
        case 'Martes':
            items=localStorage.getItem('tuesdayData');
            if(!(items===null)){
                items=JSON.parse(localStorage.getItem('tuesdayData'));
                tuesdayList.innerHTML='';
                items.forEach((element,index) => {
                    tuesdayList.innerHTML +=`
                    <li class="tab-content-element">
                        <p>${element.name}, series de ${element.series} x ${element.reps} repeticiones</p>
                        <div class="tab-content-buttons">
                            <button class="edit-element-button" onclick="editElement(this.id,'Martes','${element.name}','${element.series}','${element.reps}')" id="${index}">Editar</button>
                            <button class="remove-element-button" onclick="removeElement(this.id,'Martes')" id="${index}">Remover</button>
                        </div>
                    </li>               
                    `
                });
                if (items.length===0)tuesdayVoid.style.display="block";
            }
            break;
        case 'Miercoles':
            items=localStorage.getItem('wednesdayData');
            if(!(items===null)){
                items=JSON.parse(localStorage.getItem('wednesdayData'));
                wednesdayList.innerHTML='';
                items.forEach((element,index) => {
                    wednesdayList.innerHTML +=`
                    <li class="tab-content-element">
                        <p>${element.name}, series de ${element.series} x ${element.reps} repeticiones</p>
                        <div class="tab-content-buttons">
                            <button class="edit-element-button" onclick="editElement(this.id,'Miercoles','${element.name}','${element.series}','${element.reps}')" id="${index}">Editar</button>
                            <button class="remove-element-button" onclick="removeElement(this.id,'Miercoles')" id="${index}">Remover</button>
                        </div>
                    </li>               
                    `
                });
                if (items.length===0)wednesdayVoid.style.display="block";
            }
            break;
        case 'Jueves':
            items=localStorage.getItem('thursdayData');
            if(!(items===null)){
                items=JSON.parse(localStorage.getItem('thursdayData'));
                thursdayList.innerHTML='';
                items.forEach((element,index) => {
                    thursdayList.innerHTML +=`
                    <li class="tab-content-element">
                        <p>${element.name}, series de ${element.series} x ${element.reps} repeticiones</p>
                        <div class="tab-content-buttons">
                            <button class="edit-element-button" onclick="editElement(this.id,'Jueves','${element.name}','${element.series}','${element.reps}')" id="${index}">Editar</button>
                            <button class="remove-element-button" onclick="removeElement(this.id,'Jueves')" id="${index}">Remover</button>
                        </div>
                    </li>               
                    `
                });
                if (items.length===0)thursdayVoid.style.display="block";
            }
            break;
        case 'Viernes':
            items=localStorage.getItem('fridayData');
            if(!(items===null)){
                items=JSON.parse(localStorage.getItem('fridayData'));
                fridayList.innerHTML='';
                items.forEach((element,index) => {
                    fridayList.innerHTML +=`
                    <li class="tab-content-element">
                        <p>${element.name}, series de ${element.series} x ${element.reps} repeticiones</p>
                        <div class="tab-content-buttons">
                            <button class="edit-element-button" onclick="editElement(this.id,'Viernes','${element.name}','${element.series}','${element.reps}')" id="${index}">Editar</button>
                            <button class="remove-element-button" onclick="removeElement(this.id,'Viernes')" id="${index}">Remover</button>
                        </div>
                    </li>               
                    `
                });
                if (items.length===0)fridayVoid.style.display="block";
            }
            break;
        case 'Sabado':
            items=localStorage.getItem('saturdayData');
            if(!(items===null)){
                items=JSON.parse(localStorage.getItem('saturdayData'));
                saturdayList.innerHTML='';
                items.forEach((element,index) => {
                    saturdayList.innerHTML +=`
                    <li class="tab-content-element">
                        <p>${element.name}, series de ${element.series} x ${element.reps} repeticiones</p>
                        <div class="tab-content-buttons">
                            <button class="edit-element-button" onclick="editElement(this.id,'Sabado','${element.name}','${element.series}','${element.reps}')" id="${index}">Editar</button>
                            <button class="remove-element-button" onclick="removeElement(this.id,'Sabado')" id="${index}">Remover</button>
                        </div>
                    </li>               
                    `
                });
                if (items.length===0)saturdayVoid.style.display="block";
            }
            break;
    }
}

function EditExercise(){
    // console.log(editObj,'afuera');

    if (workoutDay.value==='' || exerciseName.value==='' || numReps.value==='' || numSeries.value===''){
        exerciseWarning.style.display="block";
    }else{
        exerciseWarning.style.display="none";
        let obj={
            name: exerciseName.value,
            series: numSeries.value,
            reps: numReps.value
        };
        exerciseName.value='';
        numSeries.value='';
        numReps.value='';
        editExButton.style.display="none";
        addExButton.style.display="block";


    switch(editObj.day){
        case 'Domingo':
            items=localStorage.getItem('sundayData');
            items=JSON.parse(items);
            items.splice(editObj.index,1,obj);
            sundayData=items;
            localStorage.setItem('sundayData',JSON.stringify(sundayData));
            renderExercises('Domingo');
            break;
        case 'Lunes':
            items=localStorage.getItem('mondayData');
            items=JSON.parse(items);
            items.splice(editObj.index,1,obj);
            mondayData=items;
            localStorage.setItem('mondayData',JSON.stringify(mondayData));
            renderExercises('Lunes');
            break;
        case 'Martes':
            items=localStorage.getItem('tuesdayData');
            items=JSON.parse(items);
            items.splice(editObj.index,1,obj);
            tuesdayData=items;
            localStorage.setItem('tuesdayData',JSON.stringify(tuesdayData));
            renderExercises('Martes');
            break;
        case 'Miercoles':
            items=localStorage.getItem('wednesdayData');
            items=JSON.parse(items);
            items.splice(editObj.index,1,obj);
            wednesdayData=items;
            localStorage.setItem('wednesdayData',JSON.stringify(wednesdayData));
            renderExercises('Miercoles');
            break;
        case 'Jueves':
            items=localStorage.getItem('thursdayData');
            items=JSON.parse(items);
            items.splice(editObj.index,1,obj);
            thursdayData=items;
            localStorage.setItem('thursdayData',JSON.stringify(thursdayData));
            renderExercises('Jueves');
            break;
        case 'Viernes':
            items=localStorage.getItem('fridayData');
            items=JSON.parse(items);
            items.splice(editObj.index,1,obj);
            fridayData=items;
            localStorage.setItem('fridayData',JSON.stringify(fridayData));
            renderExercises('Viernes');
            break;
        case 'Sabado':
            items=localStorage.getItem('saturdayData');
            items=JSON.parse(items);
            items.splice(editObj.index,1,obj);
            saturdayData=items;
            localStorage.setItem('saturdayData',JSON.stringify(saturdayData));
            renderExercises('Sabado');
            break;
        }

        editObj={
            day:'',
            index:''
        }
    }
}

function editElement(index,day,name,series,reps){

    editExButton.style.display="block";
    addExButton.style.display="none";
    exerciseName.value=name;
    numSeries.value=series;
    numReps.value=reps;
    editObj.day=day;
    editObj.index=index;
    // console.log(editObj,'adentro');
}

function removeElement(index,day){
    // console.log('entro');
    // console.log(index);
    // console.log(day);
    let items=[];
    switch(day){
        case 'Domingo':
            items=localStorage.getItem('sundayData');
            items=JSON.parse(items);
            items.splice(index,1);
            sundayData=items;
            localStorage.setItem('sundayData',JSON.stringify(sundayData));
            renderExercises('Domingo');
            break;
        case 'Lunes':
            items=localStorage.getItem('mondayData');
            items=JSON.parse(items);
            items.splice(index,1);
            mondayData=items;
            localStorage.setItem('mondayData',JSON.stringify(mondayData));
            renderExercises('Lunes');
            break;
        case 'Martes':
            items=localStorage.getItem('tuesdayData');
            items=JSON.parse(items);
            items.splice(index,1);
            tuesdayData=items;
            localStorage.setItem('tuesdayData',JSON.stringify(tuesdayData));
            renderExercises('Martes');
            break;
        case 'Miercoles':
            items=localStorage.getItem('wednesdayData');
            items=JSON.parse(items);
            items.splice(index,1);
            wednesdayData=items;
            localStorage.setItem('wednesdayData',JSON.stringify(wednesdayData));
            renderExercises('Miercoles');
            break;
        case 'Jueves':
            items=localStorage.getItem('thursdayData');
            items=JSON.parse(items);
            items.splice(index,1);
            thursdayData=items;
            localStorage.setItem('thursdayData',JSON.stringify(thursdayData));
            renderExercises('Jueves');
            break;
        case 'Viernes':
            items=localStorage.getItem('fridayData');
            items=JSON.parse(items);
            items.splice(index,1);
            fridayData=items;
            localStorage.setItem('fridayData',JSON.stringify(fridayData));
            renderExercises('Viernes');
            break;
        case 'Sabado':
            items=localStorage.getItem('saturdayData');
            items=JSON.parse(items);
            items.splice(index,1);
            saturdayData=items;
            localStorage.setItem('saturdayData',JSON.stringify(saturdayData));
            renderExercises('Sabado');
            break;
    }
}


//Render area

renderTitles(daysTitles);
renderExercises('Domingo');
renderExercises('Lunes');
renderExercises('Martes');
renderExercises('Miercoles');
renderExercises('Jueves');
renderExercises('Viernes');
renderExercises('Sabado');

