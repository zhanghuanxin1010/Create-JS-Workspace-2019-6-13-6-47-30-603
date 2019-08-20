const{isValid,genertMultiApply,multplay}= require('../main');

it ('should number is valid', () => {

    //given
    const first=2;
    const second=3;

    //when
   var result=isValid(first,second);
    

   expect(result).toBe(true);
});
it ('should number is valid', () => {

    //given
    const first=2;
    const second=3;

    //when
   var genert=genertMultiApply(first,second);
    
//then
//    expect(genert[0][0]'2*2=4');
//    expect(genert[1][0],'2*3=6');
//    expect(genert[1][1],'3*3=9');
   expect(genert[0][0]).toBe('2*2=4');
    expect(genert[1][0]).toBe('2*3=6');
    expect(genert[1][1]).toBe('3*3=9');
});
it ('should print', () => {

    //given
    const first=2;
    const second=3;
    var print=""

    //when
   print=multplay(first,second);
    

   expect(print).toBe("2*2=4 \n2*3=6 3*3=9 \n");
});