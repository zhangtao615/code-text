import Mock from "mockjs"

let TestDataList =()=>{
    let list =[];
    for(let i=0;i<100;i++){
        let obj ={
            name:Mock.Random.cname(),
            id:Mock.Random.integer(100,1000),
            img:Mock.Random.dataImage("100x100","随机数"+Mock.Random.integer(1,100)),
            address:Mock.Random.county(true),
            zip:Mock.Random.zip() ,
            idcard:Mock.Random.id() 
        }
        list.push(obj);
    }
    return list;
}
Mock.mock("https://www.fellow29.com/getData",{data:TestDataList})