function recieve(){
  //to accept the form details for student

  var data=$('form').serializeArray();


  if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        web3.eth.defaultAccount = web3.eth.accounts[0];

        var CoursetroContract = web3.eth.contract(PASTE ABI HERE!);
        var Coursetro = CoursetroContract.at('CONTRACT ADDRESS');
        console.log(Coursetro);
        $("#submit").click(function() {
                Coursetro.createStudent(Number(attendance),
                            Number(marks),
                            string parent_address,
                            string parent,
                            string name,
                            string course,
                            string profeciency)
             });
    }


    //for displaying the list view
     if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        web3.eth.defaultAccount = web3.eth.accounts[0];
        var studentList = [];

        var CoursetroContract = web3.eth.contract(PASTE ABI HERE!);
        var webObject = CoursetroContract.at('CONTRACT ADDRESS');
        for (i=0; i<students().length; i++){
            studentList[i] = webObject.students(i).studentName;
        }
        
        //to display details
        
        

