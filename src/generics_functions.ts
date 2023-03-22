/* 

! sem generics !

function exemple(value: string):string {
  return value;
}

function exemple2(value: number):number {
  return value;
}

function exemple3(value: boolean):boolean {
  return value;
}

console.log(exemple('Oi'));
console.log(exemple2(2));
console.log(exemple3(true)); 

*/

/* Com generics */

function exemple<T>(value:T):T{
  return value;
}

console.log(exemple<string>("oi"));
console.log(exemple<number>(123));
console.log(exemple<boolean>(true));

/* Com mais parametros */
function exemple2<T, U>(value:T, value2:U):T{
  return value;
}

console.log(exemple2<number, number>(1,1));
console.log(exemple2<number, string>(1,'oi'));

/* Com ecmascript */
const exemple3 = <T, U>(v1:T, v2:U):T => v1;

console.log(exemple3<number, number>(2,2));
