class Orxan{
    constructor(){
        this.name="Orxan";
    }

    myPrint(){
        console.log(this.name);
    }

    appPrint(){
        console.log("fsfsf");
    }
}

class App extends Orxan{
    constructor(){
        //Extends ucun super metodunun olmasi mutleqdir
        super();
        this.gender = "male";
    }


}

const app = new App();
app.appPrint();
app.myPrint();