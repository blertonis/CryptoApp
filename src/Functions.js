export const detectPositive = (val) =>{
    let check = Math.sign(parseFloat(val));
     if(check==-1){
         return <span className="neg">{val}%</span>
     } else if(check==1){
        return <span className="pos">{val}%</span>;
     }
 }