let is = (arr) => {
    for(let i=1;i<arr.length;i++)
    {
        let j = i-1
        let temp = arr[i]
        while(j>=0 && arr[j]>temp)
        {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp;
    }
    return arr
}
console.log(is([3,0,2,5,7,11,1]));


/**
 * min = i

for(j->i+1 to n)
{
 if(arr[j] < arr[i])
{
   min = j
}

if(min != i)
{
let temp = arr[i]
arr[i] = arr[min];
arr[min] = temp
}
}

return arr;
 */

function ss(arr){
    let n = arr.length
    
    for(let i=0;i<n;i++)
    {
        let min = i
        for(let j=i+1;j<n;j++)
        {
            if(arr[j] < arr[min])
            {
                min = j
            }
        }
       if(min != i)
       {
           let temp = arr[i]
           arr[i] = arr[min]
           arr[min] = temp;
           
       }
        
    }
    
    return arr
    
}

console.log(ss([5,4,3,2,1]))