function distance(arr) {

    let time=arr[2]/3600;

    let speed1=arr[0]*1000;
    let speed2=arr[1]*1000;
    let s1=speed1*time;
    let s2=speed2*time;
    let dist=Math.abs(s1-s2);

    console.log(dist)
    
}
