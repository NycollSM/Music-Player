const sort = document.querySelector('sort');
sort.forEach(element => {
    element.addEventListener('change',getSelectValue);
});
function getSelectValue (){
    console.log('hola',sort);
}
