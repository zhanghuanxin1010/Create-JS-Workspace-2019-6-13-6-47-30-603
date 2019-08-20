const add = require('../main');

it ('should divide two numbers', () => {

    //given
    const firstNumber=2;
    const secondNumber=4;

    //when
    const result=divide(firstNumber.secondNumber);
     String divide(first,second)
    {
     if(first>second||first>1000||second>1000||first<1||second<1)
     {
         return null;
     }


     for(var i=first;i<=second;i++)
     {
        for(var j=first;j<=second;j++)
        {
            i*j
        }
     }
    }


    expect(result).toBe(2);
});
