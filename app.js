// Variable Declarations
const workoutDay=document.getElementById('dp-days').value;
const daytitle=document.getElementById('day-title').value;
const titleButton=document.getElementById('day-title-button');
const sundayTitle=document.getElementById('lbl_chck1');
const mondayTitle=document.getElementById('lbl_chck2');
const tuesdayTitle=document.getElementById('lbl_chck3');
const wednesdayTitle=document.getElementById('lbl_chck4');
const thursdayTitle=document.getElementById('lbl_chck5');
const fridayTitle=document.getElementById('lbl_chck6');
const saturdayTitle=document.getElementById('lbl_chck6');

let sundayData=[{title:''}];
let mondayData=[{title:''}];
let tuesdayData=[{title:''}];
let wednesdayData=[{title:''}];
let thursdayData=[{title:''}];
let fridayData=[{title:''}];
let saturdayData=[{title:''}];

titleButton.addEventListener('click',()=>{
    console.log('---> ',workoutDay);
    if (workoutDay===''){
        alert('Por favor seleccione el día que quiere modificar del dropdown list.');
    }else{
        switch(workoutDay){
            case 'Domingo':
                sundayData['title']='Domingo - ' + daytitle;
                sundayData.forEach(element => {
                    sundayTitle.innerHTML=`${element.title}`; 
                });
                

                // codigo
                break;
            case 'Lunes':
                // codigo
                break;
            case 'Martes':
                // codigo
                break;
            case 'Miercoles':
                // codigo
                break;
            case 'Jueves':
                // codigo
                break;
            case 'Viernes':
                // codigo
                break;
            case 'Sabado':
                // codigo
                break;
        }
    }
});