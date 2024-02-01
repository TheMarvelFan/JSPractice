let result = 1;
let factNum = 10;
for ( ; ; )
{
    if (factNum === 0)
    {
        break;
    }
    result *= factNum --;
}
console.log(result);