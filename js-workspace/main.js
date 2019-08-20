


function multplay(first,second)
{
    var output="";
   var valid= isValid(first,second);
   if (!valid)
   {
       return valid 
   }
   var multipaly=genertMultiApply(first,second);
    output=printMultipaly(multipaly);
return output;

}
function  isValid(first,second)
{
  return first<second;
}
function  genertMultiApply(first,second)
{ var genertarray=[];
    //
   
    var times=second-first+1;
    for (let rowIndex=0;rowIndex<times;rowIndex++)
    {
        var row= [];
        for (let columnIndex=0;columnIndex<(rowIndex+1);columnIndex++)
        {
         var result=(rowIndex+first)*(columnIndex+first);
          let out=(columnIndex+first)+"*"+(rowIndex+first)+"="+result;
         row.push(out);
        }

        genertarray.push(row);
    }
    return genertarray;
 
}
function  printMultipaly(multipaly)
{
    var out="";
    for (let i=0;i<multipaly.length;i++)
    {
        for (let j=0;j<multipaly[i].length;j++)
        {  
         out+=multipaly[i][j]+" ";
        }
        out += "\n";
        
    }
    return out ;
}
module.exports = {isValid,genertMultiApply,multplay};
