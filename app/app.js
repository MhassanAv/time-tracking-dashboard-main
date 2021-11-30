let getdata = async () => {
    const req = await fetch("/");
    try{
        const wholeData = await req.json();
        console.log(wholeData);
    }catch(error){
        console.log('error',error);
    }
}