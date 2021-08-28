

//callback code example
console.log("start")

function loginUser(email,password,callback){
  setTimeout(()=>{
callback ({ userEmail:email})
  },1500)
}
function getUserVideos(email,callback){
  setTimeout(()=>{
    callback ([ "video1","video2","video3" ])
   },1000)
}

const user = loginUser('moon@yahoo.com',1369,(user)=>{
  console.log(user)
  getUserVideos(user.userEmail,(videos)=>{
    console.log(videos)

  })
})

console.log("finish")

//promise sample code
  const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

//sample code
const wait = (
    time,
    cancel = Promise.reject()
  ) => new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, time);
    const noop = () => {};
  
    cancel.then(() => {
      clearTimeout(timer);
      reject(new Error('Cancelled'));
    }, noop);
  });
  
//   const shouldCancel = Promise.resolve(); // Yes, cancel
  const shouldCancel = Promise.reject(); // No cancel
  
  wait(2000, shouldCancel).then(
    () => console.log('Hello!'),
    (e) => console.log(e.message) // [Error: Cancelled]
  ); 