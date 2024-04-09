import inquirer from "inquirer";
let todolist : string[] = [];
 let condition = true;


let Alltasks = async () => {
  while(condition){
    let tasks = await inquirer.prompt([
      {
        name: "options",
        message: "Select any one the task u want to perform?? ",
        type: "list",
        choices: [
          "Add to my list",
          "Delete task from my list",
          "Update my List",
          "View my List",
          "Exit!!!"
        ],
      }
    ]);

      if(tasks.options === "Add to my list"){
        await addlistfunc()
      }
      else if (tasks.options === "Delete task from my list")
        {
          await deletetaskfunc()
        }
        else if (tasks.options === "Update my List"){
          await updatelistfunc()
        }
        else if (tasks.options === "View my List"){
           await viewitem()
        }
       else if (tasks.options === "Exit!!!"){
        condition = false;
       }
      }

    }

               //Add to list

    let addlistfunc = async () => {
      let addeditem = await inquirer.prompt([{
        name: "addedtask",
        type: "input",
        message: "Plz enter item you want to add in your list??",
      },
    ]);
       todolist.push(addeditem.addedtask);
       console.log(`${addeditem.addedtask} Added in your List Successfully!! You Can Check it by clicking view my list!!! `)
    }
    
           //view my list
     let viewitem = () => {
      console.log("Here is your List!!!");
      todolist.forEach((addedtask) => {
        console.log(`${addedtask}`)
      })
     }
       //delete task
    let deletetaskfunc = async () => {
      await viewitem()
      let deleteindex = await inquirer.prompt([{
        name: "deletedIndex",
        message: "Enter the index number of your item You want to Delete from your List!!",
        type: "number"
      }]);
      let deletedindex = todolist.splice(deleteindex.deletedindex, 1);
      console.log(`${deletedindex} Removed from your List!!!`);
    }
             //update list
    let updatelistfunc = async() => {
      await viewitem()
      let updatelist = await inquirer.prompt([{
        name: "index",
        type: "number",
        message: "Enter the index No of your Item you want to update!!!"
      },
    {
      name: "newitem",
      message: "Enter Your New Item You want to Update",
      type: "input",

    }
  ]);
  todolist[updatelist.index] = updatelist.newitem
  console.log(`task at index no: ${updatelist.index} Updated In Your List Successfully!!!`)

}
    Alltasks();

  

  

  
