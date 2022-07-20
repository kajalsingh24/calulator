class calulator
{ 
constructor(previousOpenandtextElement,currentOperandTextElement)
{
    this.previousOpenandtextElement = previousOpenandtextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
}
// =============================clear method======================  9+2
clear()
{
     this.currentoperand="";  
     this.previousOperand="";
     this.operation = undefined;   
}
// =========================delet method=========================
delete()
{
     this.currentoperand = this.currentoperand.toString().slice(0, -1);
}
// ==================append number method========================
appendNumber(number)
{
     if(number==="." && this.currentoperand.includes("."))   
     {
          return;
     }
this.currentoperand =this.currentoperand.toString() + number.toString();
   
}
// =======================- chooseoperation(+,-,%,*)==========
chooseopeartion(operation)
{
if(this.currentoperand === "")
return;
if(this.previousOperand !== "")
{
this.compute();
}
this.operation = operation;
this.previousOperand =this.currentoperand;
this.currentoperand="";
}
// ====================compute()method=========================
compute() {
     let result;
     const prev = parseFloat(this.previousOperand);
     const current = parseFloat(this.currentoperand);
     if (isNaN(prev) || isNaN(current)) return;
 
     switch(this.operation) {
       case "+":
         result = prev + current;
         break;
       case "-":
         result = prev - current;
         break;
       case "x":
         result = prev * current;
         break;
       case "÷":
         result = prev / current;
         break;
 
       default:
         break;
     }
     this.currentoperand = result;
     this.operation = undefined;
     this.previousOperand = "";
   }
// ====================update()=========================
updatedisplay()
{
 this.currentOperandTextElement.innerText = this.currentoperand;
 if(this.operation!=null)
 {
this.previousOpenandtextElement.innerText = `${this.previousOperand} ${this.operation}`;
 }
 else
 {
this.previousOpenandtextElement.innerText = this.previousOperand;
 }
}
// ============================display num()----------------
}
const numbutton =document.querySelectorAll( '[data-number]')  
const operationbtns =document.querySelectorAll( '[data-operation]');
const equalButton = document.querySelector( '[data-equals]');           
const deletButton = document.querySelector( '[data-delete]');  
const allclearbtn = document.querySelector('[ data-all-clear]');  
const previousOpenandtextElement = document.querySelector('[data-prev-operand]');
const currentOperandTextElement = document.querySelector('[data-curr-operand ]');
document.addEventListener("DOMContentLoaded",()=>
{
     const calc = new calulator(previousOpenandtextElement,currentOperandTextElement);
     // -----------------foreach for clck every button---
     numbutton.forEach((button)=> 
     {
         button.addEventListener('click',()=>
         {
          calc.appendNumber(button.innerText)
          calc.updatedisplay()
         }); 
     });
//   ===========================chooseoperation====================
      operationbtns.forEach((button)=>
     {
     button.addEventListener("click",() =>
     {        
          calc.chooseopeartion(button.innerText);
          calc.updatedisplay();
         
     });
     });
     equalButton.addEventListener("click",() => 
     {
           calc.compute();
           calc.updatedisplay();
     })
     deletButton.addEventListener("click", () => {
          calc.delete();
          calc.updatedisplay();
        });
     allclearbtn.addEventListener('click', (c)=>
        {
          calc.clear();
          calc.updatedisplay();
        })
   
});