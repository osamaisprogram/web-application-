import express from 'express';


const app = express();


const students = [

    {
        id: 1,
        name: "yasser",
        city: "mans",
    },
    {
        id: 2,
        name: "ahmed",
        city: "alex",
    },

    {
        id: 3,
        name: "ali",
        city: "helown",
    },

    {
        id: 4,
        name: "noha",
        city: "tanta",
    },

];
const studentfunction = (request, response) => {

    let output = "<ul>";

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        output += 
        "<li><a href='/students/" + 
        student.id + 
        "'>"+
         student.name + 
         "</a></li>" ;

    }
    output += "</ul>";

    response.send(output);

};
app.get('/students', studentfunction)

app.get('/students/:id' , (request, response) => {

    const id = request.params.id;

 const student = students.find((item) => {

        return item.id == id;
})

console.log(student);
//response.render("student" , {layoyt : false});

response.send('<h1>' + student.id + '</h1> '+ '<br>' + student.name +  '<br>' + student.city )
});


app.listen(5000);
