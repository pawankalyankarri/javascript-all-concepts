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

    let avgdepts = {}
    let depts = []
    arr.forEach((obj)=>{
        if (Object.keys(avgdepts).includes(obj.department)){
            avgdepts[obj.department] += obj.salary
            avgdepts[`${obj.department}cnt`] += 1
        }else{
            depts.push(obj.department)
            avgdepts[obj.department] = obj.salary
            avgdepts[`${obj.department}cnt`] = 1
        }
    })
    for(let d of depts){
        avgdepts[d] = avgdepts[d]/avgdepts[`${d}cnt`]
    }
    console.log(avgdepts)


    let totalavgsal = arr.reduce((acc,obj)=>acc+obj.salary,0)/arr.length
    let res = arr.filter(obj=>obj.salary>totalavgsal)
    console.log(res)


    console.log(avgdepts)
    let highpayroll = 0
    let highpayrolldept = ''
    for(let d of depts){
        if (avgdepts[d] >= highpayroll){ 
            highpayroll = avgdepts[d]
            highpayrolldept = d
            
        }
    }
    console.log(highpayrolldept,'=>',highpayroll)
    
}

report(employees)