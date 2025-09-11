const employees = [
  { name: "Alice", department: "Engineering", salary: 95000, experience: 5 },
  { name: "Bob", department: "Marketing", salary: 65000, experience: 3 },
  { name: "Carol", department: "Engineering", salary: 110000, experience: 8 },
  { name: "David", department: "Marketing", salary: 70000, experience: 4 }
];


function report(arr){
    let maxsal = {};
    arr.forEach(obj=>{
        if(Object.keys(maxsal).includes(obj.department)){
            if(maxsal[obj.department] < obj.salary){
                maxsal[obj.department] = obj.salary
            }
        }
        else{
            maxsal[obj.department] = obj.salary
        }
    })
    console.log(maxsal)


    
}

report(employees)